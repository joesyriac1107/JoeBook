const PostReducer = (state, action) => {
  switch (action.type) {
    case 'POST_ADD': 
      return addPost(action.payload,state) 
    case 'REMOVE_POST':
     return removePost(action.payload,state)
    case 'POST_ADD_ALL': 
      return addAllPost(action.payload)  
    default:
      return state
  }
}

const addPost = (post,state) => {
  return {
    posts : state.posts.concat(post)
  }
}
const removePost = (postId,state) => {
  state.postsById.delete(postId)
  return state   
}
const addAllPost = (posts)=> {
  return{
    posts : posts
  }
}

export default PostReducer