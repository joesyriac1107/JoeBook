import './shareOption.css'
import { PermMedia, Label, Room, EmojiEmotions, Reply } from '@material-ui/icons'

export default function ShareOption({optionName}) {
    const optionsMap = {
        photoVideo : {
            component: <PermMedia htmlColor="tomato" className="shareIcon"/>,
            text: 'Photo or Video'
        },
        tag: {
            component:<Label htmlColor='#6699CC' className="shareIcon"/>,
            text: 'Tag'
        },
        location : {
            component:<Room htmlColor="#5DBB63" className="shareIcon"/>,
            text: 'Location'
        },
        feelings:{
            component:<EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>,
            text: 'Feelings'
        },
        share:{
            component:<Reply htmlColor="grey" className="shareIcon shareIconArrow"/>,
            text:'Share'
        }

    }

    const shareOptionButton = optionsMap[optionName]
    return (
        <div className="shareOption">
            {shareOptionButton['component']}
            <span className="shareOptionText">{shareOptionButton['text']}</span>
        </div>
    )
}


// <Label htmlColor='#6699CC' className="shareIcon"/>
//                             <span className="shareOptionText">Tag</span>
//                         </div>
//                         <div className="shareOption">
//                             <Room htmlColor="#5DBB63" className="shareIcon"/>
//                             <span className="shareOptionText">Location</span>
//                         </div>
//                         <div className="shareOption">
//                             <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
//                             <span className="shareOptionText">Feelings</span>
//                         </div>
//                         <div className="shareOption">
//                             <Reply htmlColor="grey" className="shareIcon shareIconArrow"/>
//                             <span className="shareOptionText">Share</span>
