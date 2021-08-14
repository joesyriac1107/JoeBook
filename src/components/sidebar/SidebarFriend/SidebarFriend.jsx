import ProfileImg from '../../common/profile/image/ProfileImg'
import './sideBarFriend.css'

export default function SidebarFriend({ user }) {
  return (
    <li className="sidebarFriend">
      <ProfileImg imgSrc={user.profilePicture} className="sidebarFriendImg" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}
