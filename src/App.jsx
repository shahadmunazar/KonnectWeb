// import Layout from './Layout/Layout'
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import UserLogin from './Login/UserLogin';
// import SuperAdminDashboard from './Dashboard/SuperAdminDashboard';
// import UserList from './Dashboard/Users/UserList';

// function App() {
//   return (
//     <>
//       <Router>
//         {/* Public routes */}
//         <Routes>
//           <Route
//             path="/"
//             element={<Layout/>}
//           />,
//           <Route
//             path="/user-login"
//             element={<UserLogin />}
//           />,
//           <Route
//             path="/superadmin-dashboard"
//             element={<SuperAdminDashboard />}
//           />,
//           <Route
//             path="/user-list"
//             element={<UserList />}
//           />,
//         </Routes>
//       </Router>
//     </>
//   )
// }

// export default App
import React from "react";
import "./App.css"
import Login  from "./Dashboard/SuperAdmin/Login/Login";
import ForgotPassword from "./Dashboard/SuperAdmin/Login/ForgotPassword";
import VerifyOtp from "./Dashboard/SuperAdmin/Login/VerifyOtp";
import SuperAdminDashboard from "./Dashboard/SuperAdminDashboard";
import OrganizationList from "./Dashboard/SuperAdmin/OrganizationList";
import ManageOrganization from "./Dashboard/SuperAdmin/ManageOrganization";
import SubscriptionManagement from "./Dashboard/SuperAdmin/SubscriptionManagement";
import ViewSubscribers from "./Dashboard/SuperAdmin/ViewSubscribers";
import EnquiryManagement from "./Dashboard/SuperAdmin/EnquiryManagement";
import ManageCmsContents from "./Dashboard/SuperAdmin/ManageCmsContents";
import SubAdminManagement from "./Dashboard/SuperAdmin/SubAdminManagement";
import AccountSetting from "./Dashboard/SuperAdmin/AccountSetting";
import ResetPassword from "../src/Dashboard/SuperAdmin/Login/ResetPassword";
import Layout from "./Layout/Layout";


import { Routes, Route } from "react-router-dom";

// import axios from "axios";

// axios.defaults.baseURL = "http://localhost:8000";
// axios.defaults.baseURL = "https://api.visionlanguageexperts.in";
// axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.headers.post["Accept"] = "application/json";

// axios.defaults.headers.get["Content-Type"] = "application/json";
// axios.defaults.headers.get["Accept"] = "application/json";

// axios.defaults.withCredentials = true;

// axios.interceptors.request.use(function (config) {
//   const token = localStorage.getItem("auth_token");
//   config.headers.Authorization = token ? `Bearer ${token}` : "";
//   // config.headers.common["X-CSRF-Token"] = token;
//   return config;
// });

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/dashboard" element={<SuperAdminDashboard />} />
        <Route path="/create-org" element={<OrganizationList />} />
        <Route path="/manage-org" element={<ManageOrganization />} />
        <Route path="/manage-subs" element={<SubscriptionManagement />} />
        <Route path="/view-subscribers" element={<ViewSubscribers />} />
        <Route path="/manage-enquire" element={<EnquiryManagement />} />
        <Route path="/manage-cms" element={<ManageCmsContents />} />
        <Route path="/sub-admin-management" element={<SubAdminManagement />} />
        <Route path="/account-setting" element={<AccountSetting />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
