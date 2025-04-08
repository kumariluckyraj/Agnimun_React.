import React from "react";
import './style.css';
import './home.css';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";

const Home = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.state?.loggedIn) {
          alert("You have logged in successfully!");
        }
      }, [location.state]);
      
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

<div className="sec1">

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

        <nav className="nav">
          <ul >
            
            <Link className='hover-zoom1' to="/home">Home</Link>
            <Link className='hover-zoom1' to="/about">About</Link>
            <Link className="hover-zoom1" to="/committees">
              Committees</Link>
          
              
              <Link className="hover-zoom1" to="/Schedule">
              Schedule</Link>
              <Link className="hover-zoom1" to="/signup">
              Registration</Link>
           
                 <Link className="hover-zoom1" to="/lognin">
                                          LogIn</Link>
             <li className="hover-zoom1"  ><a href="#contact">Contact</a></li>
          
          </ul>
        </nav>
      </header>

      <div>
 <section id="home" className="hero" style={{
  lineHeight: 1,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  marginTop:'4em'
}}
 >
  <h1  style={{ textAlign: "center" }}
  >Welcome to Our <span style={{color:'rgb(248, 119, 21)'}}>MUN</span><br/>Conference</h1>
  <p  style={{ textAlign: "center",fontSize:'1.2em', fontWeight:'bold'}}
  >Forging Resolutions in the Fire of Debate</p>
  <Link to="/signup" id="registerButton" >Register Now</Link>
  
</section>
<section id="new-section" style={{ textAlign: "center",marginRight:'2em',marginTop:'4em',fontSize:'1.2em',fontWeight:'bold' }}
>
  <p>Experience <span style={{ color: "rgb(248, 119, 21)", fontWeight: "bold" }}
  >AgniMundal</span>,where debate fuels global solutions.<br/> Hone skills, make connections, and shape the future.<br/> Are you ready to ignite change?</p>
</section>
</div>
</div>
<div class="footer" >
 

<footer style={{  width: '84em', }}>
  <section id="sponsors" style={{ textAlign: "center", backgroundColor: "#f0f0f0" }}>
    <h2 style={{ fontSize: "1.5em", marginBottom: "5px", color: "rgb(248, 119, 21)",fontWeight:"bold" }}>Our Sponsors</h2>
    
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px" }}>
      <div style={{ textAlign: "center", borderRight: "1px solid #ccc", padding: "5px 10px" }}>
        <img src="" alt="Company A Logo" className="hover-zoom" style={{ maxHeight: "100px" }} />
        <p>Company A</p>
      </div>
      <div style={{ textAlign: "center", borderRight: "1px solid #ccc", padding: "5px 10px" }}

      >
        <img src="" alt="Company B Logo"className="hover-zoom" style={{ maxHeight: "100px" }}
        />
        <p >Company B</p>
      </div>
      <div style={{ textAlign: "center", borderRight: "1px solid #ccc", padding: "5px 10px" }}

      >
        <img src="" className="hover-zoom" style={{ maxHeight: "100px" }}
        />
        <p >Company C</p>
      </div>
      <div  style={{ textAlign: "center", borderRight: "1px solid #ccc", padding: "5px 10px" }}
 >
        <img src="" alt="Company D Logo" className="hover-zoom"  style={{ maxHeight: "100px" }}
        />
        <p >Company D</p>
      </div>
      <div style={{ textAlign: "center", borderRight: "1px solid #ccc", padding: "5px 10px" }}
 >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-kj4HZmgIyuvjL7BCOJxnY_Y4manlE3FR3Q&sg" alt="Company E Logo" className="hover-zoom" style={{ maxHeight: "100px" }}
 />
        <p >Company E</p>
      </div>
      <div style={{ textAlign: "center", borderRight: "1px solid #ccc", padding: "5px 10px" }}
 >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-1K4zFXxhNi5znq1KTkBtRkl7eJSGc04cgA&s" alt="Company F Logo" className="hover-zoom" style={{ maxHeight: "100px" }}
 />
        <p >Company F</p>
      </div>
      <div style={{ textAlign: "center", borderRight: "1px solid #ccc", padding: "5px 10px" }}
      >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrauc-xnN1L1GsAnmX3Zwftvyxm87BwnV9cQ&s" alt="Company G Logo" className="hover-zoom" style={{ maxHeight: "100px" }}
 />
        <p >Company G</p>
      </div>
      <div style={{ textAlign: "center", borderRight: "1px solid #ccc", padding: "5px 10px" }}
      >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Xc5IcSCxAxrhvb2o9Z0Y6OluzJdXu-t8PA&s" alt="Company H Logo" className="hover-zoom" style={{ maxHeight: "100px" }}
        />
        
        <p >Company H</p>
      </div>
    </div>
  </section>
</footer>
 
 </div>

 <section id="events" style={{ textAlign: "center", marginTop: "3.2em",marginBottom:"-1em" ,backgroundColor:"grey",width:"84em",padding:'4em'}}>
  <h2 style={{ color: "rgb(248, 119, 21)", fontWeight: "bold", fontSize: "1.8em", marginBottom: "20px" }}>
    Featured Events
  </h2>

  <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center",color:"black" }}>
  <div className="event-card">
  <h3>🏛️ Opening Ceremony</h3>
  <p><strong>Time:</strong> 10:00 AM – 11:30 AM</p>
  <p>
    The AgniMundal Opening Ceremony sets the tone for the entire conference, celebrating diplomacy, youth leadership, and the spirit of collaboration. 
    Delegates will be welcomed by the Secretariat and faculty coordinators in a vibrant inaugural session.
  </p>
  <ul style={{ textAlign: "left", paddingLeft: "1.5rem" }}>
    <li>🎤 Inspiring keynote address by a renowned diplomat or policy expert</li>
    <li>🌏 MUN Oath – All delegates take the official Model UN oath</li>
    <li>🎭 Cultural performances by students and guest artists</li>
    <li>📸 Photo ops & press coverage for delegates and teams</li>
    <li>🎉 Ice-breaker session to help delegates connect</li>
  </ul>
  <p>
    Dress code: Formal Western or Indian Traditional. Please be seated 15 minutes before the session begins.
  </p>
</div>

<div className="event-card">
  <h3>🧭 Committee Sessions</h3>
  <p><strong>Time:</strong> 12:00 PM – 5:00 PM (Multiple Rounds Over 2 Days)</p>
  <p>
    The heart of AgniMundal, our committee sessions simulate real-world UN bodies and international crises. Delegates will debate, draft resolutions, and collaborate to address pressing global challenges.
  </p>
  <ul style={{ textAlign: "left", paddingLeft: "1.5rem" }}>
    <li>🌐 Simulated committees like UNGA, UNSC, WHO, ECOSOC, and crisis cabinets</li>
    <li>📄 Position paper presentations and moderated caucuses</li>
    <li>🔄 Unmoderated caucuses to encourage negotiations and alliances</li>
    <li>📝 Drafting and voting on working papers and resolutions</li>
    <li>🏆 Awards for Best Delegate, Honorable Mention & Special Mention</li>
  </ul>
  <p>
    Chairs will be monitoring for diplomacy, research depth, leadership, and creativity. Delegates are expected to come well-prepared with country positions and background guides.
  </p>
  <p><strong>Note:</strong> Sessions will break for lunch and include short refreshment breaks.</p>
</div>


<div className="event-card">
  <h3>🔥 Crisis Simulation</h3>
  <p><strong>Time:</strong> 7:00 PM – 9:30 PM</p>
  <p>
    The adrenaline-pumping **Crisis Simulation** is designed for experienced delegates who thrive under pressure. This dynamic, fast-paced session places participants in high-stakes scenarios requiring rapid decision-making, strategic negotiation, and real-time diplomacy.
  </p>
  <ul style={{ textAlign: "left", paddingLeft: "1.5rem" }}>
    <li>⚠️ Unfolding situations with live updates and breaking news</li>
    <li>🧠 Delegates act as world leaders, diplomats, or secret operatives</li>
    <li>💣 Multi-layered crises — political, economic, military, or environmental</li>
    <li>🗣️ Quick directives, backroom deals, and media interactions</li>
    <li>🎭 Surprise twists introduced by the Crisis Directors to test adaptability</li>
  </ul>
  <p>
    Crisis sessions reward creativity, leadership, and adaptability. Delegates must balance personal objectives with broader committee goals to succeed in this high-stakes simulation.
  </p>
  <p><strong>Warning:</strong> This is not for the faint of heart — expect rapid developments and no downtime!</p>
</div>


<div className="event-card">
  <h3>🎉 Social Night</h3>
  <p><strong>Time:</strong> 10:00 PM – Midnight</p>
  <p>
    After a day of intense diplomacy and debate, it's time to unwind and celebrate at our electrifying <strong>Social Night</strong>. This is where memories are made, friendships are forged, and the spirit of AgniMUN truly shines beyond the committee walls.
  </p>
  <ul style={{ textAlign: "left", paddingLeft: "1.5rem" }}>
    <li>🎶 Live DJ with a curated playlist to keep the energy high</li>
    <li>🪩 Dance floor for delegates to let loose and vibe</li>
    <li>🍽️ Mocktails, snacks, and a chill lounge corner</li>
    <li>📸 Photo booth to capture the glam and memories</li>
    <li>🎭 Theme-based dress code & mini games for social interaction</li>
  </ul>
  <p>
    Whether you're celebrating a successful resolution or just want to relax and meet fellow delegates in a more casual setting, Social Night is your moment to shine. Come dressed to impress and get ready to dance the night away!
  </p>
  <p><strong>Note:</strong> Dress code: Smart Casual or Theme-Based (TBA)</p>
</div>


<div className="event-card">
  <h3>🏆 Award Ceremony</h3>
  <p><strong>Time:</strong> 11:00 AM – 12:30 PM</p>
  <p>
    The <strong>Award Ceremony</strong> marks the grand finale of AgniMUN — a moment to honor the dedication, intellect, and leadership shown throughout the conference. Delegates gather one last time, not as competitors, but as a united community that debated, negotiated, and grew together.
  </p>
  <ul style={{ textAlign: "left", paddingLeft: "1.5rem" }}>
    <li>🎓 <strong>Best Delegate, High Commendation, and Special Mentions</strong> awarded per committee</li>
    <li>📝 Feedback and reflections from Executive Board members</li>
    <li>🏅 Recognition of outstanding performances in crisis simulations and diplomacy</li>
    <li>📸 Group photos and certificate distribution</li>
    <li>🎤 Closing words from the Secretariat and Organizing Team</li>
  </ul>
  <p>
    This ceremony isn't just about accolades — it's a celebration of the effort, courage, and diplomacy displayed by every participant. Whether you're taking home a trophy or priceless memories, you'll leave inspired, empowered, and connected.
  </p>
  <p><strong>Tip:</strong> Stay till the end — the final group photo is one for the memories!</p>
</div>

  </div>
</section>


<div className="sec3">
  <section id="news" className="content" style={{marginLeft:'4em',paddingTop:'4em'}}>
    <h2>Blog</h2>

    <div className="news-item1">
        <h3>AgniMundal 2025 Registration Opens!</h3>
        <p>Posted on: [Date]</p>
        <p>We are excited to announce that registration for AgniMundal 2025 is now open!...</p>
        <a href="blog-post1.html">Read More</a>
    </div>
    

    <div className="news-item2">
        <h3>Keynote Speaker Announced</h3>
        <p>Posted on: [Date]</p>
        <p>We are thrilled to welcome [Name] as our keynote speaker for Agnimun 2025...</p>
        <a href="blog-post2.html">Read More</a>
    </div>

    </section>
    </div>



<div className="sec4">
    <section id="logistics" class="content" style={{marginLeft:'4em',paddingTop:'4em'}}>
      <h2>Logistics</h2>
  
      <div className="">
          <h3>Venue</h3>
          <p>[Venue Name], [Venue Address]</p>
          <p>[Additional venue details, e.g., map link, accessibility info]</p>
      </div>
  
      <div className="logistics-item">
          <h3>Accommodation</h3>
          <p>[Hotel Name(s) and Location(s)] (Optional)</p>
          <p>[Details about recommended hotels, special rates, etc.]</p>
      </div>
  
      <div className="logistics-item">
          <h3>Meals</h3>
          <p>[Meal plan details, e.g., vegetarian/non-vegetarian options]</p>
          <p>[Information about provided meals and nearby restaurants]</p>
      </div>
  
     
  
      <div className="logistics-item">
          <h3>Visa Information (If Applicable)</h3>
          <p>[Visa requirements and application process]</p>
          <p>[Links to relevant visa websites]</p>
      </div>
  
     
  </section>
  


</div>



<div className="sec5">
  <section id="gallery" className="content">
    <h2 style={{paddingLeft:"20em",paddingTop:"2em"}}>Gallery</h2>
    <div className="gallery-container">
      <div className="gallery-row">
        <div className="gallery-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNGxP-UdhDgtr-DrjkmQZ9DgU9Q0MwwJCp2Q&s" alt="Gallery Image 9" className="hover-zoom" />
        </div>
        <div className="gallery-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo45l9nopncpKPX69MKBuJk9-KCDZbj80hLw&s" alt="Gallery Image 10" className="hover-zoom" />
        </div>
        <div className="gallery-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5AxQEBeqHTfsEIGR0j44O6roh18xSwK25Tw&s" alt="Gallery Image 12" className="hover-zoom" />
        </div>
        <div className="gallery-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5AxQEBeqHTfsEIGR0j44O6roh18xSwK25Tw&s" alt="Gallery Image 12" className="hover-zoom" />
        </div>
        <div className="gallery-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5AxQEBeqHTfsEIGR0j44O6roh18xSwK25Tw&s" alt="Gallery Image 12" className="hover-zoom" />
        </div>
        <div className="gallery-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5AxQEBeqHTfsEIGR0j44O6roh18xSwK25Tw&s" alt="Gallery Image 12" className="hover-zoom" />
        </div>
      </div>
    </div>
  </section>
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

    </>
  
  

 
 
  );
};

export default Home;