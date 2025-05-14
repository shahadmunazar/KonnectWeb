import React from "react";
import Layout from "./Layout/Layout";
import { FaExclamationTriangle } from "react-icons/fa";
import { BsDot } from "react-icons/bs";

function SuperAdminDashboard() {
  return (
    <Layout>
      <div className="container-fluid mt-4">
        <h3 className="mb-4">Operational dashboard</h3>
        {/* <span className="badge bg-success mb-3">Public</span> */}
        
        {/* KPI Cards */}
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h6 className="card-title fw-bold text-decoration-underline">Number of active organizations</h6>
                <p className="text-danger mb-1">
                  <FaExclamationTriangle className="me-1" />
                  Over target by 29.00
                </p>
                <h2 className="fw-bold">31 <small className="fs-6 fw-light">work orders</small></h2>
                <p className="text-success"><BsDot /> 0.00% from last refresh</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h6 className="card-title fw-bold text-decoration-underline">Total subscriptions </h6>
                <p className="text-danger mb-1">
                  <FaExclamationTriangle className="me-1" />
                  Over target by 388.00
                </p>
                <h2 className="fw-bold">393 <small className="fs-6 fw-light">work orders</small></h2>
                <p className="text-success"><BsDot /> 0.00% from last refresh</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h6 className="card-title fw-bold text-decoration-underline">Recently added organizations</h6>
                <p className="text-success mb-1">
                  ✅ Under target by 37.63
                </p>
                <h2 className="fw-bold">57.37<small className="fs-6 fw-light">%</small></h2>
                <p className="text-success"><BsDot /> 0.00% from last refresh</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h6 className="card-title fw-bold text-decoration-underline">New Subscriptions</h6>
                <p className="text-success mb-1">
                  ✅ Under target by 17.50
                </p>
                <h2 className="fw-bold">72.5<small className="fs-6 fw-light">%</small></h2>
                <p className="text-success"><BsDot /> 0.00% from last refresh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SuperAdminDashboard;
