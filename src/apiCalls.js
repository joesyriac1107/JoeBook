import axios from 'axios'

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: 'LOGIN_START' })
  try {
    const res = await axios.post('auth/login', userCredential)
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
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
