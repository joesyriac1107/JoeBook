import { MoreVert } from '@material-ui/icons'
import ProfileImg from '../common/profile/image/ProfileImg'
import './post.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(false)
  const [user, setUser] = useState({})
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const CDN = process.env.REACT_APP_IMAGE_CDN_PREFIX
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`)
      setUser(res.data)
    }
    // const fetchImage = async () => {
    //   const res = await axios.get(`storage/${post.userId}/${post.imgName}`)
    //   setUser(res.data)
    // }
    fetchUser()
    // fetchImage()
  }, [post.imgName, post.userId])

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <ProfileImg
              className="postProfileImg"
              imgSrc={user.profilePicture || 'person/noAvatar.png'}
            />
            <span className="postUserName">{user.userName}</span>
            <span className="postDate">{post.updatedAt}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
        </div>
        <img
          src={`${CDN}${post.userId}/${post.imgName}`}
          alt=""
          className="postImg"
        />
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={PF + '/like.png'}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={PF + '/heart.png'}
              alt=""
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comments} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
