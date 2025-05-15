import { useState, useEffect } from "react";
import useActiveSection from "../Components/useActiveSection";
import { Link } from 'react-router-dom';
import Konnect from "../../src/assets/KonnectBlack.png"
import KonnectBlack from "../../src/assets/KonnectBlack.png"

const sectionColors = {
    "hero-1": "bg-blue-500",
    "features-6": "bg-green-500",
    "lnk-1": "bg-red-500",
};

const Header = () => {
    const activeSection = useActiveSection();
    const [bgColor, setBgColor] = useState("bg-transparent");

    useEffect(() => {
        setBgColor(sectionColors[activeSection] || "bg-transparent");
    }, [activeSection]);

    const encodedLoginPath = btoa("login");

    useEffect(() => {
        const menuList = document.querySelector(".wsmenu-list");
        const mainMenu = document.querySelector(".wsmainfull");
        const toggleButton = document.getElementById("wsnavtoggle");

        const handleClick = (e) => {
            const target = e.target;
            const li = target.closest("li");
            const hasSubMenu = li && li.querySelector(".sub-menu");

            if (!hasSubMenu && target.tagName === "A") {
                // It's a final link - remove mobile menu open class and wsactive from all
                mainMenu.classList.remove("wsoffcanvasopener");

                // Remove wsactive from all items
                document.querySelectorAll(".wsmenu-list li.wsactive").forEach(item => {
                    item.classList.remove("wsactive");
                });

                // Also close the toggle icon if needed
                if (toggleButton) toggleButton.classList.remove("wsactive");
            } else {
                // If it's a parent item, just prevent close
                e.stopPropagation();
            }
        };

        if (menuList) {
            menuList.addEventListener("click", handleClick);
        }

        return () => {
            if (menuList) {
                menuList.removeEventListener("click", handleClick);
            }
        };
    }, []);



    return (
        <div id="header" className={`tra-menu navbar-light white-scroll transition-all duration-500 ${bgColor}`}>
            <div className="header-wrapper">
                {/* MOBILE HEADER */}
                <div className="wsmobileheader clearfix">
                    <span className="smllogo"><img src="images/Konnect.png" alt="mobile-logo" /></span>
                    <a id="wsnavtoggle" className="wsanimated-arrow"><span /></a>
                </div>
                {/* NAVIGATION MENU */}
                <div className="wsmainfull menu clearfix">
                    <div className="wsmainwp clearfix">
                        {/* HEADER BLACK LOGO */}
                        <div className="desktoplogo">
                            <a href="/" className="logo-black"><img src={KonnectBlack} alt="logo" /></a>
                        </div>
                        {/* HEADER WHITE LOGO */}
                        <div className="desktoplogo">
                            <a href="/" className="logo-white"><img src={Konnect} alt="logo" /></a>
                        </div>
                        {/* MAIN MENU */}
                        <nav className="wsmenu clearfix">
                            <ul className="wsmenu-list nav-theme">
                                {/* DROPDOWN SUB MENU */}
                                <li aria-haspopup="true"><a href="#" className="h-link">Why Asset Konnect <span className="wsarrow" /></a>
                                    <ul className="sub-menu">
                                        <li aria-haspopup="true"><a href="#lnk-1">About </a>
                                            <ul className="sub-menu">
                                                <li aria-haspopup="true"><a href="#lnk-2">Overview Of The Company</a></li>
                                                <li aria-haspopup="true"><a href="#lnk-3">Its Mission</a></li>
                                                <li aria-haspopup="true"><a href="#lnk-3">Vision And Values</a></li>
                                            </ul>
                                        </li>
                                        <li aria-haspopup="true"><a href="#lnk-2">Our Story</a>
                                            <ul className="sub-menu">
                                                <li aria-haspopup="true"><a href="#lnk-2">Background Of How Asset Konnect Was Founded</a></li>
                                                <li aria-haspopup="true"><a href="#lnk-3">Milestones</a></li>
                                                <li aria-haspopup="true"><a href="#lnk-3">Growth Journey</a></li>
                                            </ul>
                                        </li>
                                        <li aria-haspopup="true"><a href="#lnk-3">Our Social Mission</a>
                                            <ul className="sub-menu">
                                                <li aria-haspopup="true"><a href="#lnk-2">Focus On Sustainability</a></li>
                                                <li aria-haspopup="true"><a href="#lnk-3">Community Engagement</a></li>
                                                <li aria-haspopup="true"><a href="#lnk-3">Social Impact Initiatives</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                {/* SIMPLE NAVIGATION LINK */}
                                <li aria-haspopup="true"><a href="#" className="h-link">Platform <span className="wsarrow" /></a>
                                    <ul className="sub-menu">
                                        <li aria-haspopup="true"><a href="#">Asset Management</a>
                                            <ul className="sub-menu">
                                                <li aria-haspopup="true"><a href="#">Overview Of How Asset Konnect Helps Track And Manage Assets</a></li>
                                                <li aria-haspopup="true"><a href="#">Asset Lifecycle</a></li>
                                                <li aria-haspopup="true"><a href="#">compliance</a></li>
                                            </ul>
                                        </li>
                                        <li aria-haspopup="true"><a href="#">Contractor Management</a>
                                            <ul className="sub-menu">
                                                <li aria-haspopup="true"><a href="#">Explanation Of How The System Supports Contractor Scheduling</a></li>
                                                <li aria-haspopup="true"><a href="#">Documentation</a></li>
                                                <li aria-haspopup="true"><a href="#">Performance Tracking</a></li>
                                            </ul>
                                        </li>
                                        <li aria-haspopup="true"><a href="#">Maintenance Management</a>
                                            <ul className="sub-menu">
                                                <li aria-haspopup="true"><a href="#">Details Of How To Handle Preventive And Reactive Maintenance</a></li>
                                                <li aria-haspopup="true"><a href="#">Including Work Order Management And Task Assignments</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                {/* SIMPLE NAVIGATION LINK */}
                                <li aria-haspopup="true"><a href="#" className="h-link">Solutions by Industry <span className="wsarrow" /></a>
                                    <ul className="sub-menu">
                                        <li aria-haspopup="true"><a href="#">Aged Care</a>
                                            <ul className="sub-menu">
                                                <li aria-haspopup="true"><a href="#">Customized Solutions For Asset Management In The Aged Care Sector</a></li>
                                                <li aria-haspopup="true"><a href="#">Focusing On Safety And Compliance</a></li>
                                            </ul>
                                        </li>
                                        <li aria-haspopup="true"><a href="#">Retirement Living</a>
                                            <ul className="sub-menu">
                                                <li aria-haspopup="true"><a href="#"> Tools For Managing Assets And Contractors In Retirement Communities</a></li>
                                            </ul>
                                        </li>
                                        <li aria-haspopup="true"><a href="#">Schools</a>
                                            <ul className="sub-menu">
                                                <li aria-haspopup="true"><a href="#">Tailored Solutions For Managing School Infrastructure</a></li>
                                                <li aria-haspopup="true"><a href="#">Assets</a></li>
                                                <li aria-haspopup="true"><a href="#">Maintenance Efficiently</a></li>
                                            </ul>

                                        </li>
                                    </ul>
                                </li>
                                <li aria-haspopup="true"><a href="#" className="h-link">Resources <span className="wsarrow" /></a>
                                    <ul className="sub-menu">
                                        <li aria-haspopup="true"><a href="#">News & Blogs</a></li>
                                        <li aria-haspopup="true"><a href="/ContactUs">Contact Us</a></li>
                                    </ul>
                                </li>
                                {/* MEGAMENU */}
                                {/* <li aria-haspopup="true" className="mg_link"><a href="#" className="h-link">Pages <span className="wsarrow" /></a>
                                    <div className="wsmegamenu w-75 clearfix">
                                        <div className="container">
                                            <div className="row"> */}
                                {/* MEGAMENU LINKS */}
                                {/* <ul className="col-md-12 col-lg-3 link-list">
                                                    <li className="fst-li"><a href="about.html">About Us</a></li>
                                                    <li><a href="team.html">Our Team</a></li>
                                                    <li><a href="careers.html">Careers <span className="sm-info">4</span></a></li>
                                                    <li><a href="career-role.html">Career Details</a></li>
                                                    <li><a href="contacts.html">Contact Us</a></li>
                                                </ul> */}
                                {/* MEGAMENU LINKS */}
                                {/* <ul className="col-md-12 col-lg-3 link-list">
                                                    <li><a href="features.html">Core Features</a></li>
                                                    <li className="fst-li"><a href="projects.html">Our Projects</a></li>
                                                    <li><a href="project-details.html">Project Details</a></li>
                                                    <li><a href="reviews.html">Testimonials</a></li>
                                                    <li><a href="download.html">Download Page</a></li>
                                                </ul> */}
                                {/* MEGAMENU LINKS */}
                                {/* <ul className="col-md-12 col-lg-3 link-list">
                                                    <li className="fst-li"><a href="pricing-1.html">Pricing Page #1</a></li>
                                                    <li><a href="pricing-1.html">Pricing Page #2</a></li>
                                                    <li><a href="faqs.html">FAQs Page</a></li>
                                                    <li><a href="help-center.html">Help Center</a></li>
                                                    <li><a href="404.html">404 Page</a></li>
                                                </ul> */}
                                {/* MEGAMENU LINKS */}
                                {/* <ul className="col-md-12 col-lg-3 link-list">
                                                    <li className="fst-li"><a href="blog-listing.html">Blog Listing</a></li>
                                                    <li><a href="single-post.html">Single Blog Post</a></li>
                                                    <li><a href="login-2.html">Login Page</a></li>
                                                    <li><a href="signup-2.html">Signup Page</a></li>
                                                    <li><a href="reset-password.html">Reset Password</a></li>
                                                </ul> */}
                                {/* </div>   */}
                                {/* End row */}
                                {/* </div>   */}
                                {/* End container */}
                                {/* </div>   */}
                                {/* End wsmegamenu */}
                                {/* </li> */}
                                {/* END MEGAMENU */}
                                {/* SIMPLE NAVIGATION LINK */}
                                {/* <li className="nl-simple" aria-haspopup="true"><a href="pricing-1.html" className="h-link">Pricing</a></li> */}
                                {/* SIMPLE NAVIGATION LINK */}
                                {/* <li className="nl-simple" aria-haspopup="true"><a href="#faqs-3" className="h-link">FAQs</a></li> */}
                                {/* SIGN IN LINK */}
                                {/* <li className="nl-simple reg-fst-link mobile-last-link" aria-haspopup="true">
                                <Link to="/user-login" className="h-link">Sign in</Link>
                                </li> */}
                                {/* SIGN UP BUTTON */}
                                <li className="nl-simple" aria-haspopup="true">
                                    {/* <a href="signup-2.html" className="btn r-04 btn--theme hover--tra-white last-link">Sign up</a> */}

                                    <Link
                                        to='http://3.107.26.110:3000/user/login'
                                        target="_blank"
                                        className="btn r-04 btn--theme hover--tra-white last-link"
                                    >
                                        Sign in
                                    </Link>
                                </li>
                            </ul>
                        </nav>	{/* END MAIN MENU */}
                    </div>
                </div>	{/* END NAVIGATION MENU */}
            </div>
        </div>
    )
}

export default Header