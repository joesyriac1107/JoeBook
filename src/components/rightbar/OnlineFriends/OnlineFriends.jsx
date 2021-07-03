import './onlineFriends.css'
import { Users } from '../../../dummyData'
import OnlineFriend from './OnlineFriend/OnlineFriend'

export default function OnlineFriends() {
  return (
    <div className="rightbarOnlineFriendsContainer">
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map((user) => (
          <OnlineFriend key={user.id} user={user} />
        ))}
      </ul>
    </div>
  )
}
