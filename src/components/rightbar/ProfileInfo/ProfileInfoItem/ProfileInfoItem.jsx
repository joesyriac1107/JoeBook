import './profileInfoItem.css'

export default function ProfileInfoItem({ infoKey, infoValue }) {
  return (
    <div className="rightbarInfoItem">
      <span className="rightbarInfoKey">{infoKey}</span>
      <span className="rightbarInfoValue">{infoValue}</span>
    </div>
  )
}
