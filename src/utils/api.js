import axios from "axios";
let isFirstLoad = true;

export const fetchTasks = async () => {
  try {
    if (isFirstLoad) {
      const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks')) || [];
      if (tasksFromLocalStorage.length === 0) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
        const tasks = response.data;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        isFirstLoad = false;
        return tasks;
      }
      isFirstLoad = false; 
      return tasksFromLocalStorage;
    }
    return JSON.parse(localStorage.getItem('tasks')) || [];
  } catch (error) {
    throw new Error('Failed to fetch tasks from API');
  }
};

export const createTask = async (task) => {
  try {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newTask = { ...task, id: Date.now() }; 
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks)); 
    return newTask;
  } catch (error) {
    throw new Error('Failed to create task');
  }
};

export const updateTaskApi = async (task) => {
  try {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const index = tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      tasks[index] = task;
      localStorage.setItem('tasks', JSON.stringify(tasks)); 
      return task;
    } else {
      throw new Error('Task not found');
    }
  } catch (error) {
    throw new Error('Failed to update task');
  }
};

export const deleteTask = async (id) => {
  try {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const filteredTasks = tasks.filter(t => t.id !== id);
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
  } catch (error) {
    throw new Error('Failed to delete task');
  }
};

