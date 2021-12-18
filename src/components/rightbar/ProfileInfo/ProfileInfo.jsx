import './profileInfo.css'
import ProfileInfoItem from './ProfileInfoItem/ProfileInfoItem'

export default function ProfileInfo({ user }) {
  // const infoMap = [
  //   {
  //     key: 'City:',
  //     value: 'New York',
  //   },
  //   {
  //     key: 'From:',
  //     value: 'Madrid',
  //   },
  //   {
  //     key: 'Relationship',
  //     value: 'single',
  //   },
  // ]

  const enumToStatus = (number) => {
    if (number == 2) return 'Married'
    if (number == 3) return 'Complicated'
    else return 'Single'
  }

  const keyToPairTransformer = (key) => {
    let value = user[key]
    if (key === 'relationship') value = enumToStatus(value)
    return {
      key: key.charAt(0).toUpperCase() + key.slice(1),
      value: value,
    }
  }
  const keySet = new Set()
  keySet.add('city')
  keySet.add('from')
  keySet.add('relationship')

  const infoMap = Object.keys(user)
    .filter((key) => keySet.has(key))
    .map(keyToPairTransformer)
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
