import './Style.css';

function Week() {
    return (
        <>
        <section className="container my-5">
       <div className="text-center mb-4">
  <h3 className=" d-inline-flex align-items-center gap-2 text-primary fw-bold">
    <i className="bi bi-calendar-week-fill"></i>This Week’s Events
    </h3>
    </div>

  <div className="list-group">
    <div className="list-group-item">
      <h5>🎵 Music Fest - Monday</h5>
      <p className="text-muted mb-0">Time: 6 PM | Venue: Main Hall</p>
    </div>
    <div className="list-group-item">
      <h5>💻 Hackathon - Wednesday</h5>
      <p className="text-muted mb-0">Time: 10 AM | Venue: Lab 3</p>
    </div>
  </div>
  
</section>
        </>
    )
}

export default Week;