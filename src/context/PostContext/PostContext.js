import { createContext, useReducer } from 'react'
import PostReducer from './PostReducer'

const INITIAL_STATE = {
  posts: [],
  isUpLoading: false,
}

export const PostContext = createContext(INITIAL_STATE)
export const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PostReducer, INITIAL_STATE)

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        isUpLoading: state.isUpLoading,
        dispatch,
      }}
    >
      {children}
    </PostContext.Provider>
  )
}
