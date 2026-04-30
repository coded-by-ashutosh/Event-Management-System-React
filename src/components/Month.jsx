import './Style.css';

function Month() {
  return (
    <>
      <section className="container my-5">
        <div className="text-center mb-4">
          <h3 className="d-inline-flex align-items-center gap-2 text-primary fw-bold">
            <i className="bi bi-calendar-month-fill"></i> This Month’s Events
          </h3>
        </div>

        <div className="list-group ">
          <div className="list-group-item">
            <h5>🎭 Drama Night - Week 1</h5>
            <p className="text-muted mb-0">Date: 3rd Oct | Venue: Auditorium</p>
          </div>

          <div className="list-group-item">
            <h5>🎤 Open Mic - Week 2</h5>
            <p className="text-muted mb-0">Date: 10th Oct | Venue: Cafeteria Stage</p>
          </div>

          <div className="list-group-item">
            <h5>🏆 Sports Meet - Week 3</h5>
            <p className="text-muted mb-0">Date: 17th Oct | Venue: Sports Ground</p>
          </div>

          <div className="list-group-item">
            <h5>🎓 Tech Seminar - Week 4</h5>
            <p className="text-muted mb-0">Date: 24th Oct | Venue: Conference Hall</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Month;