import './followings.css'
import Following from './Following/Following'

export default function Followings() {
    const followingMap = [
    {
        imgSrc: 'assets/person/1.jpeg',
        userName:'John Carter'
    },
    {
        imgSrc: 'assets/person/2.jpeg',
        userName:'John Carter'
    },
    {
        imgSrc: 'assets/person/3.jpeg',
        userName:'John Carter'
    },
    {
        imgSrc: 'assets/person/4.jpeg',
        userName:'John Carter'
    },
    {
        imgSrc: 'assets/person/5.jpeg',
        userName:'John Carter'
    },
    {
        imgSrc: 'assets/person/6.jpeg',
        userName:'John Carter'
    },
    ]
    return (
        <div className = "rightbarFollowings">
            {followingMap.map(following => <Following imgSrc = {following.imgSrc} userName = {following.userName} />)}
        </div>
    )
}
