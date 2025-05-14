import React, { useEffect, useState } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";
import Layout from "../Layout/Layout";
import { CSVLink } from "react-csv";

const ViewSubscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ plan: "", status: "", payment: "" });
  const [selectedSubscriber, setSelectedSubscriber] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [auditLog, setAuditLog] = useState([]);

  useEffect(() => {
    // Simulated fetch
    const dummyData = [
      {
        id: 1,
        orgName: "Alpha Corp",
        adminName: "John Doe",
        adminContact: "john@alpha.com",
        planName: "Pro",
        planTier: "Intermediate",
        status: "Active",
        startDate: "2024-01-01",
        endDate: "2025-01-01",
        billingCycle: "Annually",
        paymentStatus: "Paid",
        orgDetails: {
          address: "123 Main St",
          industry: "IT",
          users: 150
        },
        modules: ["Asset Management", "Maintenance Management"],
        history: [
          { date: "2024-01-01", action: "Subscribed", payment: "Paid" },
          { date: "2025-01-01", action: "Renewal Due", payment: "Pending" }
        ]
      },
      // Add more mock subscribers here
    ];
    setSubscribers(dummyData);
    setFiltered(dummyData);

    const dummyLog = [
      { date: "2024-01-01", action: "Created subscription", user: "admin" },
      { date: "2025-01-01", action: "Marked payment as pending", user: "admin" }
    ];
    setAuditLog(dummyLog);
  }, []);

  useEffect(() => {
    let result = [...subscribers];
    if (search) {
      result = result.filter(s =>
        s.orgName.toLowerCase().includes(search.toLowerCase()) ||
        s.adminContact.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (filters.plan) result = result.filter(s => s.planName === filters.plan);
    if (filters.status) result = result.filter(s => s.status === filters.status);
    if (filters.payment) result = result.filter(s => s.paymentStatus === filters.payment);
    setFiltered(result);
  }, [search, filters, subscribers]);

  const handleView = (subscriber) => {
    setSelectedSubscriber(subscriber);
    setShowModal(true);
  };

  return (
    <Layout>
    <div className="container mt-6">
      <h3>Subscribers Management</h3>

      <div className="d-flex mb-3 gap-2">
        <Form.Control
          type="text"
          placeholder="Search by Org/Admin"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Form.Select value={filters.plan} onChange={e => setFilters(f => ({ ...f, plan: e.target.value }))}>
          <option value="">All Plans</option>
          <option value="Basic">Basic</option>
          <option value="Pro">Pro</option>
          <option value="Premium">Premium</option>
        </Form.Select>
        <Form.Select value={filters.status} onChange={e => setFilters(f => ({ ...f, status: e.target.value }))}>
          <option value="">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Expired">Expired</option>
        </Form.Select>
        <Form.Select value={filters.payment} onChange={e => setFilters(f => ({ ...f, payment: e.target.value }))}>
          <option value="">All Payment</option>
          <option value="Paid">Paid</option>
          <option value="Overdue">Overdue</option>
        </Form.Select>
        <CSVLink
          data={filtered}
          filename="subscribers_report.csv"
          className="btn btn-outline-primary"
        >
          Export CSV
        </CSVLink>
      </div>

      <Table bordered hover>
        <thead>
          <tr>
            <th>Organization</th>
            <th>Admin</th>
            <th>Plan</th>
            <th>Status</th>
            <th>Billing</th>
            <th>Payment</th>
            <th>Start</th>
            <th>End</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(sub => (
            <tr key={sub.id} className={sub.paymentStatus === "Overdue" ? "table-danger" : ""}>
              <td>{sub.orgName}</td>
              <td>{sub.adminName} ({sub.adminContact})</td>
              <td>{sub.planName} ({sub.planTier})</td>
              <td>{sub.status}</td>
              <td>{sub.billingCycle}</td>
              <td>{sub.paymentStatus}</td>
              <td>{sub.startDate}</td>
              <td>{sub.endDate}</td>
              <td>
                <Button size="sm" onClick={() => handleView(sub)}>View</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Subscriber Detail */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Subscriber Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedSubscriber && (
            <div>
              <h5>{selectedSubscriber.orgName}</h5>
              <p><strong>Admin:</strong> {selectedSubscriber.adminName} ({selectedSubscriber.adminContact})</p>
              <p><strong>Address:</strong> {selectedSubscriber.orgDetails.address}</p>
              <p><strong>Industry:</strong> {selectedSubscriber.orgDetails.industry}</p>
              <p><strong>Users:</strong> {selectedSubscriber.orgDetails.users}</p>
              <p><strong>Plan:</strong> {selectedSubscriber.planName} ({selectedSubscriber.planTier})</p>
              <p><strong>Billing:</strong> {selectedSubscriber.billingCycle}</p>
              <p><strong>Modules:</strong> {selectedSubscriber.modules.join(", ")}</p>
              <p><strong>History:</strong></p>
              <ul>
                {selectedSubscriber.history.map((h, i) => (
                  <li key={i}>{h.date}: {h.action} ({h.payment})</li>
                ))}
              </ul>
              <Button variant="success" size="sm">Mark Payment as Paid</Button>

              <hr />
              <h6>Audit Log</h6>
              <ul>
                {auditLog.map((log, idx) => (
                  <li key={idx}>{log.date}: {log.action} by {log.user}</li>
                ))}
              </ul>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
    </Layout>
  );
};

export default ViewSubscribers;