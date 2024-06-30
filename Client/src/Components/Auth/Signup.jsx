import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic here
    const isSignedUp = true; // Simulate successful signup
    if (isSignedUp) {
      navigate('/dashboard');
    } else {
      alert('Signup failed. Please check your information.');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-indigo-500 mt-10" >
      <div className="container py-5 h-full">
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-md">
            <div className="bg-white shadow-2xl rounded-lg p-8">
              <h3 className="text-3xl mb-5 text-center">Sign up</h3>
              <form onSubmit={handleSignup}>
                <div className="mb-4">
                  <input
                    type="email"
                    id="signup-email"
                    className="form-control form-control-lg w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    id="signup-password"
                    className="form-control form-control-lg w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    id="signup-confirm-password"
                    className="form-control form-control-lg w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Sign Up
                </button>
                <hr className="my-4" />
                <button
                  type="button"
                  className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 mb-2"
                >
                  <i className="fab fa-google mr-2"></i> Sign up with Google
                </button>
                <button
                  type="button"
                  className="w-full py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
                >
                  <i className="fab fa-facebook-f mr-2"></i> Sign up with Facebook
                </button>
              </form>
              <p className="mt-4 text-center">
                Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
