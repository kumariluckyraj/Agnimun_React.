import React from 'react';
import './style.css';
import './Schedule.css';
import { Link } from 'react-router-dom'

const Schedule = () => {
  return (
    <div>
       {/* Discount Banner */}
          <div
              className="container"
              
            >
              Early Bird Discount: Register by July 15th for 10% off!
              <a
                href="registration.html"
                className="register-link"
                
              >
                Register Now
              </a>
            </div>
            <section className="schedule-section">
  {/* Leave header OUTSIDE of the padded div */}
  <header>
    <div>
      <img
        src="https://img.icons8.com/?size=96&id=QTEnylAkMAkP&format=png"
        alt="Ag"
        className="hover-zoom1"
      />
      <span>AgniMundal</span>
    </div>

    <nav>
      <ul>
        <Link className="hover-zoom1" to="/home">Home</Link>
        <Link className="hover-zoom1" to="/about">About</Link>
        <Link className="hover-zoom1" to="/committees">Committees</Link>
        <Link className="hover-zoom1" to="/Schedule">Schedule</Link>
        <Link className="hover-zoom1" to="/signup">Registration</Link>
        <Link className="hover-zoom1" to="/login">LogIn</Link>
        <li className="hover-zoom1"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  {/* ✅ Apply padding only to this wrapper */}
  <div className="schedule-content">
    <h2>AgniMundal Schedule</h2>
    <p className="bold-paragraph">
      Here is the tentative schedule for AgniMUN. Please note that times and events are subject to change.
    </p>

    <table className="schedule-table">
      {/* table content */}
     
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Event</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>9:00 AM - 10:00 AM</td>
                            <td>Registration & Opening Ceremony</td>
                            <td>Main Hall</td>
                        </tr>
                        <tr>
                            <td>10:00 AM - 1:00 PM</td>
                            <td>Committee Session 1</td>
                            <td>Various Rooms</td>
                        </tr>
                        <tr>
                            <td>1:00 PM - 2:00 PM</td>
                            <td>Lunch Break</td>
                            <td>Cafeteria</td>
                        </tr>
                        <tr>
                            <td>2:00 PM - 5:00 PM</td>
                            <td>Committee Session 2</td>
                            <td>Various Rooms</td>
                        </tr>
                        <tr>
                            <td>5:00 PM - 6:00 PM</td>
                            <td>Social Event</td>
                            <td>Lounge</td>
                        </tr>
                        <tr>
                            <td>9:00 AM - 1:00 PM</td>
                            <td>Committee Session 3</td>
                            <td>Various Rooms</td>
                        </tr>
                        <tr>
                            <td>1:00 PM - 2:00 PM</td>
                            <td>Lunch Break</td>
                            <td>Cafeteria</td>
                        </tr>
                         <tr>
                            <td>2:00 PM - 4:00 PM</td>
                            <td>Committee Session 4</td>
                            <td>Various Rooms</td>
                        </tr>
                         <tr>
                            <td>4:00 PM - 5:00 PM</td>
                            <td>Closing Ceremony</td>
                            <td>Main Hall</td>
                        </tr>
                    </tbody>
                
    </table>

    <p className="highlight-note">
      Detailed committee schedules will be provided upon registration.
    </p>
  </div>
</section>

        
               
       

      
           

           
           
           
           
           
           
           
           
           
            <div className="sec6">
  <section
    id="contact"
    className="content"
   
  >
    <h2 >Contact</h2>
    <p>Email: contact@mun.com</p>
    <p>Phone: 123-456-7890</p>
  </section>

  <footer className="foot">
    <div id="last">
      <section id="quick-links">
        <ul>
          <h2>Quick Links</h2>
          <li><a href="Home.html">Home</a></li>
          <li><a href="partners.html">Partners</a></li>
          <li><a href="programs.html">Programs</a></li>
          <li><a href="Affiliate.html">Affiliate</a></li>
          <li><a href="Volunteer.html">Volunteer</a></li>
          <li><a href="Team.html">The Team</a></li>
          <li><a href="privacy-policy.html">Privacy Policy</a></li>
          <li><a href="Refund-policy.html">Refund Policy</a></li>
          <li><a href="Contact.html">Contact Us</a></li>
        </ul>
      </section>

      <div className="logo-social-container">
        <div className="logo-img">
          <img
            src="https://img.icons8.com/?size=96&id=QTEnylAkMAkP&format=png"
            alt="logo"
            className=""
           
          />
        </div>

        <section
          id="social-links"
         
        >
          <div>
            <a href="YOUR_GITHUB_LINK" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/?size=96&id=AZOZNnY73haj&format=png"
                alt="GitHub Logo"
                className=""
               
              />
            </a>
            <a href="YOUR_YOUTUBE_LINK" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/?size=96&id=13983&format=png"
                alt="YouTube Logo"
                className=""
               
              />
            </a>
            <a href="YOUR_INSTAGRAM_LINK" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/?size=160&id=BrU2BBoRXiWq&format=png"
                alt="Instagram Logo"
                className=""
                
              />
            </a>
            <a href="YOUR_LINKEDIN_LINK" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/?size=96&id=13930&format=png"
                alt="LinkedIn Logo"
                className=""
                
              />
            </a>
            <a href="YOUR_FACEBOOK_LINK" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/?size=96&id=118497&format=png"
                alt="Facebook Logo"
                className=""
              
              />
            </a>
          </div>
          <p >&copy; 2025 AgniMundal</p>
        </section>
      </div>
    </div>
  </footer>
</div>





    </div>
  )
}

export default Schedule
