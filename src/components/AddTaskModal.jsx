import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from '../redux/taskSlice';
import { createTask, updateTaskApi } from '../utils/api';
import Swal from 'sweetalert2';

const AddTaskModal = ({ showModal, setShowModal, taskToEdit }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (taskToEdit) {
      setTaskTitle(taskToEdit.title);
    }
  }, [taskToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskTitle.trim()) {
      Swal.fire({
        title: "Error!",
        text: "Task title is required.",
        icon: "error",
      });
      return;
    }
    if (taskToEdit) {
      const updatedTask = { ...taskToEdit, title: taskTitle };
      const updated = await updateTaskApi(updatedTask);
      dispatch(updateTask(updated));
      Swal.fire({
        title: "Updated!",
        text: "Task has been updated successfully.",
        icon: "success",
      });
    } else {
      const newTask = { title: taskTitle, completed: false };
      const createdTask = await createTask(newTask);
      dispatch(addTask(createdTask));
      Swal.fire({
        title: "Added!",
        text: "New task has been added successfully.",
        icon: "success",
      });
    }

    setTaskTitle('');
    setShowModal(false);
  };

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title className='text-black'>{taskToEdit ? 'Edit Task' : 'Add New Task'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTaskTitle">
            <Form.Label  className='text-black'>Task Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </Form.Group>
          <Button variant="success" type="submit" className="w-100">
            {taskToEdit ? 'Update Task' : 'Add Task'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddTaskModal;
