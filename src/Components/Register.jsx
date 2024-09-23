import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    profilePhoto: null // For storing profile photo
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profilePhoto: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store data in local storage
    localStorage.setItem('loanAppUser', JSON.stringify(formData));
    alert('Registration Successful! You can now log in.');

    // Clear the form
    setFormData({ username: '', email: '', password: '', profilePhoto: null });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-80" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <label className="block mb-2">Username</label>
        <input 
          type="text" 
          name="username" 
          value={formData.username} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 border rounded-md" 
          required 
        />

        <label className="block mb-2">Email</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 border rounded-md" 
          required 
        />

        <label className="block mb-2">Password</label>
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 border rounded-md" 
          required 
        />

        <label className="block mb-2">Profile Photo</label>
        <input 
          type="file" 
          accept="image/*"
          onChange={handlePhotoUpload} 
          className="w-full p-2 mb-4 border rounded-md" 
        />

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
