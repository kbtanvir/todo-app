import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
export const todoSlice = createSlice({
  name: "todo",
  initialState: [
    {
      id: 1,
      text: "learn typescript",
      complete: false,
    },
    {
      id: 2,
      text: "Get a job",
      complete: false,
    },
  ],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (text) => {
        return {
          payload: {
            id: nanoid(),
            text,
            complete: false,
          },
        };
      },
    },
    updateTodo: (state, { payload }) => {
      const index = state.findIndex((todo) => todo.id === payload.id);
      if (index !== -1) state[index].text = payload.input;
    },
    toggleCompleteTodo: (state, { payload }) => {
      const index = state.findIndex((todo) => todo.id === payload.id);
      if (index !== -1) state[index].complete = !payload.done;
    },
    removeTodo: (state, { payload }) => {
      const index = state.findIndex((todo) => todo.id === payload.id);
      if (index !== -1) state.pop();
    },
  },
});

export const {
  addTodo,
  toggleCompleteTodo,
  removeTodo,
  updateTodo,
} = todoSlice.actions;

export const selectTodo = (state) => state.todo;

export default todoSlice.reducer;
