import { Link } from '@material-ui/core'
import ProfileImg from '../../../common/profile/image/ProfileImg'
import './following.css'

export default function Following({ imgSrc, userName, userId }) {
  return (
    <Link to={'/profile/' + userId} style={{ textDecoration: 'none' }}>
      <div className="rightbarFollowing">
        <ProfileImg imgSrc={imgSrc} className="rightbarFollowingImg" />
        <span className="rightbarfollowingName">{userName}</span>
      </div>
    </Link>
  )
}
