import ShareOption from '../shareOption/ShareOption'
import './shareoptions.css'

export default function ShareOptions({setFile}) {
  return (
    <div className="shareOptions">
      <ShareOption optionName="photoVideo" setFile = {setFile}/>
      <ShareOption optionName="tag" />
      <ShareOption optionName="location" />
      <ShareOption optionName="feelings" />
      <button className="shareButton" type="submit ">
        Share
      </button>
    </div>
  )
}
