import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import * as Icon from "react-feather";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

export default function Navbar() {
  const [isToggled, setIsToggled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSidebarFolded, setIsSidebarFolded] = useState(false);

  const toggleButtonClass = isToggled ? "sidebar-toggler" : "sidebar-toggler";

  const handleToggle = () => {
    setIsToggled(!isToggled);
    document.body.classList.toggle("sidebar-folded");
  };

  useEffect(() => {
    const body = document.body;
    const sidebarFolded = "sidebar-folded";
    setIsSidebarFolded(body.classList.contains(sidebarFolded));
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    document.body.classList.add("open-sidebar-folded", "overflow-hidden");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    document.body.classList.remove("open-sidebar-folded", "overflow-hidden");
  };

  const navLinkClass = ({ isActive }) =>
    `nav-link newNav ${isActive ? "active" : ""}`;

  return (
    <div>
      <nav className="sidebar">
        <div className="sidebar-header">
          <a href="#" className="sidebar-brand">
            KONNECT
          </a>
          <div
            id="sidebar_t"
            className={isSidebarFolded ? "sidebar-toggler active" : "sidebar-toggler not-active"}
            onClick={handleToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <PerfectScrollbar component="div">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="sidebar-body"
          >
            <ul className="nav">
              <li className="nav-item">
                <NavLink to="/dashboard" className={navLinkClass}>
                  <Icon.Home className="link-icon" />
                  <span className="link-title">Dashboard</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/create-org" className={navLinkClass}>
                  <Icon.PlusCircle className="link-icon" />
                  <span className="link-title">Create a new Organization</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/manage-org" className={navLinkClass}>
                  <Icon.Users className="link-icon" />
                  <span className="link-title">Organizations Management</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/manage-subs" className={navLinkClass}>
                  <Icon.DollarSign className="link-icon" />
                  <span className="link-title">Subscription Management</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/view-subscribers" className={navLinkClass}>
                  <Icon.BookOpen className="link-icon" />
                  <span className="link-title">View Subscribers & Plan D..</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/manage-enquire" className={navLinkClass}>
                  <Icon.MessageCircle className="link-icon" />
                  <span className="link-title">Enquiry Management</span>
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink to="/manage-cms" className={navLinkClass}>
                  <Icon.Edit3 className="link-icon" />
                  <span className="link-title">Manage CMS Contents</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/sub-admin-management" className={navLinkClass}>
                  <Icon.Shield className="link-icon" />
                  <span className="link-title">Sub Admin Management</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/account-setting" className={navLinkClass}>
                  <Icon.Settings className="link-icon" />
                  <span className="link-title">Account Settings</span>
                </NavLink>
              </li> */}
            </ul>
          </div>
        </PerfectScrollbar>
      </nav>
    </div>
  );
}
