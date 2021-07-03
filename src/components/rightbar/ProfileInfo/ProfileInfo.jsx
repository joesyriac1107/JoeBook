import './profileInfo.css'
import ProfileInfoItem from './ProfileInfoItem/ProfileInfoItem'

export default function ProfileInfo() {
  const infoMap = [
    {
      key: 'City',
      value: 'New York',
    },
    {
      key: 'From:',
      value: 'Madrid',
    },
    {
      key: 'Relationship',
      value: 'single',
    },
  ]
  return (
    <div className="rightbarInfo">
      {infoMap.map((pair) => (
        <ProfileInfoItem
          key={pair.key}
          infoKey={pair.key}
          infoValue={pair.value}
        />
      ))}
    </div>
  )
}
