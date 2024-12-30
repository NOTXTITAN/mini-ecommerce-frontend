import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="w-96 bg-purple-600 text-white rounded-lg p-8 mx-auto mt-20">
      <form action="/signin" method="post">
      
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <div className="relative w-full h-12 mt-8">
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="w-full h-full bg-transparent border-2 border-white/20 rounded-full text-white px-5 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <i className="bx bxs-user absolute right-5 top-1/2 transform -translate-y-1/2 text-lg"></i>
        </div>
        <div className="relative w-full h-12 mt-8">
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full h-full bg-transparent border-2 border-white/20 rounded-full text-white px-6 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <i className="bx bxs-lock-alt absolute right-5 top-1/2 transform -translate-y-1/2 text-lg"></i>
        </div>
        <div className="flex justify-between items-center text-sm mt-6">
          <label className="flex items-center">
            <input type="checkbox" className="accent-white mr-2" /> Remember me
          </label>
          <a href="#" className="text-white hover:underline">
            Forgot password ?
          </a>
        </div>
        <button
          type="submit"
          className="w-full h-12 bg-white text-purple-600 rounded-full font-semibold shadow-md hover:bg-purple-100 mt-6"
        >
          Login
        </button>
        <div className="text-center text-sm mt-6">
          <p>
            Don't have an account?{' '}
            <Link to='/signup' className='className="font-semibold text-white hover:underline"'>
            <Link to='/login' className='className="font-semibold text-white hover:underline"'></Link>
            <Link to='/signin' className='className="font-semibold text-white hover:underline"'></Link>
            Register
            </Link>
            
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
