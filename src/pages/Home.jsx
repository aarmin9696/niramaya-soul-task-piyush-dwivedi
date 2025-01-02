import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store'
import { Row, Col, Button, Form } from 'react-bootstrap';
import TaskList from '../components/TaskList';
import AddTaskModal from '../components/AddTaskModal';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all'); // Filter status: 'all', 'completed', 'pending'

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  return (
    <Provider store={store}>
        <Row>
          <Col>
            <h1 className="text-center text-black mb-4 ">Task Tracker</h1>
            <div className='d-flex gap-2  justify-content-between'>
              <div>
                 <Button variant="primary" onClick={() => setShowModal(true)} className="mb-3 border border-none bg-dark">
              Add Task
            </Button>
              </div>
             <div>
              <Form.Select
            value={filterStatus}
            onChange={handleFilterChange}
            className="mb-3"
            aria-label="Filter tasks"
          >
            <option value="all">All Tasks</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </Form.Select>
             </div>
            
            </div>
            
          <TaskList filterStatus={filterStatus} />
            <AddTaskModal showModal={showModal} setShowModal={setShowModal} />
          </Col>
        </Row>
    </Provider>
  );
};

export default Home;
