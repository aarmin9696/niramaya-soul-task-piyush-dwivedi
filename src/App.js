import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Container, Button } from 'react-bootstrap';
import store from './redux/store';
import Home from './pages/Home';
import { isAuthenticated, login, logout } from './utils/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    login();
    setAuthenticated(true);
  };

  const handleLogout = () => {
    logout();
    setAuthenticated(false);
  };

  if (!authenticated) {
    return (
      <div className="login-container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="d-flex flex-column justify-content-center text-center">
        <h2>Please log in to access the app</h2>
        <Button variant='success' onClick={handleLogin}>Login</Button>
      </div>
    </div>
    );
  }

  return (
    <Provider store={store}>
      <Container className="mt-5">
        <div className='d-flex justify-content-end'>
          <Button  variant="danger" onClick={handleLogout}>Logout</Button>
        </div>
        
        <Home />
      </Container>
    </Provider>
  );
};

export default App;
