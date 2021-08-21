import axios from 'axios'
import { useContext, useRef } from 'react'
import { AuthContext } from '../../context/AuthContext'
import ProfileImg from '../common/profile/image/ProfileImg'
import './share.css'
import ShareOptions from './ShareOptions/ShareOptions'

export default function Share() {
  const { user } = useContext(AuthContext)
  const desc = useRef()
  const submitHandler = (e) => {
    e.preventDefault()
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    }

    try {
      axios.post('/posts', newPost)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <ProfileImg
            className="shareProfileImg"
            imgSrc={
              user && user.profilePicture
                ? user.profilePicture
                : 'person/noAvatar.png'
            }
          />
          <input
            placeholder="Whats in your mind Safak?"
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={submitHandler}>
          <ShareOptions />
        </form>
      </div>
    </div>
  )
}
