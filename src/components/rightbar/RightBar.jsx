import OnlineFriends from './OnlineFriends/OnlineFriends'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Followings from './Followings/Followings'
import './rightbar.css'


export default function RightBar({profile}) {
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className="birthdayImg"/>
                    <span className="birthdayText">
                        <b>Pola Faster
                        </b>
                        and
                        <b>
                            3 other friends
                        </b>
                        have birthday today.
                    </span>
                </div>
                <img src="assets/ad.png" alt="" className="rightbarAd"/>
                <OnlineFriends/>
            </>
        )
    }

    const ProfileRightBar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Information</h4>
                <ProfileInfo/>
                <h4 className="rightbarFriends">
                  <Followings />
                </h4>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
               {profile ? <ProfileRightBar /> : <HomeRightbar />}
            </div>
        </div>
    )
}
