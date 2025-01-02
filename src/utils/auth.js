export const isAuthenticated = () => {
    return localStorage.getItem('authToken') ? true : false;
  };
  
  export const login = () => {
    localStorage.setItem('authToken', 'dummyToken123');
  };
  
  export const logout = () => {
    localStorage.removeItem('authToken');
  };
  