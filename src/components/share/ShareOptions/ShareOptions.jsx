import ShareOption from '../shareOption/ShareOption'
import './shareoptions.css'

export default function ShareOptions() {
    return (
        <div className="shareOptions">
            <ShareOption optionName='photoVideo'/>
            <ShareOption optionName='tag'/>
            <ShareOption optionName='location'/>
            <ShareOption optionName='feelings'/>
            <ShareOption optionName='share'/>
        </div>
    )
}
