import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import CreateOrganization from "./CreateNewOrganization";

const OrganizationList = () => {
  const [showForm, setShowForm] = useState(false);
  const [orgData, setOrgData] = useState([]);
  const [selectedOrg, setSelectedOrg] = useState(null); // For storing selected organization

  // Fetch function for reuse
  const fetchOrganizations = () => {
    fetch("http://localhost:5000/api/superadmin/get-organization", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          setOrgData(response.data);
        } else {
          console.error("Failed to fetch organizations");
        }
      })
      .catch((err) => console.error("Error fetching organizations:", err));
  };

  useEffect(() => {
    fetchOrganizations(); // initial fetch on mount
  }, []);

  // Refetch when showForm becomes false (i.e. user closes the form)
  useEffect(() => {
    if (!showForm) {
      fetchOrganizations();
    }
  }, [showForm]);

  const handleToggleForm = (org = null) => {
    setSelectedOrg(org);  // Set the selected organization data
    setShowForm(!showForm);
  };

  return (
    <Layout>
      <div className="container mt-6">
        {showForm ? (
         <CreateOrganization
         handleBack={handleToggleForm}
         mode={selectedOrg ? "edit" : "create"}
         initialData={selectedOrg}
       />
       
        ) : (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4>Organizations</h4>
              <button className="btn btn-primary" onClick={() => handleToggleForm()}>
                + Create Organization
              </button>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="table-light">
                  <tr>
                    <th>Organization Name</th>
                    <th>Admin Name</th>
                    <th>Admin Email</th>
                    <th>Plan</th>
                    <th>Status</th>
                    <th>Subdomain</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orgData.map((org, index) => {
                    const admin = org.users?.[0] || {};
                    return (
                      <tr key={index}>
                        <td>{org.organization_name}</td>
                        <td>{admin.name || "—"}</td>
                        <td>{admin.email || "—"}</td>
                        <td>{org.plan_name || "No Plan"}</td>
                        <td>{admin.invitation_status === "sent" ? <span style={{color:"#E0A800"}}>Pending Activation..</span> : admin.invitation_status}</td>
                        <td>
                          {org.organization_name ? (
                            <a
                              href={`https://${org.organization_name
                                .toLowerCase()
                                .replace(/\s+/g, "")}.mainplatformurl.com`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {`${org.organization_name
                                .toLowerCase()
                                .replace(/\s+/g, "")}.mainplatformurl.com`}
                            </a>
                          ) : (
                            "—"
                          )}
                        </td>
                        <td>
                          <button className="btn btn-sm btn-outline-primary" onClick={() => handleToggleForm(org)}>
                            Manage
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default OrganizationList;
