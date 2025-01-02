import { createSlice } from '@reduxjs/toolkit';

const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

const initialState = {
  tasks: savedTasks, 
  status: 'idle', 
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
      localStorage.setItem('tasks', JSON.stringify(state.tasks)); 
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload.id);
      if (task) {
        task.title = action.payload.title;
        task.completed = action.payload.completed;
      }
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
});

export const { setTasks, addTask, updateTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
