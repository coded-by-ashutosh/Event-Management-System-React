import './Style.css';
import HubNestLogo from "./HubNestLogo";

function Footer(){
    return (
        // Footer
        <>
     <footer className="bg-dark text-white pt-4 pb-2 mt-5 shadow-lg">
  <div className="container">
    <div className="row">
      
       {/* Left Side: Logo */}
      <div className="col-md-4 d-flex align-items-center">
       <HubNestLogo width="400" height="200" />
      </div>

      {/* Center - Quick Links */}
      <div className="col-md-4 mb-3 text-start">
        <h6 className="fw-bold">Quick Links</h6>
        <ul className="list-unstyled">
          <li><a href="index.html" className="text-white text-decoration-none">Home</a></li>
          <li><a href="events.html" className="text-white text-decoration-none">Events</a></li>
          <li><a href="calendar.html" className="text-white text-decoration-none">Calendar</a></li>
          <li><a href="announcements.html" className="text-white text-decoration-none">Announcements</a></li>
          <li><a href="about.html" className="text-white text-decoration-none">About</a></li>
        </ul>
      </div>

      {/* Right - Contact Info */}
      <div className="col-md-4 mb-3 text-start">
        <h6 className="fw-bold">Contact Us</h6>
        <p className="mb-1"><i className="fa-solid fa-phone"></i> +91 9876543210</p>
        <p className="mb-2"><i className="fa-solid fa-envelope"></i> support@HubNest.com</p>
        
        <div className="d-flex gap-3">
          <a href="#" className="text-white text-decoration-none"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" className="text-white text-decoration-none"><i className="fa-brands fa-twitter"></i></a>
          <a href="#" className="text-white text-decoration-none"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </div>

    <hr className="border-light my-3" />
    <p className="mb-0 text-center">&copy; 2025 <span className="fw-bold">ECMS</span>. All Rights Reserved.</p>
  </div>
</footer>


</>
    )
}

export default Footer;