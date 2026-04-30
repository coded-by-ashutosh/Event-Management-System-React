import Header from "./Header";
import Footer from "./Footer";
import './Style.css';

function PageNotFound() {
  return (
    <>
    
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center text-light mt-5"
        style={{
          minHeight: "100vh",
          backgroundImage: "url('/images/page404.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingTop: "80px",
        }}
      >
        <div
          className="fade-in bg-dark bg-opacity-50 p-3 p-sm-4 rounded shadow-sm mx-2"
          style={{
            maxWidth: "500px",
            width: "90%",
          }}
        >
          <h1 className="display-3 fw-bold text-warning mb-2">404</h1>
          <h2 className="fs-4 fs-md-3 mb-2">Oops! Page Not Found</h2>
          <p className="text-light mb-3 small small-md">
            The page you’re looking for might have been moved, deleted,
            or maybe it never existed.
          </p>
          <a href="/" className="btn btn-warning fw-semibold mt-2">
            <i className="fa-solid fa-arrow-left me-2"></i> Go Home
          </a>
        </div>
      </div>
      
    </>
  );
}

export default PageNotFound;