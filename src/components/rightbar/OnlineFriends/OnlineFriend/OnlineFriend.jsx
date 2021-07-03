import './onlineFriend.css'
import ProfileImg from '../../../common/profile/image/ProfileImg'
export default function OnlineFriend({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <ProfileImg
          imgSrc={user.profilePicture}
          className="rightbarProfileImg"
        />
        <div className="rightbarOnline"></div>
      </div>
      <span className="rightbarFriendName">{user.username}</span>
    </li>
  )
}
