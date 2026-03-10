import {configureStore} from '@reduxjs/toolkit'
import Userdata from './features/userSlice'
const Store=configureStore({
    reducer:{
        Auth:Userdata
    }
})

export default Store