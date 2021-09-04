import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import axios from 'axios'
import {useState, useEffect, useContext} from 'react'
import {AuthContext} from '../../context/AuthContext'
import {PostContext} from '../../context/PostContext/PostContext'

export default function Feed() { // const [posts, setPosts] = useState([])
  const {posts} = useContext(PostContext)
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/> {
          posts.map(post => <Post key={
              post._id
            }
            post={post}/>)
        }
      </div>
    </div>
  )
}
