import { AccountCircleTwoTone } from '@material-ui/icons'

export default function ProfileImg({ imgSrc, className }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <>
      {imgSrc ? (
        <img className={className} src={PF + imgSrc} alt="" />
      ) : (
        <AccountCircleTwoTone className={className} />
      )}
    </>
  )
}
