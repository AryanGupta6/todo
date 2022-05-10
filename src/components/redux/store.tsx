import { configureStore } from '@reduxjs/toolkit'
import arrCounter from '../redux/taskarrayslice'

export const store = configureStore({
  reducer: {
      arr: arrCounter,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch