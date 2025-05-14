// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import swal from "sweetalert2";
// import axios from "axios";

// export default function Login() {
//     const navigate = useNavigate();
//     const [loginInput, setLoginInput] = useState(""); // username or email
//     const [password, setPassword] = useState("");
//     const [remember, setRemember] = useState(false);
//     const [errors, setErrors] = useState({});
//     const [message, setMessage] = useState("");
//     const [loading, setLoading] = useState(false);

//     // ✅ Smart validation based on input type (email or username)
//     const validate = () => {
//         const newErrors = {};
//         const isEmail = loginInput.includes("@");

//         const emailRegex = /^\S+@\S+\.\S+$/;
//         const usernameRegex = /^[a-zA-Z0-9._-]{3,}$/;
//         const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

//         if (!loginInput) {
//             newErrors.login = ["Username or email is required."];
//         } else if (isEmail && !emailRegex.test(loginInput)) {
//             newErrors.login = ["Please enter a valid email address."];
//         } else if (!isEmail && !usernameRegex.test(loginInput)) {
//             newErrors.login = ["Username must be at least 3 characters and alphanumeric."];
//         }

//         if (!passwordRegex.test(password)) {
//             newErrors.password = [
//                 "Password must be at least 8 characters, include one number and one special character.",
//             ];
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const makeRequest = async (e) => {
//         e.preventDefault();
//         setErrors({});
//         setMessage("");

//         if (!validate()) return;

//         try {
//             setLoading(true);
//             await axios.get("/sanctum/csrf-cookie");

//             const payload = {
//                 email: loginInput, // backend should accept email or username
//                 password,
//                 remember,
//             };

//             localStorage.setItem("email", loginInput);

//             const response = await axios.post("http://localhost:5000/api/login", payload, {
//                 headers: { Accept: "application/json" },
//             });

//             if (response.data.status === 200) {
//                 swal.fire("Login Successful", "Please verify the OTP sent to your email.", "success");
//                 navigate("/verify-otp");
//             }
//         } catch (error) {
//             setErrors(error.response?.data?.errors || {});
//             setMessage(error.response?.data?.message || "Invalid credentials or server error.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="container d-flex align-items-center justify-content-center min-vh-100">
//             <div className="card shadow w-100" style={{ maxWidth: 500 }}>
//                 <div className="card-body">
//                     <h3 className="card-title text-center mb-4">Super Admin Login</h3>

//                     {message && <div className="alert alert-danger">{message}</div>}

//                     <form onSubmit={makeRequest} noValidate>
//                         <div className="mb-3">
//                             <label className="form-label">Username or Email Address</label>
//                             <input
//                                 type="text"
//                                 className={`form-control ${errors.login ? "is-invalid" : ""}`}
//                                 value={loginInput}
//                                 onChange={(e) => setLoginInput(e.target.value)}
//                                 required
//                             />
//                             {errors.login && <div className="invalid-feedback">{errors.login[0]}</div>}
//                         </div>

//                         <div className="mb-3">
//                             <label className="form-label">Password</label>
//                             <input
//                                 type="password"
//                                 className={`form-control ${errors.password ? "is-invalid" : ""}`}
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                             />
//                             {errors.password && <div className="invalid-feedback">{errors.password[0]}</div>}
//                         </div>

//                         <div className="form-check mb-3">
//                             <input
//                                 type="checkbox"
//                                 className="form-check-input"
//                                 checked={remember}
//                                 onChange={(e) => setRemember(e.target.checked)}
//                             />
//                             <label className="form-check-label">Remember me</label>
//                         </div>

//                         <button type="submit" className="btn btn-primary w-100" disabled={loading}>
//                             {loading ? (
//                                 <>
//                                     <span className="spinner-border spinner-border-sm me-2" role="status" />
//                                     Logging in...
//                                 </>
//                             ) : (
//                                 "Login"
//                             )}
//                         </button>

//                         <div className="text-end mt-2">
//                             <button
//                                 type="button"
//                                 className="btn btn-link p-0"
//                                 onClick={() => navigate("/forgot-password")}
//                             >
//                                 Forgot Password?
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../../../assets/KonnectBlack.png";
import loginWrapper from "../../../assets/login-wrapper.jpg";
import VerifyOtp from "./VerifyOtp";
import ForgotPassword from "./ForgotPassword";
// import "./Login.css";

export default function Login() {
    const navigate = useNavigate();
    const [loginInput, setLoginInput] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [signIn, setSignIn] = useState(false);
    const [forgot, setForgot] = useState(false);
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const newErrors = {};
        const isEmail = loginInput.includes("@");

        const emailRegex = /^\S+@\S+\.\S+$/;
        const usernameRegex = /^[a-zA-Z0-9._-]{3,}$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

        if (!loginInput) {
            newErrors.login = ["Username or email is required."];
        } else if (isEmail && !emailRegex.test(loginInput)) {
            newErrors.login = ["Please enter a valid email address."];
        } else if (!isEmail && !usernameRegex.test(loginInput)) {
            newErrors.login = ["Username must be at least 3 characters and alphanumeric."];
        }

        if (!passwordRegex.test(password)) {
            newErrors.password = [
                "Password must be at least 8 characters, include one number and one special character.",
            ];
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const makeRequest = async (e) => {
        e.preventDefault();
        setErrors({});
        setMessage("");

        if (!validate()) return;

        try {
            setLoading(true);
            await axios.get("/sanctum/csrf-cookie");

            const payload = {
                email: loginInput,
                password,
                remember,
            };

            localStorage.setItem("email", loginInput);

            const response = await axios.post("http://localhost:5000/api/login", payload, {
                headers: { Accept: "application/json" },
            });

            if (response.data.status === 200) {
                // swal.fire("Please verify the OTP sent to your email.", "success");
                // navigate("/verify-otp");
                setSignIn(true);
            }
        } catch (error) {
            setErrors(error.response?.data?.errors || {});
            setMessage(error.response?.data?.message || "Invalid credentials or server error.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-wrapper">
            {/* Left Side with Image */}
            <div
                className="auth-left"
                style={{
                    backgroundImage: `url(${loginWrapper})`,
                }}
            >
                {/* <h1>    Konnect is your one-stop platform for seamless collaboration and powerful management tools. 
        Stay productive, work smarter, and build meaningful connections with your team—all in one place.</h1>
        <div className="theme-selection-logo">
          KONNECT<span>SELECTION</span>
        </div> */}
            </div>

            {/* Right Side Login */}
            {forgot == true ? <ForgotPassword /> : signIn == false ? <>
                <div className="auth-container">
                    <div className="auth-card">
                        <div className="text-center mb-4">
                            <img src={logo} alt="Sneat Logo" width={100} />
                            <h4 className="mt-3">Welcome to Konnect! 👋</h4>
                            <p className="text-muted small">Please sign-in to your account and start the adventure</p>
                        </div>

                        {message && <div className="alert alert-danger">{message}</div>}

                        <form onSubmit={makeRequest} noValidate>
                            <div className="mb-3">
                                <label className="form-label">Email or Username</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.login ? "is-invalid" : ""}`}
                                    placeholder="Enter your email or username"
                                    value={loginInput}
                                    onChange={(e) => setLoginInput(e.target.value)}
                                />
                                {errors.login && <div className="invalid-feedback">{errors.login[0]}</div>}
                            </div>

                            <div className="mb-3">
                                <div className="d-flex justify-content-between">
                                    <label className="form-label">Password</label>
                                    <a className="small" style={{ cursor: "pointer", fontWeight: "600" }} onClick={() => setForgot(true)}>
                                        Forgot Password?
                                    </a>
                                </div>
                                <input
                                    type="password"
                                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && <div className="invalid-feedback">{errors.password[0]}</div>}
                            </div>

                            <div className="form-check mb-3" style={{ textAlign: "left" }}>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={remember}
                                    onChange={(e) => setRemember(e.target.checked)}
                                />
                                <label className="form-check-label" >Remember Me</label>
                            </div>

                            <button type="submit" className="btn btn-primary w-100 rounded-3" disabled={loading}>
                                {loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" />
                                        Logging in...
                                    </>
                                ) : (
                                    "Sign in"
                                )}
                            </button>

                            <div className="text-center mt-3">
                                <p className="text-muted small">or</p>
                                <div className="d-flex justify-content-center gap-2">
                                    <button type="button" className="btn btn-icon btn-outline-secondary">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>
                                    <button type="button" className="btn btn-icon btn-outline-secondary">
                                        <i className="fab fa-google"></i>
                                    </button>
                                    <button type="button" className="btn btn-icon btn-outline-secondary">
                                        <i className="fab fa-twitter"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </> : <VerifyOtp />}

        </div>
    );
}
