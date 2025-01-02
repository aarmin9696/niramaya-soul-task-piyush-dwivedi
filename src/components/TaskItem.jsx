import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateTask, deleteTask } from "../redux/taskSlice";
import AddTaskModal from "./AddTaskModal";
import Swal from "sweetalert2";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [showEditModal, setShowEditModal] = useState(false);

  const handleToggleStatus = () => {
    try {
      dispatch(updateTask({ ...task, completed: !task.completed }));
    } catch (err) {
      Swal.fire({
        title: 'Error',
        text: 'Failed to update task status.',
        icon: 'error',
      });
    }
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTask(task.id));
        Swal.fire({
          title: "Deleted!",
          text: "Task has been deleted.",
          icon: "success",
        });
      }
    });
  };
  

  const handleEdit = () => {
    setShowEditModal(true);
  };

  return (
    <>
      <li className="list-group-item d-flex  flex-column flex-md-row  justify-content-between align-items-start align-items-md-center gap-2">
        {task.title}
        <div className="d-flex gap-2">
          <div className="toggle-pill">
            <span
              className={`toggle-option ${!task.completed ? "selected" : ""}`}
              onClick={handleToggleStatus}
            >
              Pending
            </span>
            <input
              type="checkbox"
              className="form-check-input toggle-checkbox"
              id={`flexSwitchCheckDefault${task?.id}`}
              checked={task?.completed}
              onChange={handleToggleStatus}
            />
            <span
              className={`toggle-option ${task?.completed ? "selected" : ""}`}
              onClick={handleToggleStatus}
            >
              Completed
            </span>
          </div>
          <Button
            variant="warning"
            onClick={handleEdit}
            className="btn btn-sm border border-none actionBtn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="black"
              className="bi bi-pencil-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12.854.146a.5.5 0 0 1 .632-.058l.07.058 2.5 2.5a.5.5 0 0 1 .058.632l-.058.07-10 10a.5.5 0 0 1-.233.131l-.07.019-5 1a.5.5 0 0 1-.615-.615l.019-.07 1-5a.5.5 0 0 1 .131-.232l.058-.07 10-10zM11.207 2L3 10.207V13h2.793L14 4.793 11.207 2z" />
            </svg>
          </Button>
          <Button
            variant="danger"
            onClick={handleDelete}
            className="btn btn-sm border border-none actionBtn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="red"
              className="bi bi-trash-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 1a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1H15a1 1 0 0 1 0 2h-1v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3H1a1 1 0 0 1 0-2h1.5zm2.118 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h6.764a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H4.618zm1.5 1.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z" />
            </svg>
          </Button>
        </div>
      </li>

      {/* Edit Task Modal */}
      <AddTaskModal
        showModal={showEditModal}
        setShowModal={setShowEditModal}
        taskToEdit={task}
      />
    </>
  );
};

export default TaskItem;
