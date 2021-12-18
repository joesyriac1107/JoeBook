const PostReducer = (state, action) => {
  switch (action.type) {
    case 'POST_UPLOADING':
      return isUpLoading(state, true)
    case 'POST_UPLOADING_COMPLETE':
      return isUpLoading(state, false)
    case 'POST_ADD':
      return addPost(action.payload, state)
    // case 'REMOVE_POST':
    //   return removePost(action.payload, state)
    case 'POST_ADD_ALL':
      return addAllPost(action.payload, state)
    default:
      return state
  }
}

const addPost = (post, state) => {
  return {
    posts: [post, ...state.posts],
    isUpLoading: state.isUpLoading,
  }
}
// const removePost = (postId, state) => {
//   state.postsById.delete(postId)
//   return state
// }
const addAllPost = (posts, state) => {
  return {
    posts: posts,
    isUpLoading: state.isUpLoading,
  }
}

const isUpLoading = (state, uploadStatus) => {
  return {
    posts: state.posts,
    isUpLoading: uploadStatus,
  }
}

export default PostReducer
