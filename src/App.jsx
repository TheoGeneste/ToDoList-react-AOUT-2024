import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AddTask from './Pages/AddTask'
import { ToastContainer } from 'react-toastify';
import LoginPage from './Pages/LoginPage';
import AuthContext from './Context/AuthContext';
import { useState } from 'react';
import AuthService from './Services/AuthService';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(AuthService.isValid());
  const [user, setUser] = useState(AuthService.getUser());

  return <>
    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, user, setUser}}>
      <BrowserRouter>
        <Routes>    
          <Route path="/" element={<HomePage />}/>
          <Route path='/add' element={<AddTask />} />

          <Route path='/login' element={<LoginPage />} />
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          />
      </BrowserRouter>
    </AuthContext.Provider>

  </>
}

export default App
