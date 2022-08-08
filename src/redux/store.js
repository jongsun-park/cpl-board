import { configureStore } from "@reduxjs/toolkit";
import updateQueueReducer from "./slices/updateQueueSlice";
import capacitySlice from "./slices/capacitySlice";

export const store = configureStore({
  reducer: {
    updateQueue: updateQueueReducer,
    capacity: capacitySlice,
  },
});
