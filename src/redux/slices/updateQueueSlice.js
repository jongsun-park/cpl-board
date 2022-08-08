import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  qname: "",
  qstart: "0",
  qend: "20",
  qamount: 0,
};

export const updateQueueSlice = createSlice({
  name: "updateQueue",
  initialState,
  reducers: {
    update: (state, action) => {
      state = { ...state, ...action.payload };
      console.log(state);
      return state;
    },
  },
});

export const { update } = updateQueueSlice.actions;

export default updateQueueSlice.reducer;
