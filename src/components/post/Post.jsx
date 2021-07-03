import { MoreVert } from '@material-ui/icons'
import ProfileImg from '../common/profile/image/ProfileImg'
import './post.css'
import { Users } from '../../dummyData'

export default function Post({ post }) {
    console.log(Users)
    const user = Users.filter(user => user.id === post.userId)[0]
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <ProfileImg className='postProfileImg' imgSrc={user.profilePicture} />
                        <span className="postUserName">{user.username}</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter"></div>
                <span className="postText">{post.desc}</span>
                <img src={post.photo} alt="" className="postImg" />
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="/assets/like.png" alt="" />
                        <img className='likeIcon' src="/assets/heart.png" alt="" />
                        <span className="postLikeCounter">{post.like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">
                            9 comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
