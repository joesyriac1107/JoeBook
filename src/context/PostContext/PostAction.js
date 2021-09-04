export const addPost = post => ({
  type:'POST_ADD',
  payload: post
})
export const removePost = (postId) => ({
  type:'REMOVE_POST',
  payload: postId
})