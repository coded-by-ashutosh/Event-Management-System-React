import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Events from './components/Events.jsx'
import Calendar from './components/Calendar.jsx'
import Month from './components/Month.jsx'
import Week from './components/Week.jsx'
import Day from './components/Day.jsx'
import PageNotFound from './components/PageNotFound.jsx'
import EventsDetails from './components/EventsDetails.jsx'
import Login from "./components/Login.jsx"
import Dashboard from "./components/Dashboard.jsx"
import Profile from "./components/Profile.jsx"



function App() {
  const [user, setUser] = useState(null);
  console.log("Current User:", user);

  return (
    <>
      <BrowserRouter>
     <Header user={user}/>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/events/:eventID" element={<EventsDetails />}></Route>

          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route
            path="/dashboard"
            element={
              user ? <Dashboard user={user} /> : <Login setUser={setUser} />
            }
          />
          <Route
            path="/profile"
            element={
              user ? <Profile user={user} /> : <Login setUser={setUser} />
            }
          />


          <Route path="/calendar" element={<Calendar />}>
            <Route index element={<Month />} />
            <Route path="week" element={<Week />} />
            <Route path="day" element={<Day />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  )
}

export default App;