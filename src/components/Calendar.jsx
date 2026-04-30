import { NavLink, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Calendar() {
  return (
    <>
   
    <section className="calendar mt-5 py-5 text-center bg-warning mb-4">
       <div className="container ">
      <h1 className="fw-bold">Event Calendar</h1>

    
      <div className="calendar-link d-flex flex-wrap justify-content-center gap-5">
        <NavLink
          aria-current="page" to=""
          className={({ isActive }) =>
            isActive ? "calendar-btn active-tab" : "calendar-btn"
          }
        end>
          Month View
        </NavLink>
        <NavLink
          to="week"
          className={({ isActive }) =>
            isActive ? "calendar-btn active-tab" : "calendar-btn"
          }
        >
          Week View
        </NavLink>
        <NavLink
          to="day"
          className={({ isActive }) =>
            isActive ? "calendar-btn active-tab" : "calendar-btn"
          }
        >
          Day View
        </NavLink>
      </div>

 </div>
    </section>

      <div className="calendar-view container mt-5 mb-5">
        <Outlet />
      </div>
    
   
    
    </>
  );
}

export default Calendar;