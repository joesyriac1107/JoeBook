import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/RightBar'
import Sidebar from '../../components/sidebar/Sidebar'
import TopBar from '../../components/topbar/Topbar'
import ProfileImg from '../../components/common/profile/image/ProfileImg'
import './Profile.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Profile() {
  const [user, setUser] = useState({})
  const userId = useParams().userId

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/${userId}`)
      setUser(res.data)
    }
    fetchUser()
  }, [userId])

  return (
    <>
      <TopBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <ProfileImg
                className="profileCoverImg"
                imgSrc={
                  user && user.coverPhoto
                    ? user.coverPhoto
                    : 'person/noCover.png'
                }
              />
              <ProfileImg
                className="profileUserImg"
                imgSrc={
                  user && user.profilePicture
                    ? user.profilePicture
                    : 'person/noAvatar.png'
                }
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.userName}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed userId={userId} />
            <RightBar user={user} />
          </div>
        </div>
      </div>
    </>
  )
}
