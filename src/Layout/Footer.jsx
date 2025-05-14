import React from 'react'
import KonnectBlack from "../../src/assets/KonnectBlack.png"

const Footer = () => {
  return (
    <div className="container" style={{ marginTop: "2rem" }}>
      {/* FOOTER CONTENT */}
      <div className="row">
        {/* FOOTER LOGO */}
        <div className="col-xl-3">
          <div className="footer-info">
            <img className="footer-logo" src={KonnectBlack} alt="footer-logo" />
          </div>
        </div>
        {/* FOOTER LINKS */}
        <div className="col-sm-4 col-lg-3 col-xl-2">
          <div className="footer-links fl-1">
            {/* Title */}
            <h6 className="s-17 w-700">Company</h6>
            {/* Links */}
            <ul className="foo-links clearfix">
              <li><p><a href="about.html">About Us</a></p></li>
              <li><p><a href="blog-listing.html">FAQs</a></p></li>
              <li><p><a href="testimonials.html">Contact Us</a></p></li>
              {/* <li><p><a href="#"></a></p></li> */}
            </ul>
          </div>
        </div>	{/* END FOOTER LINKS */}
        {/* FOOTER LINKS */}
        <div className="col-sm-4 col-lg-2">
          <div className="footer-links fl-2">
            {/* Title */}
            <h6 className="s-17 w-700">Product</h6>
            {/* Links */}
            <ul className="foo-links clearfix">
              <li><p><a href="features.html">Disclaimer</a></p></li>
              <li><p><a href="download.html">What's New</a></p></li>
              <li><p><a href="pricing-1.html">Case Studies</a></p></li>
              {/* <li><p><a href="help-center.html">  </a></p></li> */}
            </ul>
          </div>
        </div>	{/* END FOOTER LINKS */}
        {/* FOOTER LINKS */}
        <div className="col-sm-4 col-lg-3 col-xl-2">
          <div className="footer-links fl-3">
            {/* Title */}
            <h6 className="s-17 w-700">Legal</h6>
            {/* Links */}
            <ul className="foo-links clearfix">
              <li><p><a href="terms.html">Terms and Conditions</a></p></li>
              <li><p><a href="privacy.html">Privacy Policy</a></p></li>
              <li><p><a href="cookies.html">Cookie Policy</a></p></li>
              {/* <li><p><a href="#">Site Map</a></p></li> */}
            </ul>
          </div>
        </div>	{/* END FOOTER LINKS */}
        {/* FOOTER NEWSLETTER FORM */}
        <div className="col-sm-10 col-md-8 col-lg-4 col-xl-3">
          <div className="footer-form">
            {/* Title */}
            <h6 className="s-17 w-700">Follow the Best</h6>
            {/* Newsletter Form Input */}
            <form className="newsletter-form">
              <div className="input-group r-06">
                <input type="email" className="form-control" placeholder="Email Address" required id="s-email" />
                <span className="input-group-btn ico-15">
                  <button type="submit" className="btn color--theme">
                    <span className="flaticon-right-arrow-1" />
                  </button>
                </span>
              </div>
              {/* Newsletter Form Notification */}
              <label htmlFor="s-email" className="form-notification" />
            </form>
          </div>
        </div>	{/* END FOOTER NEWSLETTER FORM */}
      </div>	{/* END FOOTER CONTENT */}
      <hr />	{/* FOOTER DIVIDER LINE */}
      {/* BOTTOM FOOTER */}
      <div className="bottom-footer">
        <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
          {/* FOOTER COPYRIGHT */}
          <div className="col">
            <div className="footer-copyright">
              <p className="p-sm">© 2025 KONNECT. <span>All Rights Reserved</span></p>
            </div>
          </div>
          {/* FOOTER SOCIALS */}
          <div className="col">
            <ul className="bottom-footer-socials ico-20 text-end">
              <li><a href="#"><span className="flaticon-facebook" /></a></li>
              <li><a href="#"><span className="flaticon-twitter" /></a></li>
              <li><a href="#"><span className="flaticon-instagram" /></a></li>
              <li><a href="#"><span className="flaticon-youtube" /></a></li>
            </ul>
          </div>
        </div>  {/* End row */}
      </div>	{/* END BOTTOM FOOTER */}
    </div>
  )
}

export default Footer