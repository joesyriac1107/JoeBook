import axios from 'axios'
import { useContext, useRef, useState } from 'react'
import { uploadFile } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext'
import ProfileImg from '../common/profile/image/ProfileImg'
import './share.css'
import ShareOptions from './ShareOptions/ShareOptions'

export default function Share() {
  const { user } = useContext(AuthContext)
  const desc = useRef()
  const [file, setFile] = useState(null)
  const submitHandler = (e) => {
    e.preventDefault()
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    }

    if(file){
      uploadFile(file,user._id)
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
          <ShareOptions setFile = {setFile}/>
        </form>
      </div>
    </div>
  )
}
