import OnlineFriends from './OnlineFriends/OnlineFriends'
import './rightbar.css'

export default function RightBar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Faster </b>
            and
            <b> 3 other friends </b>
            have birthday today.
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <OnlineFriends />
      </>
    )
  }

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitile">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey"></span>
            <span className="rightbarInfoValue"></span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper"></div>
    </div>
  )
}
