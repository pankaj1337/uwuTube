import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      // Check if the messages array length exceeds the threshold
      if (state.messages.length >= OFFSET_LIVE_CHAT) {
        // Remove the oldest message
        state.messages.shift();
      }
      // Push the new message
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
