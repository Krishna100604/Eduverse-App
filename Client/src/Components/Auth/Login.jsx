// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Perform authentication logic here
//     const isLoggedIn = true; // Simulate successful login
//     if (isLoggedIn) {
//       navigate('/dashboard');
//     } else {
//       alert('Login failed. Please check your credentials.');
//     }
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-indigo-500 mt-9">
//       <div className="container py-5 h-full">
//         <div className="flex justify-center items-center h-full">
//           <div className="w-full max-w-md">
//             <div className="bg-white shadow-2xl rounded-lg p-8">
//               <h3 className="text-3xl mb-5 text-center">Sign in</h3>
//               <form onSubmit={handleLogin}>
//                 <div className="mb-4">
//                   <input
//                     type="email"
//                     id="email"
//                     className="form-control form-control-lg w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <input
//                     type="password"
//                     id="password"
//                     className="form-control form-control-lg w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//                 <div className="flex justify-start mb-4">
//                   <input type="checkbox" id="remember" className="form-check-input" />
//                   <label htmlFor="remember" className="ml-2">Remember password</label>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                 >
//                   Login
//                 </button>
//                 <hr className="my-4" />
//                 <button
//                   type="button"
//                   className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 mb-2"
//                 >
//                   <i className="fab fa-google mr-2"></i> Sign in with Google
//                 </button>
//                 <button
//                   type="button"
//                   className="w-full py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
//                 >
//                   <i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook
//                 </button>
//               </form>
//               <p className="mt-4 text-center">
//                 Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;

import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
