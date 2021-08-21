import './topbar.css'
import { Chat, Notifications, Person, Search } from '@material-ui/icons'
import ProfileImg from '../common/profile/image/ProfileImg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

export default function TopBar() {
  const { user } = useContext(AuthContext)
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo"> JoeBook</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <div className="topbarLink">Homepage</div>
          <div className="topbarLink">TimeLine</div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <ProfileImg
          className="topbarImg"
          imgSrc={
            user && user.profilePicture
              ? user.profilePicture
              : 'person/noAvatar.png'
          }
        />
      </div>
    </div>
  )
}
