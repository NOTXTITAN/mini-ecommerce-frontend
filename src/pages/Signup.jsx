import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-96 bg-purple-600 text-white p-6 rounded shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
        <div className="mb-8 mt-8">
          <label className="block text-sm font-medium text-white" htmlFor="username">Username</label>
          <input
          
            type="text"
            name="username"
            id="username"
            className="w-full h-full bg-transparent border-2 border-white/20 rounded-full text-white px-5 focus:outline-none focus:ring-2 focus:ring-white py-3"
            />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-white" htmlFor="email ">Email</label>
          <input
           type="email"
            name="email"
            className="w-full h-full bg-transparent border-2 border-white/20 rounded-full text-white px-5 focus:outline-none focus:ring-2 focus:ring-white py-3"
            />
          
        </div>
        <div className="mb-9">
          <label className="block text-sm font-medium text-white" htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="w-full h-full bg-transparent border-2 border-white/20 rounded-full text-white px-5 focus:outline-none focus:ring-2 focus:ring-white py-3"
            />
           
           
            
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Sign Up
        </button>
       <div className='text-center mt-5'>
        <p className="text-sm text-white">Already have an account? <Link to='/login'>login</Link></p>
       </div>
      </form>
    </div>
    
  );
};

export default Signup;