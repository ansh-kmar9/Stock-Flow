// // src/components/Register.js
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaEnvelope, FaLock, FaUser, FaPhone, FaEye, FaEyeSlash, FaArrowRight } from 'react-icons/fa';
// import axios from 'axios';

// const Register = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     name: '',
//     phone: '',
//     confirmPassword: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const validateForm = () => {
//     const newErrors = {};

//     // Email validation
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }

//     // Password validation
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }

//     // Additional signup validations
//     if (!isLogin) {
//       if (!formData.name) {
//         newErrors.name = 'Name is required';
//       }

//       if (!formData.phone) {
//         newErrors.phone = 'Phone number is required';
//       } else if (!/^\d{10}$/.test(formData.phone)) {
//         newErrors.phone = 'Invalid phone number';
//       }

//       if (formData.password !== formData.confirmPassword) {
//         newErrors.confirmPassword = 'Passwords do not match';
//       }
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) return;

//     setLoading(true);
//     try {
//       const endpoint = isLogin ? 'http://localhost:5000/api/login' : 'http://localhost:5000/api/register';
      
//       const response = await axios.post(endpoint, formData);
      
//       if (response.data.token) {
//         localStorage.setItem('token', response.data.token);
//         localStorage.setItem('user', JSON.stringify(response.data.user));
//         navigate('/dashboard');
//       }
//     } catch (error) {
//       setErrors({
//         submit: error.response?.data?.message || 'An error occurred. Please try again.'
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     // Clear error when user starts typing
//     if (errors[e.target.name]) {
//       setErrors({
//         ...errors,
//         [e.target.name]: ''
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <img
//           className="mx-auto h-12 w-auto"
//           src="/logo.png"
//           alt="StockFlow"
//         />
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//           {isLogin ? 'Welcome back' : 'Create your account'}
//         </h2>
//         <p className="mt-2 text-center text-sm text-gray-600">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}
//           <button
//             onClick={() => setIsLogin(!isLogin)}
//             className="ml-1 font-medium text-blue-600 hover:text-blue-500"
//           >
//             {isLogin ? 'Sign up' : 'Log in'}
//           </button>
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow-xl rounded-lg sm:px-10">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             {!isLogin && (
//               <>
//                 {/* Name Field */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Full Name
//                   </label>
//                   <div className="mt-1 relative rounded-md shadow-sm">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FaUser className="text-gray-400" />
//                     </div>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className={`block w-full pl-10 pr-3 py-2 border ${
//                         errors.name ? 'border-red-300' : 'border-gray-300'
//                       } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
//                       placeholder="John Doe"
//                     />
//                   </div>
//                   {errors.name && (
//                     <p className="mt-1 text-xs text-red-600">{errors.name}</p>
//                   )}
//                 </div>

//                 {/* Phone Field */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Phone Number
//                   </label>
//                   <div className="mt-1 relative rounded-md shadow-sm">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FaPhone className="text-gray-400" />
//                     </div>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className={`block w-full pl-10 pr-3 py-2 border ${
//                         errors.phone ? 'border-red-300' : 'border-gray-300'
//                       } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
//                       placeholder="1234567890"
//                     />
//                   </div>
//                   {errors.phone && (
//                     <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
//                   )}
//                 </div>
//               </>
//             )}

//             {/* Email Field */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaEnvelope className="text-gray-400" />
//                 </div>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`block w-full pl-10 pr-3 py-2 border ${
//                     errors.email ? 'border-red-300' : 'border-gray-300'
//                   } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
//                   placeholder="you@example.com"
//                 />
//               </div>
//               {errors.email && (
//                 <p className="mt-1 text-xs text-red-600">{errors.email}</p>
//               )}
//             </div>

//             {/* Password Field */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaLock className="text-gray-400" />
//                 </div>
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className={`block w-full pl-10 pr-10 py-2 border ${
//                     errors.password ? 'border-red-300' : 'border-gray-300'
//                   } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                 >
//                   {showPassword ? (
//                     <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
//                   ) : (
//                     <FaEye className="text-gray-400 hover:text-gray-600" />
//                   )}
//                 </button>
//               </div>
//               {errors.password && (
//                 <p className="mt-1 text-xs text-red-600">{errors.password}</p>
//               )}
//             </div>

//             {!isLogin && (
//               /* Confirm Password Field */
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Confirm Password
//                 </label>
//                 <div className="mt-1 relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaLock className="text-gray-400" />
//                   </div>
//                   <input
//                     type={showPassword ? 'text' : 'password'}
//                     name="confirmPassword"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     className={`block w-full pl-10 pr-3 py-2 border ${
//                       errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
//                     } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
//                   />
//                 </div>
//                 {errors.confirmPassword && (
//                   <p className="mt-1 text-xs text-red-600">{errors.confirmPassword}</p>
//                 )}
//               </div>
//             )}

//             {errors.submit && (
//               <div className="rounded-md bg-red-50 p-4">
//                 <p className="text-sm text-red-600">{errors.submit}</p>
//               </div>
//             )}

//             <div>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
//               >
//                 {loading ? (
//                   <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                 ) : (
//                   <>
//                     {isLogin ? 'Sign in' : 'Create account'}
//                     <FaArrowRight className="ml-2" />
//                   </>
//                 )}
//               </button>
//             </div>
//           </form>

//           {isLogin && (
//             <div className="mt-6">
//               <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-300" />
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="px-2 bg-white text-gray-500">
//                     Or continue with
//                   </span>
//                 </div>
//               </div>

//               <div className="mt-6 grid grid-cols-2 gap-3">
//                 <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
//                   Google
//                 </button>
//                 <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
//                   GitHub
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


// src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser, FaPhone, FaEye, FaEyeSlash, FaArrowRight } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import axios from '../utils/axios';

const Register = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Additional signup validations
    if (!isLogin) {
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }

      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = 'Invalid phone number';
      }

      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    try {
      const endpoint = isLogin ? '/api/login' : '/api/register';
      const dataToSend = isLogin 
        ? { email: formData.email, password: formData.password }
        : { 
            name: formData.name,
            email: formData.email,
            password: formData.password,
            phone: formData.phone
          };
      
      const response = await axios.post(endpoint, dataToSend);
      
      if (response.data.token) {
        login(response.data.user, response.data.token);
        navigate('/');
      }
    } catch (error) {
      setErrors({
        submit: error.response?.data?.message || 'An error occurred. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setFormData({
      email: '',
      password: '',
      name: '',
      phone: '',
      confirmPassword: '',
    });
  };

   return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-16 w-auto"
          src="/logo copy.png"
          alt="StockFlow"
        />
        <h2 className="mt-6 text-center text-4xl font-bold text-gray-900">
          {isLogin ? 'Welcome Back!' : 'Join StockFlow'}
        </h2>
        <p className="mt-3 text-center text-lg text-gray-600">
          {isLogin ? 'Start trading with confidence' : 'Create an account to start trading'}
        </p>
        <div className="mt-4 text-center text-sm text-gray-600">
          {isLogin ? "New to StockFlow? " : "Already have an account? "}
          <button
            onClick={toggleForm}
            type="button"
            className="font-semibold text-blue-600 hover:text-blue-500 transition-colors"
          >
            {isLogin ? 'Create an account' : 'Sign in'}
          </button>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-2xl rounded-xl sm:px-10 border border-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                      <FaUser className="text-blue-500" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-3 border ${
                        errors.name ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-xs text-red-600 flex items-center">
                      <span className="mr-1">⚠</span> {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                      <FaPhone className="text-blue-500" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-3 border ${
                        errors.phone ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-600 flex items-center">
                      <span className="mr-1">⚠</span> {errors.phone}
                    </p>
                  )}
                </div>
              </>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <FaEnvelope className="text-blue-500" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`block w-full pl-10 pr-3 py-3 border ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-600 flex items-center">
                  <span className="mr-1">⚠</span> {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <FaLock className="text-blue-500" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`block w-full pl-10 pr-10 py-3 border ${
                    errors.password ? 'border-red-300' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-600 flex items-center">
                  <span className="mr-1">⚠</span> {errors.password}
                </p>
              )}
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <FaLock className="text-blue-500" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-3 border ${
                      errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                    placeholder="Confirm your password"
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-xs text-red-600 flex items-center">
                    <span className="mr-1">⚠</span> {errors.confirmPassword}
                  </p>
                )}
              </div>
            )}

            {errors.submit && (
              <div className="rounded-lg bg-red-50 p-4 border border-red-200">
                <p className="text-sm text-red-600">{errors.submit}</p>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    {isLogin ? 'Sign in' : 'Create account'}
                    <FaArrowRight className="ml-2" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;