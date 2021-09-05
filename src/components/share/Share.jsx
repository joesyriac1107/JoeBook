import axios from 'axios'
import {useContext, useRef, useState} from 'react'
import {uploadFile} from '../../apiCalls'
import {AuthContext} from '../../context/AuthContext'
import ProfileImg from '../common/profile/image/ProfileImg'
import {PostContext} from '../../context/PostContext/PostContext'
import './share.css'
import ShareOptions from './ShareOptions/ShareOptions'

export default function Share() {
  const {user} = useContext(AuthContext)
  const {dispatch} = useContext(PostContext)
  const desc = useRef()
  const [file, setFile] = useState(null)
  const submitHandler = async (e) => {
    e.preventDefault()
    const newPost = {
      userId: user._id,
      desc: desc.current.value
    }
    try {
      let fileName
      if (file) {
        fileName = await uploadFile(file, user._id)
        newPost.imgName = fileName
      }
      const savedPost = await axios.post('/posts', newPost)
      dispatch({type: 'POST_ADD', payload: savedPost.data})

    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="sharePost">
          <div className="shareTop">
            <ProfileImg className="shareProfileImg"
              imgSrc={
                user && user.profilePicture ? user.profilePicture : 'person/noAvatar.png'
              }/>
            <input placeholder="Whats in your mind Safak?" className="shareInput"
              ref={desc}/>
          </div>
          <img src={
              file && URL.createObjectURL(file)
            }
            alt=""
            className="shareImg"/>
          </div>
        <hr className="shareHr"/>
        <form className="shareBottom"
          onSubmit={submitHandler}>
          <ShareOptions setFile={setFile}/>
        </form>
      </div>
    </div>
  )
}
