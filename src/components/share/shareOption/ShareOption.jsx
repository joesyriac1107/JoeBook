import './shareOption.css'
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Reply,
} from '@material-ui/icons'
import { useState } from 'react'

export default function ShareOption({ optionName }) {
  const [file, setFile] = useState()

  const optionsMap = {
    photoVideo: {
      component: <PermMedia htmlColor="tomato" className="shareIcon" />,
      text: 'Photo or Video',
      inputType: 'file',
      tagType: 'label',
    },
    tag: {
      component: <Label htmlColor="#6699CC" className="shareIcon" />,
      text: 'Tag',
    },
    location: {
      component: <Room htmlColor="#5DBB63" className="shareIcon" />,
      text: 'Location',
    },
    feelings: {
      component: <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />,
      text: 'Feelings',
    },
    share: {
      component: (
        <Reply htmlColor="grey" className="shareIcon shareIconArrow" />
      ),
      text: 'Share',
    },
  }

  const inputMap = {
    file: (
      <input
        style={{ display: 'none' }}
        type="file"
        id="file"
        accept=".png,.jpeg,.jpg"
        onChange={(e) => setFile(e.target.files[0])}
      />
    ),
  }

  const CustomTagSwitch = ({ className, tagType, children }) => {
    switch (tagType) {
      case 'label':
        return (
          <label htmlFor="file" className={className}>
            {children}
          </label>
        )
      default:
        return <div className={className}>{children}</div>
    }
  }

  const shareOptionButton = optionsMap[optionName]

  return (
    <CustomTagSwitch
      className="shareOption"
      tagType={shareOptionButton['tagType']}
    >
      {shareOptionButton['component']}
      <span className="shareOptionText">{shareOptionButton['text']}</span>
      {inputMap[shareOptionButton['inputType']]}
    </CustomTagSwitch>
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
