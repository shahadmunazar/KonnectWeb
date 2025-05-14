import React, { useState } from "react";
import { Table, Form, Modal, Button } from "react-bootstrap";
import Layout from "../Layout/Layout";

const dummyEnquiries = [
  {
    id: "ENQ-001",
    submittedAt: "2025-04-14T10:15:00",
    user: "Acme Corp",
    contact: "admin@acme.com",
    phone: "123-456-7890",
    subject: "Issue with asset tracking",
    message: "We're unable to track new assets.",
    status: "New",
    priority: "High",
    role: "Admin",
    assignedAdmin: "",
    attachments: [],
    activityLog: [],
  },
  {
    id: "ENQ-002",
    submittedAt: "2025-04-13T09:00:00",
    user: "Beta Ltd",
    contact: "support@beta.com",
    phone: "555-678-1234",
    subject: "Bug in reporting module",
    message: "The analytics dashboard fails to load.",
    status: "In Progress",
    priority: "Medium",
    role: "Technician",
    assignedAdmin: "John Smith",
    attachments: [],
    activityLog: [
      { action: "Assigned to John Smith", date: "2025-04-13 10:00", by: "SuperAdmin" },
    ],
  },
];

const statusOptions = ["New", "In Progress", "Resolved", "Closed"];

const EnquiryManagement = () => {
  const [enquiries, setEnquiries] = useState(dummyEnquiries);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  const handleStatusChange = (newStatus) => {
    if (!selectedEnquiry) return;
    const updated = enquiries.map((e) =>
      e.id === selectedEnquiry.id
        ? {
            ...e,
            status: newStatus,
            activityLog: [
              ...e.activityLog,
              {
                action: `Status changed to ${newStatus}`,
                date: new Date().toISOString().slice(0, 16).replace("T", " "),
                by: "SuperAdmin",
              },
            ],
          }
        : e
    );
    setEnquiries(updated);
    setSelectedEnquiry(null);
  };

  const handleAssign = (name) => {
    if (!selectedEnquiry) return;
    const updated = enquiries.map((e) =>
      e.id === selectedEnquiry.id
        ? {
            ...e,
            assignedAdmin: name,
            activityLog: [
              ...e.activityLog,
              {
                action: `Assigned to ${name}`,
                date: new Date().toISOString().slice(0, 16).replace("T", " "),
                by: "SuperAdmin",
              },
            ],
          }
        : e
    );
    setEnquiries(updated);
    setSelectedEnquiry(null);
  };

  const filtered = enquiries.filter((e) => {
    const matchSearch =
      e.subject.toLowerCase().includes(search.toLowerCase()) ||
      e.user.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter ? e.status === statusFilter : true;
    return matchSearch && matchStatus;
  });

  const exportToCSV = () => {
    const csv = filtered.map((e) =>
      `${e.id},${e.user},${e.subject},${e.status},${e.assignedAdmin},${e.submittedAt}`
    );
    const blob = new Blob([["ID,User,Subject,Status,Assigned,Submitted\n", ...csv].join("\n")], {
      type: "text/csv;charset=utf-8;",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "enquiries.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <Layout>
    <div className="container mt-6">
      <h3>Enquiry Management</h3>

      <div className="row my-3">
        <div className="col-md-4">
          <Form.Control
            placeholder="Search by subject or user"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <Form.Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Statuses</option>
            {statusOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </Form.Select>
        </div>
        <div className="col-md-3">
          <Button variant="secondary" onClick={exportToCSV}>
            Export CSV
          </Button>
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Submitted</th>
            <th>User</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Assigned</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{new Date(e.submittedAt).toLocaleString()}</td>
              <td>{e.user}</td>
              <td>{e.subject}</td>
              <td>{e.status}</td>
              <td>{e.assignedAdmin || "—"}</td>
              <td>
                <Button
                  size="sm"
                  variant="info"
                  onClick={() => setSelectedEnquiry(e)}
                >
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Detail Modal */}
      <Modal
        show={!!selectedEnquiry}
        onHide={() => setSelectedEnquiry(null)}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Enquiry Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEnquiry && (
            <>
              <p><strong>ID:</strong> {selectedEnquiry.id}</p>
              <p><strong>Submitted:</strong> {new Date(selectedEnquiry.submittedAt).toLocaleString()}</p>
              <p><strong>User:</strong> {selectedEnquiry.user} ({selectedEnquiry.role})</p>
              <p><strong>Contact:</strong> {selectedEnquiry.contact} | {selectedEnquiry.phone}</p>
              <p><strong>Subject:</strong> {selectedEnquiry.subject}</p>
              <p><strong>Message:</strong> {selectedEnquiry.message}</p>
              <p><strong>Status:</strong> {selectedEnquiry.status}</p>
              <p><strong>Assigned Admin:</strong> {selectedEnquiry.assignedAdmin || "None"}</p>

              <Form.Group className="my-3">
                <Form.Label>Update Status</Form.Label>
                <Form.Select
                  onChange={(e) => handleStatusChange(e.target.value)}
                  defaultValue={selectedEnquiry.status}
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Assign to Admin</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter admin name"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAssign(e.target.value);
                    }
                  }}
                />
              </Form.Group>

              <h6>Activity Log</h6>
              <ul>
                {selectedEnquiry.activityLog.map((log, idx) => (
                  <li key={idx}>
                    <strong>{log.date}:</strong> {log.action} by {log.by}
                  </li>
                ))}
              </ul>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
    </Layout>
  );
};

export default EnquiryManagement;
