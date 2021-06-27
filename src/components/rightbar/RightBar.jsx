import ProfileImg from '../common/profile/image/ProfileImg'
import './rightbar.css'

export default function RightBar() {
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className="birthdayImg"/>
                    <span className="birthdayText">
                        <b>Pola Faster</b>
                        and
                        <b>3 other friends</b>
                        have birthday today.
                    </span>
                </div>
                <img src="assets/ad.png" alt="" className="rightbarAd"/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <ProfileImg imgSrc = "assets/person/3.jpeg" className="rightbarProfileImg"/>
                            <div className="rightbarOnline"></div>
                        </div>
                        <span className="rightbarFriendName">John Carter</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <ProfileImg imgSrc = "assets/person/3.jpeg" className="rightbarProfileImg"/>
                            <div className="rightbarOnline"></div>
                        </div>
                        <span className="rightbarFriendName">John Carter</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <ProfileImg imgSrc = "assets/person/3.jpeg" className="rightbarProfileImg"/>
                            <div className="rightbarOnline"></div>
                        </div>
                        <span className="rightbarFriendName">John Carter</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <ProfileImg imgSrc = "assets/person/3.jpeg" className="rightbarProfileImg"/>
                            <div className="rightbarOnline"></div>
                        </div>
                        <span className="rightbarFriendName">John Carter</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <ProfileImg imgSrc = "assets/person/3.jpeg" className="rightbarProfileImg"/>
                            <div className="rightbarOnline"></div>
                        </div>
                        <span className="rightbarFriendName">John Carter</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <ProfileImg imgSrc = "assets/person/3.jpeg" className="rightbarProfileImg"/>
                            <div className="rightbarOnline"></div>
                        </div>
                        <span className="rightbarFriendName">John Carter</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <ProfileImg imgSrc = "assets/person/3.jpeg" className="rightbarProfileImg"/>
                            <div className="rightbarOnline"></div>
                        </div>
                        <span className="rightbarFriendName">John Carter</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <ProfileImg imgSrc = "assets/person/3.jpeg" className="rightbarProfileImg"/>
                            <div className="rightbarOnline"></div>
                        </div>
                        <span className="rightbarFriendName">John Carter</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <ProfileImg imgSrc = "assets/person/3.jpeg" className="rightbarProfileImg"/>
                            <div className="rightbarOnline"></div>
                        </div>
                        <span className="rightbarFriendName">John Carter</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
