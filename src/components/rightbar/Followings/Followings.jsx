import './followings.css'
import Following from './Following/Following'

export default function Followings() {
  const followingMap = [
    {
      imgSrc: 'person/1.jpeg',
      userName: 'John Carter',
    },
    {
      imgSrc: 'person/2.jpeg',
      userName: 'John Carter',
    },
    {
      imgSrc: 'person/3.jpeg',
      userName: 'John Carter',
    },
    {
      imgSrc: 'person/4.jpeg',
      userName: 'John Carter',
    },
    {
      imgSrc: 'person/5.jpeg',
      userName: 'John Carter',
    },
    {
      imgSrc: 'person/6.jpeg',
      userName: 'John Carter',
    },
  ]
  return (
    <div className="rightbarFollowings">
      {followingMap.map((following) => (
        <Following imgSrc={following.imgSrc} userName={following.userName} />
      ))}
    </div>
  )
}
