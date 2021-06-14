import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todolist/todoSlice";
import authReducer from "../features/firebaseLoginSystem/settings/authSlice";
import blogReducer from "../features/blog/redux/blogSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    auth: authReducer,
    blog: blogReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
