import Header from "./Header";
import Footer from "./Footer";
import './Style.css';


function Home (){
    return (
        <>
     {/* <Header /> */}
       <div className="home">

      {/* Hero Section */}
      <section className="hero d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="hero-title">Welcome to HubNest</h1>
        <p className="hero-subtitle">
          Your one-stop platform to discover and manage events effortlessly.
        </p>
        <a href="/events" className="btn btn-warning mt-3">Explore Events</a>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section container my-5">
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="public/images/slide1.jpg" className="d-block w-100 rounded" alt="Event 1" />
            </div>
            <div className="carousel-item">
              <img src="public/images/slide2.jpg" className="d-block w-100 rounded" alt="Event 2" />
            </div>
            <div className="carousel-item">
              <img src="public/images/slide3.jpg" className="d-block w-100 rounded" alt="Event 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container my-5">
  {/* Section Heading */}
  <div className="text-center mb-4">
    <h2 className="d-inline-flex align-items-center gap-2 text-primary fw-bold">
      <i className="fa-solid fa-calendar-days"></i> Upcoming Events
    </h2>
  </div>

  {/* Cards */}
  <div className="row justify-content-center g-4">
    <div className="col-md-4">
      <div className="card custom-card h-100 shadow-sm">
        <img src="public/images/card1.jpg" className="card-img-top" alt="Music Event" />
        <div className="card-body">
          <h5 className="card-title fw-semibold">Music Fest 2025</h5>
          <p className="card-text">Join the grand music fest with top artists performing live!</p>
          <a href="#" className="btn btn-warning">Register</a>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card custom-card h-100 shadow-sm">
        <img src="public/images/card2.jpg" className="card-img-top" alt="Hackathon" />
        <div className="card-body">
          <h5 className="card-title fw-semibold">Hackathon</h5>
          <p className="card-text">Showcase your coding skills and compete with the best.</p>
          <a href="#" className="btn btn-warning">Register</a>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card custom-card h-100 shadow-sm">
        <img src="public/images/card3.jpg" className="card-img-top" alt="Sports" />
        <div className="card-body">
          <h5 className="card-title fw-semibold">Sports Meet</h5>
          <p className="card-text">Participate in the annual sports event and win exciting prizes!</p>
          <a href="#" className="btn btn-warning">Register</a>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="container my-5 text-center">
        
  {/* Section Heading */}
  <div className="mb-4">
    <h2 className="d-inline-flex align-items-center gap-3 text-primary fw-bold">
      <i className="fa-solid fa-compass"></i> Explore Hub
    </h2>
  </div>

  {/* Cards */}
  <div className="row g-4">
    <div className="col-md-3">
      <div className="quick-link p-4 rounded shadow-sm border border-light h-100 hover-shadow">
        <i className="fa-solid fa-calendar fa-2x mb-3"></i>
        <h5 className="fw-semibold">Calendar</h5>
        <p className="">Stay updated with upcoming events in one place.</p>
      </div>
    </div>
    <div className="col-md-3">
      <div className="quick-link p-4 rounded shadow-sm border border-light h-100 hover-shadow">
        <i className="fa-solid fa-bullhorn fa-2x text-danger mb-3"></i>
        <h5 className="fw-semibold">Announcements</h5>
        <p className="">Check the latest updates and news from clubs.</p>
      </div>
    </div>
    <div className="col-md-3">
      <div className="quick-link p-4 rounded shadow-sm border border-light h-100 hover-shadow">
        <i className="fa-solid fa-users fa-2x text-success mb-3"></i>
        <h5 className="fw-semibold">Clubs</h5>
        <p className="">Explore all registered clubs and their events.</p>
      </div>
    </div>
    <div className="col-md-3">
      <div className="quick-link p-4 rounded shadow-sm border border-light h-100 hover-shadow">
        <i className="fa-solid fa-ticket fa-2x text-primary mb-3"></i>
        <h5 className="fw-semibold">Tickets</h5>
        <p className="">Book and manage your event tickets with ease.</p>
      </div>
    </div>
  </div>
</section>


    </div>

     {/* <Footer/> */}
        </>
    )
}

export default Home;