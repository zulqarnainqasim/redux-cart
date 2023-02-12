import { createSlice } from "@reduxjs/toolkit"

const uiSlice=createSlice({
name:'ui',
initialState:{notification:{}},
reducers:{
    showNotification(state,action){
        state.notification={
            message:action.payload.message,
            type:action.payload.type,
            open:action.payload.open
        }
    }
}
})
export const uiActions=uiSlice.reducer
export default uiSlice