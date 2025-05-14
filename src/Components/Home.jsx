import React, { useState, useEffect, useRef } from 'react'

const Home = () => {
    const [bgColor, setBgColor] = useState('#ffffff'); // Default background color
    const sectionRefs = useRef({});

    // Define background colors for each section
    const sectionColors = {
        'hero-1': '#f0f4f8',        // Light blue
        'features-6': '#f3f1f2',    // White
        'lnk-1': '#44c3f1   ',        // Light pink
        'ct-01': '#ed3057',        // Light green
        'features-5': '#fff3e0',    // Light orange
        'statistic-1': '#f3e5f5',   // Light purple
        'lnk-2': '#e0f7fa',        // Light cyan
        'features-12': '#fffde7',   // Light yellow
        'ct-02': '#f9d753',        // Light gray
        'lnk-3': '#d7ccc8',        // Light brown
        'brands-1': '#ffffff',      // White
        'features-2': '#ed3057',    // Light lime
        'ct-08': '#ed3057',        // Light blue
        'reviews-1': '#fafafa',     // Very light gray
        'rating-1': '#ffffff',      // White
        'integrations-2': '#44c3f1', // Light slate
        'faqs-3': '#ffffff',        // White
        'banner-3': '#b2dfdb',      // Light teal
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;
                        const newColor = sectionColors[sectionId] || '#ffffff'; // Fallback to white
                        setBgColor(newColor);
                    }
                });
            },
            {
                threshold: 0.5, // Trigger when 50% of the section is in view
            }
        );

        // Observe each section
        Object.values(sectionRefs.current).forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        // Cleanup observer on unmount
        return () => {
            Object.values(sectionRefs.current).forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    // Function to assign refs to sections
    const setSectionRef = (id) => (el) => {
        sectionRefs.current[id] = el;
    };
    return (
        <div  style={{ backgroundColor: bgColor, transition: 'background-color 0.5s ease' }} className="">
            <section id="hero-1" ref={setSectionRef('hero-1')}  className="bg--scroll hero-section h-screen flex items-center justify-center">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-6">
                            <div className="hero-1-txt color--white wow fadeInRight">
                                {/* Title */}
                                <h2 className="s-58 w-700">Content is the key to building an audience</h2>
                                {/* Text */}
                                <p className="p-xl">Mauris donec turpis suscipit sapien ociis sagittis sapien tempor a volute
                                    ligula and aliquet tortor
                                </p>
                                {/* Button */}
                                <a href="#banner-3" className="btn r-04 btn--theme hover--tra-white">Get started for free</a>
                                <p className="p-sm btn-txt ico-15">
                                    <span className="flaticon-check" /> No credit card needed, free 14-day trial
                                </p>
                            </div>
                        </div>	{/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-6">
                            <div className="hero-1-img wow fadeInLeft">
                                <img className="img-fluid" src="images/hero-1-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>	{/* END HERO-1 */}
            {/* FEATURES-6
  ============================================= */}
            <section id="features-6" ref={setSectionRef('features-6')} className="py-100 features-section division h-screen flex items-center justify-center">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-70">
                                {/* Title */}
                                <h2 className="s-50 w-700">Build a customer-centric marketing strategy</h2>
                                {/* Text */}
                                <p className="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
                            </div>
                        </div>
                    </div>
                    {/* FEATURES-6 WRAPPER */}
                    <div className="fbox-wrapper text-center">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                            {/* FEATURE BOX #1 */}
                            <div className="col">
                                <div className="fbox-6 fb-1 wow fadeInUp">
                                    {/* Icon */}
                                    <div className="fbox-ico ico-55">
                                        <div className="shape-ico color--theme">
                                            {/* Vector Icon */}
                                            <span className="flaticon-graphics" />
                                            {/* Shape */}
                                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                            </svg>
                                        </div>
                                    </div>	{/* End Icon */}
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">Market Research</h6>
                                        <p>Luctus augue egestas undo ultrice and quisque lacus</p>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #1 */}
                            {/* FEATURE BOX #2 */}
                            <div className="col">
                                <div className="fbox-6 fb-2 wow fadeInUp">
                                    {/* Icon */}
                                    <div className="fbox-ico ico-55">
                                        <div className="shape-ico color--theme">
                                            {/* Vector Icon */}
                                            <span className="flaticon-idea" />
                                            {/* Shape */}
                                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                            </svg>
                                        </div>
                                    </div>	{/* End Icon */}
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">User Experience</h6>
                                        <p>Luctus augue egestas undo ultrice and quisque lacus</p>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #2 */}
                            {/* FEATURE BOX #3 */}
                            <div className="col">
                                <div className="fbox-6 fb-3 wow fadeInUp">
                                    {/* Icon */}
                                    <div className="fbox-ico ico-55">
                                        <div className="shape-ico color--theme">
                                            {/* Vector Icon */}
                                            <span className="flaticon-graphic" />
                                            {/* Shape */}
                                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                            </svg>
                                        </div>
                                    </div>	{/* End Icon */}
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">Digital Marketing</h6>
                                        <p>Luctus augue egestas undo ultrice and quisque lacus</p>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #3 */}
                            {/* FEATURE BOX #4 */}
                            <div className="col">
                                <div className="fbox-6 fb-4 wow fadeInUp">
                                    {/* Icon */}
                                    <div className="fbox-ico ico-55">
                                        <div className="shape-ico color--theme">
                                            {/* Vector Icon */}
                                            <span className="flaticon-search-engine-1" />
                                            {/* Shape */}
                                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                            </svg>
                                        </div>
                                    </div>	{/* End Icon */}
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-20 w-700">SEO Services</h6>
                                        <p>Luctus augue egestas undo ultrice and quisque lacus</p>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #4 */}
                        </div>  {/* End row */}
                    </div>	{/* END FEATURES-6 WRAPPER */}
                </div>     {/* End container */}
            </section>	{/* END FEATURES-6 */}
            {/* DIVIDER LINE */}
            <hr className="divider" />
            {/* TEXT CONTENT
  ============================================= */}
            <section id="lnk-1" ref={setSectionRef('lnk-1')} className="pt-100 ct-02 content-section division">
                <div className="container">
                    {/* SECTION CONTENT (ROW) */}
                    <div className="row d-flex align-items-center">
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6">
                            <div className="img-block left-column wow fadeInRight">
                                <img className="img-fluid" src="images/img-10.png" alt="content-image" />
                            </div>
                        </div>
                        {/* TEXT BLOCK */}
                        <div className="col-md-6">
                            <div className="txt-block right-column wow fadeInLeft">
                                {/* Section ID */}
                                <span className="section-id">Enhance Engagement</span>
                                {/* Title */}
                                <h2 className="s-46 w-700">Engage your most valuable visitors</h2>
                                {/* Text */}
                                <p>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis
                                    vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit
                                </p>
                                {/* Small Title */}
                                <h5 className="s-24 w-700">Digits that define growth</h5>
                                {/* List */}
                                <ul className="simple-list">
                                    <li className="list-item">
                                        <p>Sapien quaerat tempor an ipsum laoreet purus and sapien dolor an ultrice ipsum
                                            aliquam undo congue cursus dolor
                                        </p>
                                    </li>
                                    <li className="list-item">
                                        <p className="mb-0">Purus suscipit cursus vitae cubilia magnis volute egestas vitae
                                            sapien turpis ultrice auctor congue magna placerat
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>	{/* END TEXT BLOCK */}
                    </div>	{/* END SECTION CONTENT (ROW) */}
                </div>	   {/* End container */}
            </section>	{/* END TEXT CONTENT */}
            {/* TEXT CONTENT
  ============================================= */}
            <section id="ct-01" ref={setSectionRef('ct-01')}  className="pt-100 ct-01 content-section division">
                <div className="container">
                    {/* SECTION CONTENT (ROW) */}
                    <div className="row d-flex align-items-center">
                        {/* TEXT BLOCK */}
                        <div className="col-md-6 order-last order-md-2">
                            <div className="txt-block left-column wow fadeInRight">
                                {/* TEXT BOX */}
                                <div className="txt-box">
                                    {/* Title */}
                                    <h5 className="s-24 w-700">Solution that grows with you</h5>
                                    {/* Text */}
                                    <p>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis
                                        vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit
                                    </p>
                                </div>	{/* END TEXT BOX */}
                                {/* TEXT BOX */}
                                <div className="txt-box mb-0">
                                    {/* Title */}
                                    <h5 className="s-24 w-700">Connect your data sources</h5>
                                    {/* Text */}
                                    <p>Tempor sapien sodales quaerat ipsum undo congue laoreet turpis neque auctor turpis
                                        vitae dolor luctus placerat magna and ligula cursus purus an ipsum vitae suscipit
                                        purus
                                    </p>
                                    {/* List */}
                                    <ul className="simple-list">
                                        <li className="list-item">
                                            <p>Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an ultrice ipsum
                                                aliquam undo congue dolor cursus
                                            </p>
                                        </li>
                                        <li className="list-item">
                                            <p className="mb-0">Cursus purus suscipit vitae cubilia magnis volute egestas vitae
                                                sapien turpis ultrice auctor congue magna placerat
                                            </p>
                                        </li>
                                    </ul>
                                </div>	{/* END TEXT BOX */}
                            </div>
                        </div>	{/* END TEXT BLOCK */}
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6 order-first order-md-2">
                            <div className="img-block right-column wow fadeInLeft">
                                <img className="img-fluid" src="images/img-06.png" alt="content-image" />
                            </div>
                        </div>
                    </div>	{/* END SECTION CONTENT (ROW) */}
                </div>	   {/* End container */}
            </section>	{/* END TEXT CONTENT */}
            {/* FEATURES-5
  ============================================= */}
            <section id="features-5" ref={setSectionRef('features-5')} className="pt-100 features-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-70">
                                {/* Title */}
                                <h2 className="s-50 w-700">Reach your audience through social media marketing</h2>
                                {/* Text */}
                                <p className="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
                            </div>
                        </div>
                    </div>
                    {/* FEATURES-5 WRAPPER */}
                    <div className="fbox-wrapper text-center">
                        <div className="row d-flex align-items-center">
                            {/* FEATURE BOX #1 */}
                            <div className="col-md-6">
                                <div className="fbox-5 fb-1 bg--white-400 r-16 wow fadeInUp">
                                    {/* Text */}
                                    <div className="fbox-txt order-last order-md-2">
                                        <h5 className="s-26 w-700">Marketing Integrations</h5>
                                        <p>Aliquam a augue suscipit luctus diam neque purus ipsum neque and dolor primis libero</p>
                                    </div>
                                    {/* Image */}
                                    <div className="fbox-5-img order-first order-md-2">
                                        <img className="img-fluid" src="images/f_06.png" alt="feature-image" />
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #1 */}
                            {/* FEATURE BOX #2 */}
                            <div className="col-md-6">
                                <div className="fbox-5 fb-2 bg--white-400 r-16 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-5-img">
                                        <img className="img-fluid" src="images/f_04.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h5 className="s-26 w-700">Enhance Engagement</h5>
                                        <p>Aliquam a augue suscipit luctus diam neque purus ipsum neque and dolor primis libero</p>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #2 */}
                        </div>  {/* End row */}
                    </div>	{/* END FEATURES-5 WRAPPER */}
                </div>     {/* End container */}
            </section>	{/* END FEATURES-5 */}
            {/* STATISTIC-1
  ============================================= */}
            <div id="statistic-1" className="py-100 statistic-section division">
                <div className="container">
                    {/* STATISTIC-1 WRAPPER */}
                    <div className="statistic-1-wrapper">
                        <div className="row justify-content-md-center row-cols-1 row-cols-md-3">
                            {/* STATISTIC BLOCK #1 */}
                            <div className="col">
                                <div id="sb-1-1" className="wow fadeInUp">
                                    <div className="statistic-block">
                                        {/* Digit */}
                                        <div className="statistic-block-digit text-center">
                                            <h2 className="s-46 statistic-number"><span className="count-element">89</span>k</h2>
                                        </div>
                                        {/* Text */}
                                        <div className="statistic-block-txt color--grey">
                                            <p className="p-md">Porta justo integer and velna vitae auctor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>	{/* END STATISTIC BLOCK #1 */}
                            {/* STATISTIC BLOCK #2 */}
                            <div className="col">
                                <div id="sb-1-2" className="wow fadeInUp">
                                    <div className="statistic-block">
                                        {/* Digit */}
                                        <div className="statistic-block-digit text-center">
                                            <h2 className="s-46 statistic-number"><span className="count-element">76</span>%</h2>
                                        </div>
                                        {/* Text */}
                                        <div className="statistic-block-txt color--grey">
                                            <p className="p-md">Ligula magna suscipit vitae and rutrum</p>
                                        </div>
                                    </div>
                                </div>
                            </div>	{/* END STATISTIC BLOCK #2 */}
                            {/* STATISTIC BLOCK #3 */}
                            <div className="col">
                                <div id="sb-1-3" className="wow fadeInUp">
                                    <div className="statistic-block">
                                        {/* Digit */}
                                        <div className="statistic-block-digit text-center">
                                            <h2 className="s-46 statistic-number">
                                                <span className="count-element">4</span>.<span className="count-element">93</span>
                                            </h2>
                                        </div>
                                        {/* Text */}
                                        <div className="statistic-block-txt color--grey">
                                            <p className="p-md">Sagittis congue augue egestas an egestas</p>
                                        </div>
                                    </div>
                                </div>
                            </div>	{/* END STATISTIC BLOCK #3 */}
                        </div>  {/* End row */}
                    </div>	{/* END STATISTIC-1 WRAPPER */}
                </div>	 {/* End container */}
            </div>	 {/* END STATISTIC-1 */}
            {/* DIVIDER LINE */}
            <hr className="divider" />
            {/*  TEXT CONTENT
  ============================================= */}
            <section id="lnk-2" ref={setSectionRef('lnk-2')} className="pt-100 ct-02 content-section division">
                <div className="container">
                    {/* SECTION CONTENT (ROW) */}
                    <div className="row d-flex align-items-center">
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6">
                            <div className="img-block left-column wow fadeInRight">
                                <img className="img-fluid" src="images/img-03.png" alt="content-image" />
                            </div>
                        </div>
                        {/* TEXT BLOCK */}
                        <div className="col-md-6">
                            <div className="txt-block right-column wow fadeInLeft">
                                {/* TEXT BOX */}
                                <div className="txt-box">
                                    {/* Title */}
                                    <h5 className="s-24 w-700">The smarter way to work</h5>
                                    {/* Text */}
                                    <p>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis
                                        vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit
                                    </p>
                                </div>	{/* END TEXT BOX */}
                                {/* TEXT BOX */}
                                <div className="txt-box mb-0">
                                    {/* Title */}
                                    <h5 className="s-24 w-700">Full access to all features</h5>
                                    {/* List */}
                                    <ul className="simple-list">
                                        <li className="list-item">
                                            <p>Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis
                                                sodales magna undo aoreet primis
                                            </p>
                                        </li>
                                        <li className="list-item">
                                            <p className="mb-0">Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an
                                                ultrice ipsum aliquam undo congue dolor cursus purus congue and ipsum purus sapien
                                                a blandit
                                            </p>
                                        </li>
                                    </ul>
                                    {/* Button */}
                                    <a href="#features-2" className="btn btn-sm r-04 btn--tra-black hover--theme">
                                        What's possible?
                                    </a>
                                </div>	{/* END TEXT BOX */}
                            </div>
                        </div>	{/* END TEXT BLOCK */}
                    </div>	{/* END SECTION CONTENT (ROW) */}
                </div>	   {/* End container */}
            </section>	{/* END TEXT CONTENT */}
            {/* FEATURES-12
  ============================================= */}
            <section id="features-12" ref={setSectionRef('features-12')} className="shape--bg shape--white-500 pt-100 features-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* TEXT BLOCK */}
                        <div className="col-md-5">
                            <div className="txt-block left-column wow fadeInRight">
                                {/* Section ID */}
                                <span className="section-id">One-Stop Solution</span>
                                {/* Title */}
                                <h2 className="s-46 w-700">Smart solutions, real-time results</h2>
                                {/* Text */}
                                <p>Sodales tempor sapien quaerat ipsum and congue undo laoreet turpis neque auctor turpis
                                    vitae dolor luctus placerat magna ligula and cursus vitae
                                </p>
                                {/* CONTENT BOX #1 */}
                                <div className="cbox-1 ico-15">
                                    <div className="ico-wrap color--theme">
                                        <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                                    </div>
                                    <div className="cbox-1-txt">
                                        <p>Magna dolor luctus at egestas sapien</p>
                                    </div>
                                </div>
                                {/* CONTENT BOX #2 */}
                                <div className="cbox-1 ico-15">
                                    <div className="ico-wrap color--theme">
                                        <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                                    </div>
                                    <div className="cbox-1-txt">
                                        <p>Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien
                                            turpis and ultrice magnis
                                        </p>
                                    </div>
                                </div>
                                {/* CONTENT BOX #3 */}
                                <div className="cbox-1 ico-15">
                                    <div className="ico-wrap color--theme">
                                        <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                                    </div>
                                    <div className="cbox-1-txt">
                                        <p className="mb-0">Volute turpis dolores and sagittis congue</p>
                                    </div>
                                </div>
                            </div>
                        </div>	{/* END TEXT BLOCK */}
                        {/* FEATURES-12 WRAPPER */}
                        <div className="col-md-7">
                            <div className="fbox-12-wrapper wow fadeInLeft">
                                <div className="row">
                                    <div className="col-md-6">
                                        {/* FEATURE BOX #1 */}
                                        <div id="fb-12-1" className="fbox-12 bg--white-100 block-shadow r-12 mb-30">
                                            {/* Icon */}
                                            <div className="fbox-ico ico-50">
                                                <div className="shape-ico color--theme">
                                                    {/* Vector Icon */}
                                                    <span className="flaticon-layers-1" />
                                                    {/* Shape */}
                                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                                    </svg>
                                                </div>
                                            </div>	{/* End Icon */}
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h5 className="s-19 w-700">Content Marketing</h5>
                                                <p>Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor</p>
                                            </div>
                                        </div>
                                        {/* FEATURE BOX #2 */}
                                        <div id="fb-12-2" className="fbox-12 bg--white-100 block-shadow r-12">
                                            {/* Icon */}
                                            <div className="fbox-ico ico-50">
                                                <div className="shape-ico color--theme">
                                                    {/* Vector Icon */}
                                                    <span className="flaticon-tutorial" />
                                                    {/* Shape */}
                                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                                    </svg>
                                                </div>
                                            </div>	{/* End Icon */}
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h5 className="s-19 w-700">Video Marketing</h5>
                                                <p>Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        {/* FEATURE BOX #3 */}
                                        <div id="fb-12-3" className="fbox-12 bg--white-100 block-shadow r-12 mb-30">
                                            {/* Icon */}
                                            <div className="fbox-ico ico-50">
                                                <div className="shape-ico color--theme">
                                                    {/* Vector Icon */}
                                                    <span className="flaticon-pay-per-click" />
                                                    {/* Shape */}
                                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                                    </svg>
                                                </div>
                                            </div>	{/* End Icon */}
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h5 className="s-19 w-700">Pay Per Click (PPC)</h5>
                                                <p>Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor</p>
                                            </div>
                                        </div>
                                        {/* FEATURE BOX #4 */}
                                        <div id="fb-12-4" className="fbox-12 bg--white-100 block-shadow r-12">
                                            {/* Icon */}
                                            <div className="fbox-ico ico-50">
                                                <div className="shape-ico color--theme">
                                                    {/* Vector Icon */}
                                                    <span className="flaticon-taxes" />
                                                    {/* Shape */}
                                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                                    </svg>
                                                </div>
                                            </div>	{/* End Icon */}
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h5 className="s-19 w-700">Business Analytics</h5>
                                                <p>Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>	{/* End row */}
                        </div>	{/* END FEATURES-12 WRAPPER */}
                    </div>    {/* End row */}
                </div>     {/* End container */}
            </section>	{/* END FEATURES-12 */}
            {/* TEXT CONTENT
  ============================================= */}
            <section id="ct-02" ref={setSectionRef('ct-02')} className="py-100 ct-02 content-section division">
                <div className="container">
                    {/* SECTION CONTENT (ROW) */}
                    <div className="row d-flex align-items-center">
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6">
                            <div className="img-block left-column wow fadeInRight">
                                <img className="img-fluid" src="images/img-02.png" alt="content-image" />
                            </div>
                        </div>
                        {/* TEXT BLOCK */}
                        <div className="col-md-6">
                            <div className="txt-block right-column wow fadeInLeft">
                                {/* Section ID */}
                                <span className="section-id">Easy Integration</span>
                                {/* Title */}
                                <h2 className="s-46 w-700">Plug your essential tools in few clicks</h2>
                                {/* List */}
                                <ul className="simple-list">
                                    <li className="list-item">
                                        <p>Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis
                                            sodales magna undo aoreet primis
                                        </p>
                                    </li>
                                    <li className="list-item">
                                        <p className="mb-0">Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an
                                            ultrice ipsum aliquam undo congue dolor cursus purus congue and ipsum purus sapien
                                            a blandit
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>	{/* END TEXT BLOCK */}
                    </div>	{/* END SECTION CONTENT (ROW) */}
                </div>	   {/* End container */}
            </section>	{/* END TEXT CONTENT */}
            {/* IMAGE CONTENT
  ============================================= */}
            <section id="lnk-3" ref={setSectionRef('lnk-3')} className="bg--04 ct-10 content-section division">
                <div className="section-overlay pt-100">
                    <div className="container">
                        {/* SECTION TITLE */}
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-9">
                                <div className="section-title mb-70">
                                    {/* Title */}
                                    <h2 className="s-50 w-700">Track the progress towards objectives with key results</h2>
                                    {/* Text */}
                                    <p className="s-21">Ligula risus auctor tempus magna feugiat lacinia.</p>
                                </div>
                            </div>
                        </div>
                        {/* IMAGE BLOCK */}
                        <div className="row">
                            <div className="col">
                                <div className="img-block video-preview wow fadeInUp">
                                    {/* Play Icon */}
                                    <a className="video-popup2" href="https://www.youtube.com/watch?v=7e90gBu4pas">
                                        <div className="video-btn video-btn-xl bg--theme">
                                            <div className="video-block-wrapper"><span className="flaticon-play-button" /></div>
                                        </div>
                                    </a>
                                    {/* Preview Image */}
                                    <img className="img-fluid" src="images/dashboard-01.png" alt="video-preview" />
                                </div>
                            </div>
                        </div>
                    </div>	   {/* End container */}
                </div>     {/* End section overlay */}
            </section>	{/* END IMAGE CONTENT */}
            {/* BRANDS-1
  ============================================= */}
            <div id="brands-1" ref={setSectionRef('brands-1')} className="pt-80 pb-100 brands-section">
                <div className="container">
                    {/* BRANDS TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="brands-title mb-50">
                                <h5 className="s-18">Martex is loved and trusted by thousands:</h5>
                            </div>
                        </div>
                    </div>
                    {/* BRANDS CAROUSEL */}
                    <div className="row">
                        <div className="col text-center">
                            <div className="owl-carousel brands-carousel-5">
                                {/* BRAND LOGO IMAGE */}
                                <div className="brand-logo">
                                    <a href="#"><img className="img-fluid" src="images/brand-1.png" alt="brand-logo" /></a>
                                </div>
                                {/* BRAND LOGO IMAGE */}
                                <div className="brand-logo">
                                    <a href="#"><img className="img-fluid" src="images/brand-2.png" alt="brand-logo" /></a>
                                </div>
                                {/* BRAND LOGO IMAGE */}
                                <div className="brand-logo">
                                    <a href="#"><img className="img-fluid" src="images/brand-3.png" alt="brand-logo" /></a>
                                </div>
                                {/* BRAND LOGO IMAGE */}
                                <div className="brand-logo">
                                    <a href="#"><img className="img-fluid" src="images/brand-4.png" alt="brand-logo" /></a>
                                </div>
                                {/* BRAND LOGO IMAGE */}
                                <div className="brand-logo">
                                    <a href="#"><img className="img-fluid" src="images/brand-5.png" alt="brand-logo" /></a>
                                </div>
                                {/* BRAND LOGO IMAGE */}
                                <div className="brand-logo">
                                    <a href="#"><img className="img-fluid" src="images/brand-6.png" alt="brand-logo" /></a>
                                </div>
                                {/* BRAND LOGO IMAGE */}
                                <div className="brand-logo">
                                    <a href="#"><img className="img-fluid" src="images/brand-7.png" alt="brand-logo" /></a>
                                </div>
                                {/* BRAND LOGO IMAGE */}
                                <div className="brand-logo">
                                    <a href="#"><img className="img-fluid" src="images/brand-8.png" alt="brand-logo" /></a>
                                </div>
                                {/* BRAND LOGO IMAGE */}
                                <div className="brand-logo">
                                    <a href="#"><img className="img-fluid" src="images/brand-9.png" alt="brand-logo" /></a>
                                </div>
                            </div>
                        </div>
                    </div>  {/* END BRANDS CAROUSEL */}
                </div>	{/* End container */}
            </div>	{/* END BRANDS-1 */}
            {/* DIVIDER LINE */}
            <hr className="divider" />
            {/* FEATURES-2
  ============================================= */}
            <section id="features-2" ref={setSectionRef('features-2')} className="py-100 features-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-80">
                                {/* Title */}
                                <h2 className="s-50 w-700">The Complete Solutions</h2>
                                {/* Text */}
                                <p className="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
                            </div>
                        </div>
                    </div>
                    {/* FEATURES-2 WRAPPER */}
                    <div className="fbox-wrapper text-center">
                        <div className="row row-cols-1 row-cols-md-3">
                            {/* FEATURE BOX #1 */}
                            <div className="col">
                                <div className="fbox-2 fb-1 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid" src="images/f_01.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-22 w-700">Intuitive Dashboard</h6>
                                        <p>Luctus egestas augue undo ultrice aliquam in lacus congue dapibus</p>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #1 */}
                            {/* FEATURE BOX #2 */}
                            <div className="col">
                                <div className="fbox-2 fb-2 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid" src="images/f_05.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-22 w-700">Effortless Integration</h6>
                                        <p>Tempor laoreet augue undo ultrice aliquam in lacusq luctus feugiat</p>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #2 */}
                            {/* FEATURE BOX #3 */}
                            <div className="col">
                                <div className="fbox-2 fb-3 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid" src="images/f_02.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-22 w-700">Engagement Analysis</h6>
                                        <p>Egestas luctus augue undo ultrice aliquam in lacus feugiat cursus</p>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #3 */}
                        </div>  {/* End row */}
                    </div>	{/* END FEATURES-2 WRAPPER */}
                </div>     {/* End container */}
            </section>	{/* END FEATURES-2 */}
            {/* DIVIDER LINE */}
            <hr className="divider" />
            {/* TEXT CONTENT
  ============================================= */}
            <section className="pt-100 ct-01 content-section division">
                <div className="container">
                    {/* SECTION CONTENT (ROW) */}
                    <div className="row d-flex align-items-center">
                        {/* TEXT BLOCK */}
                        <div className="col-md-6 order-last order-md-2">
                            <div className="txt-block left-column wow fadeInRight">
                                {/* Section ID */}
                                <span className="section-id">Productivity Focused</span>
                                {/* Title */}
                                <h2 className="s-46 w-700">Achieve more with better workflows</h2>
                                {/* Text */}
                                <p>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis
                                    vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit
                                </p>
                                {/* CONTENT BOX #1 */}
                                <div className="cbox-1 ico-15">
                                    <div className="ico-wrap color--theme">
                                        <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                                    </div>
                                    <div className="cbox-1-txt">
                                        <p>Magna dolor luctus at egestas sapien</p>
                                    </div>
                                </div>
                                {/* CONTENT BOX #2 */}
                                <div className="cbox-1 ico-15">
                                    <div className="ico-wrap color--theme">
                                        <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                                    </div>
                                    <div className="cbox-1-txt">
                                        <p>Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien
                                            turpis ultrice auctor congue varius magnis
                                        </p>
                                    </div>
                                </div>
                                {/* CONTENT BOX #3 */}
                                <div className="cbox-1 ico-15">
                                    <div className="ico-wrap color--theme">
                                        <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                                    </div>
                                    <div className="cbox-1-txt">
                                        <p className="mb-0">Volute turpis dolores and sagittis congue</p>
                                    </div>
                                </div>
                            </div>
                        </div>	{/* END TEXT BLOCK */}
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6 order-first order-md-2">
                            <div className="img-block right-column wow fadeInLeft">
                                <img className="img-fluid" src="images/img-13.png" alt="content-image" />
                            </div>
                        </div>
                    </div>	{/* END SECTION CONTENT (ROW) */}
                </div>	   {/* End container */}
            </section>	{/* END TEXT CONTENT */}
            {/* IMAGE CONTENT
  ============================================= */}
            <section className="pt-100 ct-08 content-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-70">
                                {/* Title */}
                                <h2 className="s-50 w-700">Discover insights across all your data with Martex</h2>
                                {/* Text */}
                                <p className="s-21">Ligula risus auctor tempus magna feugiat lacinia.</p>
                            </div>
                        </div>
                    </div>
                    {/* IMAGE BLOCK */}
                    <div className="row">
                        <div className="col">
                            <div className="img-block wow fadeInUp">
                                <img className="img-fluid" src="images/img-19.png" alt="video-preview" />
                            </div>
                        </div>
                    </div>
                    {/* ACTION BUTTON */}
                    <div className="row">
                        <div className="col">
                            <div className="img-block-btn text-center wow fadeInUp">
                                {/* Button */}
                                <a href="#integrations-2" className="btn r-04 btn--tra-black hover--theme">Monitor your activity</a>
                                {/* Advantages List */}
                                <ul className="advantages ico-15 clearfix">
                                    <li><p>Free 14 days trial</p></li>
                                    <li className="advantages-links-divider"><p><span className="flaticon-minus" /></p></li>
                                    <li><p>Exclusive Support</p></li>
                                    <li className="advantages-links-divider"><p><span className="flaticon-minus" /></p></li>
                                    <li><p>No Fees</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>	   {/* End container */}
            </section>	{/* END IMAGE CONTENT */}
            {/* TEXT CONTENT
  ============================================= */}
            <section className="py-100 ct-02 content-section division">
                <div className="container">
                    {/* SECTION CONTENT (ROW) */}
                    <div className="row d-flex align-items-center">
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6">
                            <div className="img-block left-column wow fadeInRight">
                                <img className="img-fluid" src="images/img-09.png" alt="content-image" />
                            </div>
                        </div>
                        {/* TEXT BLOCK */}
                        <div className="col-md-6">
                            <div className="txt-block right-column wow fadeInLeft">
                                {/* CONTENT BOX #1 */}
                                <div className="cbox-2 process-step">
                                    {/* Icon */}
                                    <div className="ico-wrap">
                                        <div className="cbox-2-ico bg--theme color--white">1</div>
                                        <span className="cbox-2-line" />
                                    </div>
                                    {/* Text */}
                                    <div className="cbox-2-txt">
                                        <h5 className="s-22 w-700">Register in 30 seconds</h5>
                                        <p>Ligula risus auctor tempus feugiat dolor lacinia nemo purus in lipsum purus
                                            sapien quaerat a primis viverra tellus vitae luctus dolor ipsum neque ligula
                                            quaerat
                                        </p>
                                    </div>
                                </div>	{/* END CONTENT BOX #1 */}
                                {/* CONTENT BOX #2 */}
                                <div className="cbox-2 process-step">
                                    {/* Icon */}
                                    <div className="ico-wrap">
                                        <div className="cbox-2-ico bg--theme color--white">2</div>
                                        <span className="cbox-2-line" />
                                    </div>
                                    {/* Text */}
                                    <div className="cbox-2-txt">
                                        <h5 className="s-22 w-700">Customizable Dashboards</h5>
                                        <p>Ligula risus auctor tempus feugiat dolor lacinia nemo purus in lipsum purus
                                            sapien quaerat a primis viverra tellus vitae luctus dolor ipsum neque ligula
                                            quaerat
                                        </p>
                                    </div>
                                </div>	{/* END CONTENT BOX #2 */}
                                {/* CONTENT BOX #3 */}
                                <div className="cbox-2 process-step">
                                    {/* Icon */}
                                    <div className="ico-wrap">
                                        <div className="cbox-2-ico bg--theme color--white">3</div>
                                    </div>
                                    {/* Text */}
                                    <div className="cbox-2-txt">
                                        <h5 className="s-22 w-700">Improved Productivity</h5>
                                        <p className="mb-0">Ligula risus auctor tempus feugiat dolor lacinia nemo purus in
                                            lipsum purus sapien quaerat a primis viverra tellus vitae luctus dolor ipsum n
                                            eque ligula quaerat
                                        </p>
                                    </div>
                                </div>	{/* END CONTENT BOX #3 */}
                            </div>
                        </div>	{/* END TEXT BLOCK */}
                    </div>	{/* END SECTION CONTENT (ROW) */}
                </div>	   {/* End container */}
            </section>	{/* END TEXT CONTENT */}
            {/* TESTIMONIALS-1
  ============================================= */}
            <section id="reviews-1" className="pt-100 shape--06 shape--gr-whitesmoke reviews-section">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-70">
                                {/* Title */}
                                <h2 className="s-50 w-700">Here’s what our amazing clients are saying</h2>
                                {/* Text */}
                                <p className="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
                            </div>
                        </div>
                    </div>
                    {/* TESTIMONIALS CONTENT */}
                    <div className="row">
                        <div className="col">
                            <div className="owl-carousel owl-theme reviews-1-wrapper">
                                {/* TESTIMONIAL #1 */}
                                <div className="review-1 bg--white-100 block-shadow r-08">
                                    {/* Quote Icon */}
                                    <div className="review-ico ico-65"><span className="flaticon-quote" /></div>
                                    {/* Text */}
                                    <div className="review-txt">
                                        {/* Text */}
                                        <p>Etiam sapien sagittis congue augue a massa varius egestas ultrice varius magna
                                            a tempus aliquet undo cursus suscipit
                                        </p>
                                        {/* Author */}
                                        <div className="author-data clearfix">
                                            {/* Avatar */}
                                            <div className="review-avatar">
                                                <img src="images/review-author-1.jpg" alt="review-avatar" />
                                            </div>
                                            {/* Data */}
                                            <div className="review-author">
                                                <h6 className="s-18 w-700">Scott Boxer</h6>
                                                <p className="p-sm">@scott_boxer</p>
                                            </div>
                                        </div>	{/* End Author */}
                                    </div>	{/* End Text */}
                                </div>	{/* END TESTIMONIAL #1 */}
                                {/* TESTIMONIAL #2 */}
                                <div className="review-1 bg--white-100 block-shadow r-08">
                                    {/* Quote Icon */}
                                    <div className="review-ico ico-65"><span className="flaticon-quote" /></div>
                                    {/* Text */}
                                    <div className="review-txt">
                                        {/* Text */}
                                        <p>At sagittis congue augue diam egestas magna an ipsum vitae purus ipsum primis
                                            and cubilia laoreet augue egestas a luctus donec ltrice ligula porta augue magna
                                            suscipit lectus gestas
                                        </p>
                                        {/* Author */}
                                        <div className="author-data clearfix">
                                            {/* Avatar */}
                                            <div className="review-avatar">
                                                <img src="images/review-author-2.jpg" alt="review-avatar" />
                                            </div>
                                            {/* Data */}
                                            <div className="review-author">
                                                <h6 className="s-18 w-700">Joel Peterson</h6>
                                                <p className="p-sm">Internet Surfer</p>
                                            </div>
                                        </div>	{/* End Author */}
                                    </div>	{/* End Text */}
                                </div>	{/* END TESTIMONIAL #2 */}
                                {/* TESTIMONIAL #3 */}
                                <div className="review-1 bg--white-100 block-shadow r-08">
                                    {/* Quote Icon */}
                                    <div className="review-ico ico-65"><span className="flaticon-quote" /></div>
                                    {/* Text */}
                                    <div className="review-txt">
                                        {/* Text */}
                                        <p>Mauris gestas magnis a sapien etiam sapien congue an augue egestas and ultrice
                                            vitae purus diam an integer congue magna ligula egestas magna suscipit
                                        </p>
                                        {/* Author */}
                                        <div className="author-data clearfix">
                                            {/* Avatar */}
                                            <div className="review-avatar">
                                                <img src="images/review-author-3.jpg" alt="review-avatar" />
                                            </div>
                                            {/* Data */}
                                            <div className="review-author">
                                                <h6 className="s-18 w-700">Marisol19</h6>
                                                <p className="p-sm">@marisol19</p>
                                            </div>
                                        </div>	{/* End Author */}
                                    </div>	{/* End Text */}
                                </div>	{/* END TESTIMONIAL #3 */}
                                {/* TESTIMONIAL #4 */}
                                <div className="review-1 bg--white-100 block-shadow r-08">
                                    {/* Quote Icon */}
                                    <div className="review-ico ico-65"><span className="flaticon-quote" /></div>
                                    {/* Text */}
                                    <div className="review-txt">
                                        {/* Text */}
                                        <p>Mauris donec a magnis sapien etiam pretium a congue augue volutpat lectus
                                            aenean magna and undo mauris lectus laoreet tempor egestas rutrum
                                        </p>
                                        {/* Author */}
                                        <div className="author-data clearfix">
                                            {/* Avatar */}
                                            <div className="review-avatar">
                                                <img src="images/review-author-4.jpg" alt="review-avatar" />
                                            </div>
                                            {/* Data */}
                                            <div className="review-author">
                                                <h6 className="s-18 w-700">Leslie D.</h6>
                                                <p className="p-sm">Web Developer</p>
                                            </div>
                                        </div>	{/* End Author */}
                                    </div>	{/* End Text */}
                                </div>	{/* END TESTIMONIAL #4 */}
                                {/* TESTIMONIAL #5 */}
                                <div className="review-1 bg--white-100 block-shadow r-08">
                                    {/* Quote Icon */}
                                    <div className="review-ico ico-65"><span className="flaticon-quote" /></div>
                                    {/* Text */}
                                    <div className="review-txt">
                                        {/* Text */}
                                        <p>An augue cubilia undo laoreet magna suscipit egestas ipsum lectus purus ipsum
                                            and primis augue an ultrice ligula egestas suscipit a lectus gestas auctor tempus
                                            feugiat impedit
                                        </p>
                                        {/* Author */}
                                        <div className="author-data clearfix">
                                            {/* Avatar */}
                                            <div className="review-avatar">
                                                <img src="images/review-author-5.jpg" alt="review-avatar" />
                                            </div>
                                            {/* Data */}
                                            <div className="review-author">
                                                <h6 className="s-18 w-700">Jennifer Harper</h6>
                                                <p className="p-sm">App Developer</p>
                                            </div>
                                        </div>	{/* End Author */}
                                    </div>	{/* End Text */}
                                </div>	{/* END TESTIMONIAL #5 */}
                                {/* TESTIMONIAL #6 */}
                                <div className="review-1 bg--white-100 block-shadow r-08">
                                    {/* Quote Icon */}
                                    <div className="review-ico ico-65"><span className="flaticon-quote" /></div>
                                    {/* Text */}
                                    <div className="review-txt">
                                        {/* Text */}
                                        <p>An augue cubilia laoreet undo magna ipsum semper suscipit egestas magna ipsum
                                            ligula a vitae purus and ipsum primis cubilia magna suscipit
                                        </p>
                                        {/* Author */}
                                        <div className="author-data clearfix">
                                            {/* Avatar */}
                                            <div className="review-avatar">
                                                <img src="images/review-author-6.jpg" alt="review-avatar" />
                                            </div>
                                            {/* Data */}
                                            <div className="review-author">
                                                <h6 className="s-18 w-700">Jonathan Barnes</h6>
                                                <p className="p-sm">jQuery Programmer</p>
                                            </div>
                                        </div>	{/* End Author */}
                                    </div>	{/* End Text */}
                                </div>	{/* END TESTIMONIAL #6 */}
                                {/* TESTIMONIAL #7 */}
                                <div className="review-1 bg--white-100 block-shadow r-08">
                                    {/* Quote Icon */}
                                    <div className="review-ico ico-65"><span className="flaticon-quote" /></div>
                                    {/* Text */}
                                    <div className="review-txt">
                                        {/* Text */}
                                        <p>Augue egestas porta tempus volutpat egestas augue cubilia laoreet a magna
                                            suscipit luctus dolor blandit vitae purus neque tempus an aliquet porta gestas
                                            rutrum blandit vitae
                                        </p>
                                        {/* Author */}
                                        <div className="author-data clearfix">
                                            {/* Avatar */}
                                            <div className="review-avatar">
                                                <img src="images/review-author-7.jpg" alt="review-avatar" />
                                            </div>
                                            {/* Data */}
                                            <div className="review-author">
                                                <h6 className="s-18 w-700">Mike Harris</h6>
                                                <p className="p-sm">Graphic Designer</p>
                                            </div>
                                        </div>	{/* End Author */}
                                    </div>	{/* End Text */}
                                </div>	{/* END TESTIMONIAL #7 */}
                                {/* TESTIMONIAL #8 */}
                                <div className="review-1 bg--white-100 block-shadow r-08">
                                    {/* Quote Icon */}
                                    <div className="review-ico ico-65"><span className="flaticon-quote" /></div>
                                    {/* Text */}
                                    <div className="review-txt">
                                        {/* Text */}
                                        <p>Augue at vitae purus tempus egestas volutpat augue undo cubilia laoreet magna
                                            suscipit luctus dolor blandit at purus tempus feugiat impedit
                                        </p>
                                        {/* Author */}
                                        <div className="author-data clearfix">
                                            {/* Avatar */}
                                            <div className="review-avatar">
                                                <img src="images/review-author-8.jpg" alt="review-avatar" />
                                            </div>
                                            {/* Data */}
                                            <div className="review-author">
                                                <h6 className="s-18 w-700">Evelyn Martinez</h6>
                                                <p className="p-sm">WordPress Consultant</p>
                                            </div>
                                        </div>	{/* End Author */}
                                    </div>	{/* End Text */}
                                </div>	{/* END TESTIMONIAL #8 */}
                            </div>
                        </div>
                    </div>	{/* END TESTIMONIALS CONTENT */}
                </div>	   {/* End container */}
            </section>	{/* END TESTIMONIALS-1 */}
            {/* RATING-1
  ============================================= */}
            <div id="rating-1" className="pt-70 rating-section">
                <div className="container">
                    {/* RATING TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="rating-title mb-40">
                                <h5 className="s-18 color--grey w-500">Our clients love us as much as we love them</h5>
                            </div>
                        </div>
                    </div>
                    {/* RATING-1 WRAPPER */}
                    <div className="rating-1-wrapper">
                        <div className="row justify-content-md-center row-cols-1 row-cols-md-3">
                            {/* RATING BOX #1 */}
                            <div className="col">
                                <div id="rb-1-1" className="rbox-1">
                                    {/* Brand Logo */}
                                    <div className="rbox-1-img">
                                        <img className="img-fluid" src="images/brand-21.png" alt="feature-image" />
                                    </div>
                                    {/* Rating Stars */}
                                    <div className="star-rating ico-10 bg--white-100 r-100 clearfix">
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star-half-empty mr-5" />
                                        &nbsp; 4.7/5
                                    </div>
                                </div>
                            </div>
                            {/* RATING BOX #2 */}
                            <div className="col">
                                <div id="rb-1-2" className="rbox-1">
                                    {/* Brand Logo */}
                                    <div className="rbox-1-img">
                                        <img className="img-fluid" src="images/brand-22.png" alt="feature-image" />
                                    </div>
                                    {/* Rating Stars */}
                                    <div className="star-rating ico-10 bg--white-100 r-100 clearfix">
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star mr-5" />
                                        &nbsp; 4.95/5
                                    </div>
                                </div>
                            </div>
                            {/* RATING BOX #3 */}
                            <div className="col">
                                <div id="rb-1-3" className="rbox-1">
                                    {/* Brand Logo */}
                                    <div className="rbox-1-img">
                                        <img className="img-fluid" src="images/brand-23.png" alt="feature-image" />
                                    </div>
                                    {/* Rating Stars */}
                                    <div className="star-rating ico-10 bg--white-100 r-100 clearfix">
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star-1 mr-5" />
                                        &nbsp; 4.24/5
                                    </div>
                                </div>
                            </div>
                        </div>  {/* End row */}
                    </div>	{/* END RATING-1 WRAPPER */}
                </div>	{/* End container */}
            </div>	{/* END RATING-1 */}
            {/* INTEGRATIONS-2
  ============================================= */}
            <section id="integrations-2" className="pt-100 integrations-section">
                <div className="container">
                    {/* INTEGRATIONS-2 WRAPPER */}
                    <div className="integrations-2-wrapper bg--02 r-16 text-center">
                        {/* SECTION TITLE */}
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-9">
                                <div className="section-title mb-50">
                                    {/* Title */}
                                    <h2 className="s-50 w-700">Automate your workflow with our integrations</h2>
                                    {/* Text */}
                                    <p className="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
                                </div>
                            </div>
                        </div>
                        {/* TOOLS ROW */}
                        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-5">
                            {/* TOOL #1 */}
                            <div className="col">
                                <a href="#" className="in_tool it-1 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="images/png_icons/tool-1.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">Zapier</h6>
                                </a>
                            </div>	{/* END TOOL #1 */}
                            {/* TOOL #2 */}
                            <div className="col">
                                <a href="#" className="in_tool it-2 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="images/png_icons/tool-2.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">Google Analytics</h6>
                                </a>
                            </div>	{/* END TOOL #2 */}
                            {/* TOOL #3 */}
                            <div className="col">
                                <a href="#" className="in_tool it-3 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="images/png_icons/tool-3.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">Amplitude</h6>
                                </a>
                            </div>	{/* END TOOL #3 */}
                            {/* TOOL #4 */}
                            <div className="col">
                                <a href="#" className="in_tool it-4 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="images/png_icons/tool-4.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">Hubspot</h6>
                                </a>
                            </div>	{/* END TOOL #4 */}
                            {/* TOOL #5 */}
                            <div className="col">
                                <a href="#" className="in_tool it-5 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="images/png_icons/tool-5.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">MailChimp</h6>
                                </a>
                            </div>	{/* END TOOL #5 */}
                        </div>	{/* END TOOLS ROW */}
                        {/* MORE BUTTON */}
                        <div className="row">
                            <div className="col">
                                <div className="more-btn text-center mt-60 wow fadeInUp">
                                    <a href="integrations.html" className="btn btn--tra-black hover--theme">View all integrations</a>
                                </div>
                            </div>
                        </div>
                    </div>	{/* END INTEGRATIONS-2 WRAPPER */}
                </div>     {/* End container */}
            </section>	{/* END INTEGRATIONS-2 */}
            {/* FAQs-3
  ============================================= */}
            <section id="faqs-3" className="pt-100 faqs-section">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-70">
                                {/* Title */}
                                <h2 className="s-50 w-700">Questions &amp; Answers</h2>
                                {/* Text */}
                                <p className="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
                            </div>
                        </div>
                    </div>
                    {/* FAQs-3 QUESTIONS */}
                    <div className="faqs-3-questions">
                        <div className="row">
                            {/* QUESTIONS HOLDER */}
                            <div className="col-lg-6">
                                <div className="questions-holder">
                                    {/* QUESTION #1 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>1.</span> Getting started with Martex</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Etiam amet mauris suscipit in odio integer congue metus
                                            and vitae arcu mollis blandit ultrice ligula egestas magna suscipit lectus magna
                                            suscipit luctus blandit and laoreet
                                        </p>
                                    </div>
                                    {/* QUESTION #2 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>2.</span> What's inside the package?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">An enim nullam tempor sapien gravida donec ipsum and enim
                                            porta justo integer at velna vitae auctor integer congue undo magna laoreet
                                            augue pretium purus pretium ligula
                                        </p>
                                    </div>
                                    {/* QUESTION #3 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>3.</span> How do I choose a plan?</h5>
                                        {/* Answer */}
                                        <ul className="simple-list color--grey">
                                            <li className="list-item">
                                                <p>Fringilla risus, luctus mauris orci auctor purus ligula euismod pretium
                                                    purus pretium rutrum tempor sapien
                                                </p>
                                            </li>
                                            <li className="list-item">
                                                <p>Nemo ipsam egestas volute undo turpis purus lipsum primis aliquam sapien
                                                    quaerat sodales pretium a purus
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>	{/* END QUESTIONS HOLDER */}
                            {/* QUESTIONS WRAPPER */}
                            <div className="col-lg-6">
                                <div className="questions-holder">
                                    {/* QUESTION #4 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>4.</span> How does Martex handle my privacy?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Quaerat sodales sapien euismod blandit purus a purus
                                            ipsum primis in cubilia laoreet augue luctus dolor luctus
                                        </p>
                                        {/* Answer */}
                                        <p className="color--grey">An enim nullam tempor sapien gravida donec congue metus.
                                            Vitae arcu mollis blandit integer nemo volute velna
                                        </p>
                                    </div>
                                    {/* QUESTION #5 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>5.</span> I have an issue with my account</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Cubilia laoreet augue egestas and luctus donec curabite
                                            diam vitae dapibus libero and quisque gravida donec neque blandit justo
                                            aliquam molestie nunc sapien justo
                                        </p>
                                    </div>
                                    {/* QUESTION #6 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>6.</span> Can I cancel at anytime?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">An enim nullam tempor sapien gravida donec ipsum and enim
                                            porta justo integer at velna vitae auctor integer congue undo magna laoreet
                                            augue pretium purus pretium ligula
                                        </p>
                                    </div>
                                </div>
                            </div>	{/* END QUESTIONS HOLDER */}
                        </div>  {/* End row */}
                    </div>	{/* END FAQs-3 QUESTIONS */}
                    {/* MORE QUESTIONS LINK */}
                    <div className="row">
                        <div className="col">
                            <div className="more-questions mt-40">
                                <div className="more-questions-txt bg--white-400 r-100">
                                    <p className="p-lg">Have any questions?
                                        <a href="contacts.html" className="color--theme">Get in Touch</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>	   {/* End container */}
            </section>	{/* END FAQs-3 */}
            {/* BANNER-3
  ============================================= */}
            <section id="banner-3" className="pt-100 banner-section">
                <div className="container">
                    {/* BANNER-3 WRAPPER */}
                    <div className="banner-3-wrapper bg--03 bg--scroll r-16">
                        <div className="banner-overlay">
                            <div className="row">
                                {/* BANNER-3 TEXT */}
                                <div className="col">
                                    <div className="banner-3-txt color--white">
                                        {/* Title */}
                                        <h2 className="s-48 w-700">Starting with Martex is easy, fast and free</h2>
                                        {/* Text */}
                                        <p className="p-xl">It only takes a few clicks to get started</p>
                                        {/* Button */}
                                        <a href="signup-1.html" className="btn r-04 btn--theme hover--tra-white">Get srarted - it's free</a>
                                        {/* Button Text */}
                                        <p className="p-sm btn-txt ico-15">
                                            <span className="flaticon-check" /> Free for 14 days, no credit card required.
                                        </p>
                                    </div>
                                </div>	{/* END BANNER-3 TEXT */}
                            </div>   {/* End row */}
                        </div>   {/* End banner overlay */}
                    </div>    {/* END BANNER-3 WRAPPER */}
                </div>     {/* End container */}
            </section>	{/* END BANNER-3 */}
            {/* MODAL WINDOW (IMAGE LINK)
  ============================================= */}
            <div id="modal-1" className="modal fade" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {/* CLOSE BUTTON */}
                        <button type="button" className="btn-close ico-10 white-color" data-bs-dismiss="modal" aria-label="Close">
                            <span className="flaticon-cancel" />
                        </button>
                        {/* MODAL CONTENT */}
                        <div className="bg-img rounded">
                            <div className="overlay-light">
                                <div className="modal-img text-center">
                                    <a href="pricing-1.html">
                                        <img className="img-fluid" src="images/modal-2-img.jpg" alt="modal-image" />
                                    </a>
                                </div>
                            </div>
                        </div>	{/* END MODAL CONTENT */}
                    </div>
                </div>
            </div>	{/* END MODAL WINDOW (IMAGE LINK) */}
            {/* MODAL WINDOW (REQUEST FORM)
  ============================================= */}
            <div id="modal-3" className="modal auto-off fade" tabIndex={-1} role="dialog" aria-labelledby="modal-3">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                        {/* CLOSE BUTTON */}
                        <button type="button" className="btn-close ico-10 white-color" data-bs-dismiss="modal" aria-label="Close">
                            <span className="flaticon-cancel" />
                        </button>
                        {/* MODAL CONTENT */}
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    {/* BACKGROUND IMAGE */}
                                    <div className="col-md-5 bg-img d-none d-sm-flex align-items-end" />
                                    {/* REQUEST FORM */}
                                    <div className="col-md-7">
                                        <div className="modal-body-content">
                                            {/* TEXT */}
                                            <div className="request-form-title">
                                                {/* Title 	*/}
                                                <h3 className="s-28 w-700">Get started for Free!</h3>
                                                {/* Text */}
                                                <p className="color--grey">Aliquam augue suscipit, luctus neque purus ipsum
                                                    neque dolor primis libero
                                                </p>
                                            </div>
                                            {/* FORM */}
                                            <form name="requestForm" className="row request-form">
                                                {/* Form Input */}
                                                <div className="col-md-12">
                                                    <input type="text" name="name" className="form-control name" placeholder="Enter Your Name*" autoComplete="off" required />
                                                </div>
                                                {/* Form Input */}
                                                <div className="col-md-12">
                                                    <input type="email" name="email" className="form-control email" placeholder="Enter Your Email*" autoComplete="off" required />
                                                </div>
                                                {/* Form Button */}
                                                <div className="col-md-12 form-btn">
                                                    <button type="submit" className="btn btn--theme hover--black submit">Get Started Now</button>
                                                </div>
                                                {/* Form Message */}
                                                <div className="col-md-12 request-form-msg">
                                                    <span className="loading" />
                                                </div>
                                            </form>	{/* END FORM */}
                                        </div>
                                    </div>	{/* END REQUEST FORM */}
                                </div>
                            </div>
                        </div>	{/* END MODAL CONTENT */}
                    </div>
                </div>
            </div>	{/* MODAL WINDOW (REQUEST FORM) */}
        </div>
    )
}

export default Home