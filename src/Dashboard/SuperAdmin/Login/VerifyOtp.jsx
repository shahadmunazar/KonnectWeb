import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VerifyOtp() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [loading, setLoading] = useState(false); // Loader state

    const handleChange = (e, index) => {
        const value = e.target.value.slice(-1); // take only last digit
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const otpCode = otp.join("");
        const data = { otp: otpCode, email: localStorage.getItem("email") };

        setLoading(true); // Start loading

        fetch("http://localhost:5000/api/verify-otp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.status === 200) {
                    localStorage.setItem("is_verified", true);
                    localStorage.setItem("token", data.token);
                    navigate("/dashboard");
                } else {
                    alert("Invalid OTP");
                }
            })
            .catch((err) => {
                alert("Something went wrong!");
            })
            .finally(() => {
                setLoading(false); // Stop loading
            });
    };

    return (
        <div className="auth-container">
            <div className="">
                <div className="text-center mb-4">
                    <h4 className="text-center mb-2">Verify Your Identity</h4>
                    <p className="text-muted text-center mb-4" style={{ fontSize: "14px", width: "24rem" }}>
                        For your security, we’ve sent a 6-digit verification code to your registered email address.
                        Please enter the code below to complete the login process.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="d-flex justify-content-between mb-4">
                            {otp.map((digit, i) => (
                                <input
                                    key={i}
                                    id={`otp-${i}`}
                                    type="text"
                                    className="form-control text-center mx-1"
                                    style={{ width: 40, borderColor: "#000" }}
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(e, i)}
                                />
                            ))}
                        </div>
                        <button className="btn btn-primary w-100" type="submit" disabled={loading}>
                            {loading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Verifying...
                                </>
                            ) : (
                                "Verify OTP"
                            )}
                        </button>
                    </form>
                </div>
            </div></div>
    );
}
