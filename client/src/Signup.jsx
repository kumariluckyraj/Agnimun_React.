import { useState } from 'react';
import React from 'react'
import { Link } from 'react-router-dom'
import './App.css' // Import the CSS file
import './style.css';
import './registration.css'
import { FaEye, FaEyeSlash } from "react-icons/fa";

import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [committee,setCommittee] = useState()
    const [experience,setExperience] = useState()
    const [passwordError, setPasswordError] = useState('');
    const [formError, setFormError] = useState('');
    const [showPassword, setShowPassword] = useState(false);



  


    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
      
        // Password validation
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
      
        // Field validation
        if (!name || !email || !password || !committee || !experience) {
          setFormError('Please fill in all the fields.');
          return;
        }
      
        if (!passwordRegex.test(password)) {
          setPasswordError(
            "Password must be at least 8 characters long and include a number and a special character (!@#$%^&*)."
          );
          return;
        }
      
        // Clear errors if all is good
        setFormError('');
        setPasswordError('');
      
        axios
          .post(`${process.env.REACT_APP_BACKEND_URL}/register`, {
            name,
            email,
            password,
            committee,
            experience,
          })
          .then((result) => {
            console.log(result);
            navigate("/login", { state: { registered: true } });
          })
          .catch((err) => console.log(err));
      };
      


  return (
   <>
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



     <header
       
      >
        <div>
          <img
            src="https://img.icons8.com/?size=96&id=QTEnylAkMAkP&format=png"
            alt="Ag"
            className="hover-zoom1"
           
          />
          <span>AgniMundal</span>
        </div>

        <nav >
          <ul >
            <Link className='hover-zoom1' to="/home">Home</Link>
             <Link className='hover-zoom1' to="/about">About</Link>
            <Link className="hover-zoom1" to="/committees">
              Committees</Link>
          
           
           
            <Link className="hover-zoom1" to="/schedule">
            Schedule</Link>
            <Link className="hover-zoom1" to="/signup">
            Registration</Link>
             <Link className="hover-zoom1" to="/login">
                                                  LogIn</Link>
          
            
            <li className="hover-zoom1">
              <a href="#contact" >Contact</a>
            </li>
          </ul>
        </nav>
      </header>





    <div className="registration-section">
      <div className="signup-box">
        <h2>AgniMundal Registration</h2>
        <p>Please fill out the form below to register for AgniMundal.</p>
        <form className="signup-form" onSubmit={handleSubmit}>
       
          <div className="form-group">
            <label htmlFor="name">
              Full Name:
            </label>
            <input type="text" placeholder="Enter Name" autoComplete="off" name="name"   id="name" 
            onChange={(e)=> setName(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email Address:
            </label>
            <input type="email" placeholder="Enter Email" autoComplete="off" name="email" id="email" 
             onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div className="form-group" style={{ position: 'relative' }}>
  <label htmlFor="password">Password:</label>
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Enter Password"
    autoComplete="off"
    name="password"
    id="password"
    onChange={(e) => {
      setPassword(e.target.value);
      setPasswordError('');
    }}
    style={{ paddingRight: "40px" }}
  />
  <span
    onClick={() => setShowPassword(!showPassword)}
    style={{
      position: "absolute",
      top: "42px",
      right: "-23em",
      cursor: "pointer",
      color: "#555"
    }}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
  {passwordError && (
    <p style={{ color: "red", fontSize: "0.9rem", marginTop: "4px" }}>
      {passwordError}
    </p>
  )}
</div>


          <div className="form-group">
  <label htmlFor="committee">
    Committee Preference:
  </label>
  <select
    id="committee"
    name="committee"
    required
    onChange={(e) => setCommittee(e.target.value)}
  >
    <option value="">Select a Committee</option>
    <option value="GA">General Assembly (GA)</option>
    <option value="SC">Security Council (SC)</option>
    <option value="ECOSOC">Economic and Social Council (ECOSOC)</option>
    <option value="UNHRC">UN Human Rights Council (UNHRC)</option>
    <option value="UNEP">UN Environmental Programme (UNEP)</option>
    <option value="DISEC">Disarmament and International Security Committee (DISEC)</option>
    <option value="WHO">World Health Organization (WHO)</option>
  </select>
</div>

          <div className="form-group">
            <label htmlFor="experience">
              MUN Experience:
            </label>
            <input type="name" placeholder="Enter Experience:" autoComplete="off" name="experience" id="experience" 
             onChange={(e)=> setExperience(e.target.value)}/>
          </div>
          {formError && (
  <p style={{ color: "red", fontSize: "0.95rem", marginBottom: "10px" }}>
    {formError}
  </p>
)}

          
          <button type="submit" className="submit-btn">Register Now</button>
        </form>
        <p className="login-text">Already have an account?</p>
        <Link to="/login" className="login-link">Login</Link>
      </div>
    </div>

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
            className="hover-zoom"
           
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
                className="hover-zoom"
               
              />
            </a>
            <a href="YOUR_YOUTUBE_LINK" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/?size=96&id=13983&format=png"
                alt="YouTube Logo"
                className="hover-zoom"
               
              />
            </a>
            <a href="YOUR_INSTAGRAM_LINK" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/?size=160&id=BrU2BBoRXiWq&format=png"
                alt="Instagram Logo"
                className="hover-zoom"
                
              />
            </a>
            <a href="YOUR_LINKEDIN_LINK" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/?size=96&id=13930&format=png"
                alt="LinkedIn Logo"
                className="hover-zoom"
                
              />
            </a>
            <a href="YOUR_FACEBOOK_LINK" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/?size=96&id=118497&format=png"
                alt="Facebook Logo"
                className="hover-zoom"
              
              />
            </a>
          </div>
          <p >&copy; 2025 AgniMundal</p>
        </section>
      </div>
    </div>
  </footer>
</div>

    </>
    
  )
}

export default Signup;

