import React, { useState, useEffect } from 'react';


import { Link } from 'react-router-dom'
import './App.css'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
   const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.registered) {
      setMessage("You have registered successfully. Please login.");
    }
  }, [location.state]);
  


  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    
    axios.post(`https://demo1-1-pqvz.onrender.com/login`, { email, password })
        .then(result => {
        console.log(result);
        if (result.data === "Success") {
            navigate('/home', { state: { loggedIn: true } });

        } else {
          setError("Invalid credentials.");
        }
      })
      .catch(err => {
        console.log(err);
        setError("An error occurred. Please try again.");
      });
  };

  const handleForgotPassword = () => {
    if (!email) {
      setError("Please enter your email to reset password.");
      return;
    }

    axios.post('http://localhost:3001/forgot-password', { email })
      .then(res => {
        setMessage("Password reset link sent to your email.");
        setError('');
      })
      .catch(err => {
        console.error(err);
        setError("Failed to send reset email. Make sure the email is registered.");
      });
  };




  return (<>
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

     



      <div className="signup-container">
        <div className="signup-box">
          <h2>Login</h2>
          <form className="signup-form" onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green',fontWeight:'bold' }}>{message}</p>}

            <div className="form-group">
              <label htmlFor="email"><strong>Email</strong></label>
              <input
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group" style={{ position: 'relative' }}>
              <label htmlFor="password"><strong>Password</strong></label>
              <input
               
               type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                autoComplete="off"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            </div>

            <button type="submit" className="submit-btn">Login</button>
          </form>

          <p style={{ cursor: 'pointer', color: 'white' }} onClick={handleForgotPassword}>
            Forgot password?
          </p>

          <p className="login-text">Don't have an account?</p>
          <Link to="/signup" className="login-link">Register</Link>
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

export default Login
