import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('posts/60fd7a05b60dad07950f1df4/timeline')
      setPosts(res.data)
    }
    fetchPosts()
  }, [])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}
