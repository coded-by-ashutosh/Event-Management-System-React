import { Link } from "react-router-dom";
import EventsList from "./EventsList";
import Header from "./Header";
import Footer from "./Footer";
import './Style.css';

const Events = () => {
  const upcomingEvents = EventsList.filter((event) => event.status === "upcoming");
  const pastEvents = EventsList.filter((event) => event.status === "past");
  return (
    <>
     

      {/* Page Header */}
      <section className="events py-5 text-center bg-warning mt-5">
        <div className="container">
          <h1 className="fw-bold">Our Events</h1>
          <p className="lead">Explore all upcoming and past events organized by us</p>
        </div>
      </section>

       {/* Upcoming Events */}
       <section className="up-coming-events container my-5">
         <div className="text-center mb-4">
           <h2 className="d-inline-flex align-items-center gap-2 text-primary fw-bold">
             <i className="fa-solid fa-calendar-days"></i> Upcoming Events
           </h2>
           <p className="text-black">Don’t miss out on what’s coming next</p>
         </div>

                 <div className="row justify-content-center g-4">
          {
            upcomingEvents.map((event) => {
              return (
                <div key={event.id} className="col-md-4 col-sm-6">
                  <div className="card custom-card h-100 shadow-sm">
                    <img src={event.img} className="card-img-top" alt={event.img} />
                    <div className="card-body">

                      <h5 className="card-title fw-semibold">{event.name}</h5>
                      {/* <p className="card-text">{event.date}</p>
                      <p className="card-text">{event.venue}</p> */}
                      <p className="card-text">{event.desc}</p>
                      <Link to={`/events/${event.id}`} className="btn btn-warning text-dark fw-semibold">View Details</Link>
                    </div>
                  </div>
                </div>
              )
            }
            )
          }
        </div>
      </section>

      {/* Past Events */}
      <section className="past-events container my-5">
        <div className="text-center mb-4">
          <h2 className="d-inline-flex align-items-center gap-2 text-secondary fw-bold">
            <i className="fa-solid fa-clock-rotate-left"></i> Past Events
          </h2>
          <p className="text-black">Relive our past moments and experiences</p>
        </div>

        <div className="row justify-content-center g-4">
          {pastEvents.map((event) => (
            <div key={event.id} className="col-md-4 col-sm-6">
              <div className="card custom-card h-100 shadow-sm">
                <img src={event.img} className="card-img-top" alt={event.name} />
                <div className="card-body">

                  <h5 className="card-title fw-semibold">{event.name}</h5>
                  <p className="card-text">{event.desc}</p>
                  <Link
                    to={`/events/${event.id}`}
                    className="btn btn-secondary text-dark fw-semibold"
                  >
                    See Highlights
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
   
    </>
  )
}

export default Events;


// import Header from "./Header";
// import Footer from "./Footer";
// import './Style.css';

// function Events() {
//     return (
//         <>
//             <Header />
//               {/* Page Header */}
//       <section className="events py-5 text-center bg-warning mt-5">
//         <div className="container">
//           <h1 className="fw-bold">Our Events</h1>
//           <p className="lead">Explore all upcoming and past events organized by us</p>
//         </div>
//       </section>

//       {/* Upcoming Events */}
//       <section className="up-coming-events container my-5">
//         <div className="text-center mb-4">
//           <h2 className="d-inline-flex align-items-center gap-2 text-primary fw-bold">
//             <i className="fa-solid fa-calendar-days"></i> Upcoming Events
//           </h2>
//           <p className="text-black">Don’t miss out on what’s coming next</p>
//         </div>

//         <div className="row justify-content-center g-4">
//           {/* Event Card 1 */}
//           <div className="col-md-4">
//             <div className="card custom-card h-100 shadow-sm">
//               <img
//                 src="public/images/card1.jpg"
//                 className="card-img-top"
//                 alt="Music Event"
//               />
//               <div className="card-body">
//                 <h5 className="card-title fw-semibold">Music Fest 2025</h5>
//                 <p className="card-text">
//                   Join the grand music fest with top artists performing live!
//                 </p>
//                 <a href="#" className="btn btn-warning">
//                   Register
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Event Card 2 */}
//           <div className="col-md-4">
//             <div className="card custom-card h-100 shadow-sm">
//               <img
//                 src="public/images/card2.jpg"
//                 className="card-img-top"
//                 alt="Hackathon"
//               />
//               <div className="card-body">
//                 <h5 className="card-title fw-semibold">Hackathon</h5>
//                 <p className="card-text">
//                   Showcase your coding skills and compete with the best.
//                 </p>
//                 <a href="#" className="btn btn-warning">
//                   Register
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Event Card 3 */}
//           <div className="col-md-4">
//             <div className="card custom-card h-100 shadow-sm">
//               <img
//                 src="public/images/card3.jpg"
//                 className="card-img-top"
//                 alt="Sports"
//               />
//               <div className="card-body">
//                 <h5 className="card-title fw-semibold">Sports Meet</h5>
//                 <p className="card-text">
//                   Participate in the annual sports event and win exciting prizes!
//                 </p>
//                 <a href="#" className="btn btn-warning">
//                   Register
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Past Events */}
//       <section className="past-events container my-5">
//         <div className="text-center mb-4">
//           <h2 className="d-inline-flex align-items-center gap-2 text-secondary fw-bold">
//             <i className="fa-solid fa-clock-rotate-left"></i> Past Events
//           </h2>
//           <p className="text-black">Highlights from our previous events</p>
//         </div>

//         <div className="row justify-content-center g-4">
//           {/* Past Event 1 */}
//           <div className="col-md-4">
//             <div className="card custom-card h-100 shadow-sm">
//               <img
//                 src="public/images/past1.jpg"
//                 className="card-img-top"
//                 alt="Tech Summit"
//               />
//               <div className="card-body">
//                 <h5 className="card-title fw-semibold">Tech Summit 2024</h5>
//                 <p className="card-text">
//                   A global conference with innovators and industry leaders.
//                 </p>
//                 <a href="#" className="btn btn-outline-light px-3">
//                   View Highlights
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Past Event 2 */}
//           <div className="col-md-4">
//             <div className="card custom-card h-100 shadow-sm">
//               <img
//                 src="public/images/past2.jpg"
//                 className="card-img-top"
//                 alt="Cultural Night"
//               />
//               <div className="card-body">
//                 <h5 className="card-title fw-semibold">Cultural Night 2024</h5>
//                 <p className="card-text">
//                   A colorful night of dance, drama, and music performances.
//                 </p>
//                 <a href="#" className="btn btn-outline-light px-3">
//                   View Highlights
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//             <Footer />
//         </>
//     )
// }

// export default Events;