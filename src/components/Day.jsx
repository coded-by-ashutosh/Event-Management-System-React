function Day() {
  return (
    <>
      <section className="container my-5">
        <div className="text-center mb-4">
          <h3 className="d-inline-flex align-items-center gap-2 text-primary fw-bold">
            <i className="bi bi-calendar2-day-fill"></i> Today’s Schedule
          </h3>
        </div>

        <div className="card mx-auto shadow-sm" style={{ maxWidth: "400px" }}>
          <div className="card-body text-center">
            <h5 className="card-title mb-4 fw-semibold">
              🎤 Workshop on Web Development
            </h5>
            <p>Time: 11:00 AM - 1:00 PM</p>
            <p>Location: Seminar Hall</p>
            <button className="btn btn-warning btn-sm">
              View Details
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Day;