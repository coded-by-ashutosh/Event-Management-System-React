import Header from "./Header";
import Footer from "./Footer";
import './Style.css';

function Contact() {
  return (
    <>
     
      {/* Professional Contact Us Page */}
      <section className="py-5 mt-5" style={{ background: 'linear-gradient(135deg, #1a1a1a, #2c2c2c)', color: 'white' }}>
        <div className="container">

          {/* Header */}
          <div className="text-center mb-5">
            <h2 className="text-warning fw-bold mb-3">Contact Us</h2>
            <p className="lead text-white-75">
              We'd love to hear from you! Fill out the form below or find our location on the map.
            </p>
          </div>

          <div className="row g-5 align-items-stretch">

            {/* Contact Form */}
            <div className="col-lg-6">
              <form className="bg-white text-dark p-5 rounded-4 shadow-lg h-100">

                <div className="form-floating mb-4">
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                  <label htmlFor="name">Your Name</label>
                </div>

                <div className="form-floating mb-4">
                  <input type="email" className="form-control" id="email" placeholder="Your Email" />
                  <label htmlFor="email">Your Email</label>
                </div>

                <div className="form-floating mb-4">
                  <input type="text" className="form-control" id="subject" placeholder="Subject" />
                  <label htmlFor="subject">Subject</label>
                </div>

                <div className="form-floating mb-4">
                  <textarea className="form-control" id="message" placeholder="Message" style={{ height: '150px' }}></textarea>
                  <label htmlFor="message">Message</label>
                </div>

                <button type="submit" className="btn btn-warning btn-lg w-100 fw-bold mt-4">Send Message</button>

              </form>
            </div>

            {/* Map & Location */}
            <div className="col-lg-6 d-flex flex-column justify-content-between">
              <div className="rounded-4 shadow-lg overflow-hidden mb-4" style={{ height: '400px' }}>
                <iframe
                  title="ECMS Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8397603134!2d77.068897!3d28.527135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d9e9b4f2c1b%3A0x8b8a0c6d5f0c3a0a!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1698312345678!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="bg-white text-dark p-4 rounded-4 shadow-lg">
                <h5 className="fw-bold mb-3">Our Location</h5>
                <p className="mb-2"><i className="fa-solid fa-location-dot me-2 text-warning"></i>New Delhi, India</p>
                <p className="mb-2"><i className="fa-solid fa-phone me-2 text-warning"></i>+91 9876543210</p>
                <p className="mb-0"><i className="fa-solid fa-envelope me-2 text-warning"></i>support@ecms.com</p>
              </div>
            </div>

          </div>

        </div>
      </section>


      
    </>
  )
}

export default Contact;