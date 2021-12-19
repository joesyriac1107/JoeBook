import './followings.css'
import Following from './Following/Following'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Followings({ user }) {
  const [friends, setFriends] = useState([])
  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get('/users/friends/' + user._id)
        setFriends(friendList.data)
      } catch (err) {
        console.log(err)
      }
    }
    user && user._id && getFriends()
  }, [user])
  return (
    <div className="rightbarFollowings">
      {friends.map((friend) => (
        <Following
          imgSrc={friend.profilePicture}
          userName={friend.userName}
          userId={friend._id}
        />
      ))}
    </div>
  )
}
