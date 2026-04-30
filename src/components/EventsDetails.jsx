import { useParams, Link } from "react-router-dom";
import EventsList from "./EventsList";
import Header from "./Header";
import Footer from "./Footer";

const EventsDetails = () => {
  const { eventID } = useParams();
  const allEvents = EventsList;
  console.log(eventID);

  const event = allEvents.find((e) => e.id === Number(eventID));

  return (
    <>
    
      <section className="up-coming-events container my-5">
        <div className="row justify-content-center g-4">
          <div key={event.id} className="col-md-4 col-sm-6">
            <div className="card custom-card h-100 shadow-sm">
              <img src={event.img} className="card-img-top" alt={event.img} />

              <div className="card-body">

                <h5 className="card-title fw-semibold text-center" style={{ textDecoration: "underline" }}>{event.name}</h5>
                <p className="card-text">Timing : {event.date}</p>
                <p className="card-text">Venue : {event.venue}</p>
                <p className="card-text">Description : {event.desc}</p>

                {event.status === "past" && (
                  <>
                    <p className="card-text">Highlights : {event.highlights}</p>
                    <p className="card-text">Outcome : {event.outcome}</p>
                  </>
                )}
                
                {event.status === "upcoming" ? (
                  <Link to="/join-event" className="btn btn-warning text-dark fw-semibold">Join Event</Link>
                ) : null}

              </div>
            </div>
          </div>
        </div>
      </section>
  
    </>
  )
}

export default EventsDetails;