import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'
import { useDispatch } from 'react-redux'
import multicall from './multicall/reducer'
import infoReducer from './info'

const PERSISTED_KEYS: string[] = ['user', 'transactions', 'lists', 'profile', 'collectibles']

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    info: infoReducer,

    // Exchange
    multicall,
  },
  middleware: [...getDefaultMiddleware({ thunk: true }), save({ states: PERSISTED_KEYS })],
  preloadedState: load({ states: PERSISTED_KEYS }),
})



/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch()

export default store
