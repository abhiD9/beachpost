import {combineReducers} from 'redux'
import authReducer from './reducers/auth'
import postsReducer from './reducers/posts'

const rootReducer = combineReducers({
    posts: postsReducer,
    auth: authReducer
    })

export default rootReducer