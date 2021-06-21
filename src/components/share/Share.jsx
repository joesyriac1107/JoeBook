import ProfileImg from '../common/profile/image/ProfileImg'
import './share.css'
import ShareOptions from './ShareOptions/ShareOptions'

export default function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <ProfileImg className = 'shareProfileImg' imgSrc = '/assets/person/1.jpeg'/>
                    <input placeholder="Whats in your mind Safak?" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <ShareOptions />
                </div>
            </div>
        </div>
    )
}
