import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface Todo {
  id: string;
  title: string;
}

interface todoState {
  todo: Array<Todo>;
}

const initialState: todoState = {
  todo: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todo.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;

export const selectTodo = (state: RootState) => state.todo;

export default todoSlice.reducer;
