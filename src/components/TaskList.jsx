import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../redux/taskSlice';
import { fetchTasks } from '../utils/api';
import TaskItem from './TaskItem';
import Swal from 'sweetalert2';

const TaskList = ({ filterStatus }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        setLoading(true);
        const tasksData = await fetchTasks();
        dispatch(setTasks(tasksData));
      } catch (err) {
        setError('Failed to fetch tasks');
        Swal.fire({
          title: 'Error',
          text: 'Failed to fetch tasks. Please try again later.',
          icon: 'error',
        });
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, [dispatch]);

  const filteredTasks = tasks.filter((task) => {
    if (filterStatus === 'completed') return task.completed;
    if (filterStatus === 'pending') return !task.completed;
    return true;
  });

  if (loading) {
    return (
      <div className="text-center">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (error) return <p className="text-center text-danger">{error}</p>;


  return (
    <div className='task-container'>
      {filteredTasks.length > 0 ? (
        <ul className="list-group">
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      ) : (
        <p className="text-center">No tasks found</p>
      )}
    </div>
  );
};

export default TaskList;
