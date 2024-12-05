import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    displayMessage(state, action) {
      return action.payload;
    },
    removeMessage(state, action) {
      return "";
    },
  },
});

export const setNotification=(message)=>{

let  timer=5000;

if(message.timer)
  timer=message.timer *1000

  return async dispatch =>{
  dispatch(displayMessage(message.content))
  setTimeout(() => {
   dispatch(removeMessage())
 }, timer)
}
}

export const { displayMessage, removeMessage } = notificationSlice.actions;

export default notificationSlice.reducer;
