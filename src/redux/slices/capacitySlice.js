import { createSlice } from "@reduxjs/toolkit";

const generateId = () => new Date().getTime();

const agentsInit = {
  id: "",
  aname: "",
  astart: "0",
  aend: "20",
  anum: 0,
  ahtarget: 0,
};
const initialState = [];

export const capacitySlice = createSlice({
  name: "updateQueue",
  initialState,
  reducers: {
    addCapacity: (state) => {
      state.push({ ...agentsInit, id: generateId() });
      return state;
    },
    removeCapacity: (state, action) => {
      console.log("click removed", action.payload);
      state = state.filter((agents) => agents.id !== action.payload);
      return state;
    },
    updateCapacity: (state, action) => {
      const { id, name, value } = action.payload;
      state = state.map((agents) =>
        agents.id === id ? { ...agents, [name]: value } : agents
      );
      return state;
    },
  },
});

export const { addCapacity, removeCapacity, updateCapacity } =
  capacitySlice.actions;

export default capacitySlice.reducer;
