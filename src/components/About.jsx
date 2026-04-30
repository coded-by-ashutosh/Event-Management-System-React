import Header from "./Header";
import Footer from "./Footer";

function About() {
  return (
    <>
  
      {/* Top Section: Yellow Background */}
      <section className="py-5 mt-5  bg-warning">
        <div className="container">
          <div className="row align-items-center m-5">
            {/* Left Side Image */}
            <div className="col-md-6 mb-4">
              <img
                src="public/images/about.jpg"
                alt="About HubNest"
                className="img-fluid rounded shadow-lg"
              />
            </div>

            {/* Right Side Content */}
            <div className="about-content1 col-md-6 d-flex flex-column justify-content-center">
              <p className=" fw-semibold">
                Welcome to <strong>HubNest</strong> – your one-stop platform for
                organizing, managing, and participating in events seamlessly.
              </p>
              <p className=" text-black">
                We make managing events and clubs simple and engaging. From
                creating events, managing schedules, sending announcements, to
                booking tickets – we provide everything in one platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest Section: Light Background */}
      <section className="py-5 bg-light mt-5">
        <div className="container">
          {/* Interactive Features */}
          <div className="row text-center mt-4">
            <div className="col-6 col-md-4 mb-3">
              <div className="p-3 rounded-circle bg-warning bg-opacity-25 d-inline-flex align-items-center justify-content-center">
                <i className="fa-solid fa-calendar-days fa-2x text-warning"></i>
              </div>
              <p className="mt-2 fw-semibold">Smart Calendar</p>
            </div>
            <div className="col-6 col-md-4 mb-3">
              <div className="p-3 rounded-circle bg-success bg-opacity-25 d-inline-flex align-items-center justify-content-center">
                <i className="fa-solid fa-users fa-2x text-success"></i>
              </div>
              <p className="mt-2 fw-semibold">Club Management</p>
            </div>
            <div className="col-6 col-md-4 mb-3">
              <div className="p-3 rounded-circle bg-danger bg-opacity-25 d-inline-flex align-items-center justify-content-center">
                <i className="fa-solid fa-bullhorn fa-2x text-danger"></i>
              </div>
              <p className="mt-2 fw-semibold">Live Announcements</p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="about-content2 row text-center m-5">
            <div className="col-md-6 mb-4">
              <h3 className="text-primary mb-3 fw-bold">Our Mission</h3>
              <p>
                To simplify event and club management, making participation
                seamless for everyone.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <h3 className="text-primary mb-3 fw-bold">Our Vision</h3>
              <p>
                To become the go-to platform for all event and club activities,
                fostering community engagement.
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="about-content3 row text-center mb-5">
            <div className="col-md-4 mb-3">
              <h2 className="text-primary fw-bold">120+</h2>
              <p>Events Organized</p>
            </div>
            <div className="col-md-4 mb-3">
              <h2 className="text-success fw-bold">50+</h2>
              <p>Active Clubs</p>
            </div>
            <div className="col-md-4 mb-3">
              <h2 className="text-warning fw-bold">5000+</h2>
              <p>Happy Participants</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-5">
            <h3 className="text-primary text-center mb-4 fw-bold">
              What Our Users Say
            </h3>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="card p-4 shadow-sm h-100">
                  <i className="fa-solid fa-quote-left text-primary mb-3"></i>
                  <p className="mb-2">
                    "HubNest made managing our college club so easy! We can
                    track events and communicate instantly."
                  </p>
                  <small>- Priya S., Club President</small>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="card p-4 shadow-sm h-100">
                  <i className="fa-solid fa-quote-left text-primary mb-3"></i>
                  <p className="mb-2">
                    "I never miss any event updates thanks to the live
                    announcements feature."
                  </p>
                  <small>- Rahul K., Student Participant</small>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="about text-center">
            <a href="/register" className="btn btn-lg px-4 btn-primary">
              Get Started
            </a>
          </div>
        </div>
      </section>
      
     
    </>
  )
}

export default About;