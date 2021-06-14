import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
export const blogSlice = createSlice({
  name: "blog",
  initialState: [
    {
      id: 1,
      title: "learn typescript",
      // content:
      //   "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      selected: false,
    },
    {
      id: 2,
      title: "Coding is fun",
      // content:
      //   "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      selected: false,
    },
    {
      id: 3,
      title: "Cats love fish",
      // content:
      //   "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      selected: false,
    },
    {
      id: 4,
      title: "I am stuck",
      // content:
      //   "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      selected: false,
    },
  ],
  reducers: {
    create: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: input => {
        return {
          payload: {
            id: nanoid(),
            title: input.title,
            content: input.content,
          },
        };
      },
    },
    update: (state, { payload }) => {
      const index = state.findIndex(item => item.id === payload.id);
      if (index !== -1) state[index].title = payload.title;
    },
    select: (state, { payload }) => {
      const index = state.findIndex(item => item.id === payload.id);
      if (index !== -1) state[index].selected = !payload.selected;
    },

    removeSelected: state => {
      const indices = state.reduce((init, item, index) => {
        if (item.selected === true) {
          init.push(index);
        }
        return init;
      }, []);

      // for (let i = indices.length - 1; i >= 0; i--) state.splice(indices[i], 1);

      while (indices.length) state.splice(indices.pop(), 1);
    },

    remove: (state, { payload }) => {
      const index = state.findIndex(item => item.id === payload.id);
      if (index !== -1) state.pop();
    },
  },
});

export const {
  create,
  select,
  remove,
  removeSelected,
  update,
} = blogSlice.actions;

export const selectBlog = state => state.blog;

export default blogSlice.reducer;
