import {combineReducers} from 'redux'
import {faqs} from './faqs.js'
import {users} from './users'


export default combineReducers({
    faqs,
    users
})
