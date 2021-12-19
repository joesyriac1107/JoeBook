import OnlineFriends from './OnlineFriends/OnlineFriends'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Followings from './Followings/Followings'
import './rightbar.css'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Add, Remove } from '@material-ui/icons'
import axios from 'axios'

export default function RightBar({ user }) {
  const { user: currentUser, dispatch } = useContext(AuthContext)
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  )
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Faster</b>
            and
            <b>3 other friends</b>
            have birthday today.
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <OnlineFriends />
      </>
    )
  }

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        })
        dispatch({ type: 'UNFOLLOW', payload: user._id })
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        })
        dispatch({ type: 'FOLLOW', payload: user._id })
      }
      setFollowed(!followed)
    } catch (err) {}
  }

  const ProfileRightBar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? 'Unfollow' : 'Follow'}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className="rightbarTitle">User Information</h4>
        <ProfileInfo user={user} />
        <h4 className="rightbarFriends">
          <Followings user={user} />
        </h4>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
