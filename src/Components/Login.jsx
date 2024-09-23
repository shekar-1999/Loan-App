import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    const storedUser = JSON.parse(localStorage.getItem('loanAppUser'));

    if (storedUser && storedUser.email === loginData.email && storedUser.password === loginData.password) {
      alert('Login Successful!');

      // Store logged-in user data in session or local storage for later use
      localStorage.setItem('loggedInUser', JSON.stringify(storedUser));

      navigate('/dashboard'); // Redirect to the dashboard or home page
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-80" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <label className="block mb-2">Email</label>
        <input 
          type="email" 
          name="email" 
          value={loginData.email} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 border rounded-md" 
          required 
        />

        <label className="block mb-2">Password</label>
        <input 
          type="password" 
          name="password" 
          value={loginData.password} 
          onChange={handleChange} 
          className="w-full p-2 mb-6 border rounded-md" 
          required 
        />

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
