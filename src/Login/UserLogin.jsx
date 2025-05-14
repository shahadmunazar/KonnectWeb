// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { SendEmailOtp } from "../Redux/Reducers/AuthSlice";

// function UserLogin() {
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     let tempErrors = {};
//     if (!formData.email) {
//       tempErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       tempErrors.email = "Invalid email format";
//     }
//     if (!formData.password) {
//       tempErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       tempErrors.password = "Password must be at least 6 characters";
//     }
//     setErrors(tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = { email: formData.email, password: formData.password }
//     if (validate()) {
//       dispatch(SendEmailOtp(data));
//       // setFormData({ email: "", password: "" }); // Reset form after submission
//     }
//   };

//   return (
//     <div id="page" className="page font--jakarta">
//       <div id="login" className="bg--scroll login-section division">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-11">
//               <div className="register-page-wrapper r-16 bg--fixed">
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="register-page-txt color--white">
//                       <img className="img-fluid" src="images/logo-white.png" alt="logo" />
//                       <h2 className="s-42 w-700">Welcome back to Martex</h2>
//                       <p className="p-md mt-25">Login to continue</p>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="register-page-form">
//                       <form onSubmit={handleSubmit} className="row sign-in-form">
//                         <div className="col-md-12 text-center">
//                           <div className="separator-line">Sign in with your email</div>
//                         </div>
//                         <div className="col-md-12">
//                           <p className="p-sm input-header">Email address</p>
//                           <input
//                             className="form-control email"
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             placeholder="example@example.com"
//                           />
//                           {errors.email && <p className="error-text">{errors.email}</p>}
//                         </div>
//                         <div className="col-md-12">
//                           <p className="p-sm input-header">Password</p>
//                           <input
//                             className="form-control password"
//                             type="password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             placeholder="********"
//                           />
//                           {errors.password && <p className="error-text">{errors.password}</p>}
//                         </div>
//                         <div className="col-md-12">
//                           <button type="submit" className="btn btn--theme hover--theme submit">
//                             Log In
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserLogin;


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SendEmailOtp } from "../Redux/Reducers/AuthSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { useNavigate } from "react-router-dom"; // Import useNavigate


function UserLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigation
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Password visibility state

  const validate = () => {
    let tempErrors = {};
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setApiError(""); // Clear API error when user starts typing
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await dispatch(SendEmailOtp(formData)).unwrap();
        console.log("Success:", response?.data?.data);

        if (response?.data?.data?.role == "superadmin") {
          console.log("Success:", response?.data?.data?.token)
          localStorage.setItem("authToken", response?.data?.data?.token); // Store token in local storage
          navigate("/superadmin-dashboard"); // Redirect to Super Admin Dashboard
        } else {
          setApiError("Unauthorized access!"); // Show error if role is not superadmin
        }
        setApiError(response?.data?.message ); // Show error if role is not superadmin
      } catch (error) {
        console.log("Error Response:", error);
        setApiError(error?.data?.message || "Something went wrong. Please try again.");
      }
    }
  };

 
  return (
    <div id="page" className="page font--jakarta">
      <div id="login" className="bg--scroll login-section division">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="register-page-wrapper r-16 bg--fixed">
                <div className="row">
                  <div className="col-md-6">
                    <div className="register-page-txt color--white">
                      <img className="img-fluid" src="images/logo-white.png" alt="logo" />
                      <h2 className="s-42 w-700">Welcome back to Martex</h2>
                      <p className="p-md mt-25">Login to continue</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="register-page-form">
                      <form onSubmit={handleSubmit} className="row sign-in-form">
                        <div className="col-md-12 text-center">
                          <div className="separator-line">Sign in with your email</div>
                        </div>
                        <div className="col-md-12">
                          <p className="p-sm input-header">Email address</p>
                          <input
                            className="form-control email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@example.com"
                          />
                          {errors.email && <p className="error-text">{errors.email}</p>}
                        </div>
                        <div className="col-md-12 position-relative">
                          <p className="p-sm input-header">Password</p>
                          <div className="password-input-wrapper">
                            <input
                              className="form-control password"
                              type={showPassword ? "text" : "password"}
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                              placeholder="********"
                            />
                            <span
                              className="password-toggle-icon"
                              onClick={togglePasswordVisibility}
                              style={{
                                position: "absolute",
                                right: "30px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                              }}
                            >
                              {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                          </div>
                          {errors.password && <p className="error-text">{errors.password}</p>}
                        </div>
                        {apiError && (
                          <div className="col-md-12">
                            <p className="error-text" style={{ color: "gray", fontWeight: "400" }}>
                              {apiError}
                            </p>

                          </div>
                        )}
                        <div className="col-md-12">
                          <button type="submit" className="btn btn--theme hover--theme submit">
                            Log In
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
