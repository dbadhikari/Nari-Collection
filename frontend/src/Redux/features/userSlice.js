import { createSlice } from "@reduxjs/toolkit";


const Userdata=createSlice({
    name:'users',
    initialState:{
        token:localStorage.getItem("token")||null,
        user:null,
    },
    reducers:{
        setUser:(state,action)=>{
         state.user=action.payload.user
         state.token=action.payload.token
        },
        setLogout:(state)=>{
            state.user=null
            state.token=null
            localStorage.removeItem("token")
        }
    }
})
export const{setUser,setLogout}=Userdata.actions

export default Userdata.reducer