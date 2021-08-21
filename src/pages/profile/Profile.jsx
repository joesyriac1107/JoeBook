import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/RightBar'
import Sidebar from '../../components/sidebar/Sidebar'
import TopBar from '../../components/topbar/Topbar'
import ProfileImg from '../../components/common/profile/image/ProfileImg'
import './Profile.css'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

export default function Profile() {
  const { user } = useContext(AuthContext)

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
              <h4 className="profileInfoName">Joe Syriac</h4>
              <span className="profileInfoDesc">Hello My Friends</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  )
}
