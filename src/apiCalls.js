import axios from 'axios'

export const loginCall = async (userCredential, dispatch, postDispatch) => {
  dispatch({ type: 'LOGIN_START' })
  try {
    const res = await axios.post('auth/login', userCredential)  
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data }) 
    fetchPosts(res.data,postDispatch)
    
  } catch (err) {
    dispatch({ type: 'LOGIN_FAILURE', payload: err })
  }
}

export const uploadFile = async (file, containerName) => {
  const data = new FormData()
  const fileName = Date.now() + file.name
  data.append('file', file)
  data.append('fileName', fileName)
  data.append('containerName', containerName)
  try {
    await axios.post('/storage/upload', data)
    return Promise.resolve(fileName)
  } catch (err) {
    return Promise.reject(err)
  }
}

export const fetchPosts = async (user,dispatch) => {
  try {
    const res = user ? await axios.get(`posts/${user._id}/timeline`) : null
    res ? dispatch({type:'POST_ADD_ALL', payload:res.data}) : console.log('NUll response')
  } catch (err) {
    console.log(err)
  }
}