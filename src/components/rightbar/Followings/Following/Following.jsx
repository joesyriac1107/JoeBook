import ProfileImg from '../../../common/profile/image/ProfileImg'
import './following.css'

export default function Following({imgSrc, userName}) {
    return (
       <div className="rightbarFollowing">
           <ProfileImg imgSrc={imgSrc} className="rightbarFollowingImg" />
           <span className="rightbarfollowingName">{userName}</span>
       </div>
    )
}
