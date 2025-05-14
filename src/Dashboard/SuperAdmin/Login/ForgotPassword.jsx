// ForgotPassword.jsx
import React, { useState } from "react";
import axios from "axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // loader state

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    setMessage("");
    setLoading(true); // start loader

    axios
      .post("http://localhost:5000/api/forget-password", { email }, { headers: { Accept: "application/json" } })
      .then((response) => {
        setMessage(response.data.message || "Password reset link sent to your email!");
      })
      .catch((error) => {
        if (error.response?.data?.errors) {
          setErrors(error.response.data.errors);
        } else {
          setMessage(error.response?.data?.message || "Something went wrong!");
        }
      })
      .finally(() => {
        setLoading(false); // stop loader whether success or error
      });
  };

  return (
    <div className="auth-container">
      <div className="">
        <div className="text-center mb-4" style={{ width: "24rem" }}>
          <h3 className="card-title text-center mb-2">Forgot Your Password?</h3>
          <p className="text-muted text-center mb-4" style={{ fontSize: "14px" }}>
            No worries! Enter your registered email address below and we’ll send you a link to reset your password.
          </p>

          {message && <div className="alert alert-info text-primary">{message}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <div className="text-danger">{errors.email[0]}</div>}
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Sending...
                </>
              ) : (
                "Send Reset Link"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
