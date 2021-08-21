import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

export default function Feed() {
  const [posts, setPosts] = useState([])

  const { user } = useContext(AuthContext)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = user ? await axios.get(`posts/${user._id}/timeline`) : null
        res ? setPosts(res.data) : console.log('NUll response')
      } catch (err) {
        console.log(err)
      }
    }
    fetchPosts()
  }, [])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}
