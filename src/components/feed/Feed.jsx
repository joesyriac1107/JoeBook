import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import { useContext, useEffect, useState } from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { PostContext } from '../../context/PostContext/PostContext'
import { makeStyles } from '@material-ui/core/styles'
import { fetchPosts } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

export default function Feed({ userId }) {
  const classes = useStyles()
  const { isUpLoading } = useContext(PostContext)
  const [posts, setPosts] = useState([])
  const { user } = useContext(AuthContext)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = userId
          ? await axios.get(`posts/profile/${userId}`)
          : await axios.get(`posts/${user._id}/timeline`)
        console.log(res)
        setPosts(res.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchPosts()
  }, [userId, user._id])
  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!userId || userId === user._id) && <Share />}
        {isUpLoading ? (
          <Backdrop className={classes.backdrop} open>
            <CircularProgress color="inherit" />
            <span>Uploading the post</span>
          </Backdrop>
        ) : (
          posts.map((post) => <Post key={post._id} post={post} />)
        )}
      </div>
    </div>
  )
}
