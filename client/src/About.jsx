import React from 'react';
import './style.css';
import './about.css';
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
    

      {/* Discount Banner */}
      <div className="container">
        Early Bird Discount: Register by July 15th for 10% off!
        <a href="registration.html" className="register-link">
          Register Now
        </a>
      </div>
     
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
 
          
            <Link className='hover-zoom1' to="/home">Home</Link>
            <Link className='hover-zoom1' to="/about">About</Link>
            <Link className='hover-zoom1' to="/committees">Committees</Link>
           
            
             <Link className="hover-zoom1" to="/schedule">
                          Schedule</Link>
                          <Link className="hover-zoom1" to="/signup">
                          Registration</Link>
                           <Link className="hover-zoom1" to="/login">
                                                                LogIn</Link>
            <li className="hover-zoom1"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
   
      <section className="section-about">
       <div className="first">
        <h2>About AgniMundal</h2>
        <p style={{ textAlign: 'left' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel distinctio culpa repellat fugiat eaque totam ratione sunt praesentium quas mollitia excepturi officiis aliquid expedita iure, omnis quisquam deleniti. Harum culpa error architecto voluptatem ullam expedita rem doloremque perspiciatis blanditiis consequuntur.
            AgniMUN is a [Your Specific Type of MUN, e.g., "prestigious Model United Nations conference"] dedicated to fostering global awareness and diplomatic skills among students.
            [Add a paragraph detailing AgniMUN's mission, values, and goals. For example: "Our mission is to provide a platform for young leaders to engage in meaningful discussions on pressing global issues, develop their negotiation skills, and build lasting connections."]
        </p>

        <div className="why" style={{ marginTop: '10em' }}>
          <h3 style={{ color: 'rgb(248, 119, 21)' }}>Why Attend AgniMUN?</h3>
          
           <p> Develop public speaking and negotiation skills.</p>
           <p> Gain a deeper understanding of international relations.</p>
            <p>Network with students from diverse backgrounds.</p>
            <p>Engage in stimulating debates and discussions.</p>
            <p>Experience the thrill of diplomacy.</p>
          
        </div>
</div>

        <div className="second" style={{ textAlign: 'center', paddingTop: '' }}>
          <h2 style={{ color: 'rgb(8, 7, 6)', }}>Our History</h2>
          <p>
            Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, mollitia provident autem dignissimos aspernatur nisi repudiandae commodi temporibus. Ullam tempora numquam reprehenderit repellat qui ut aspernatur quaerat laboriosam enim reiciendis sed neque cupiditate rem deserunt optio aliquam delectus, voluptatum rerum ipsam dolorem dolores voluptates. Assumenda sit ipsum qui deleniti numquam quae incidunt animi saepe voluptas ad dicta non, ratione harum eligendi molestiae minus, explicabo eum similique nisi. Hic non eum quaerat doloribus ullam fugiat fugit doloremque voluptate alias reiciendis, sit ipsa fuga sed incidunt! Adipisci facere enim ex vitae consequatur eum quas nostrum mollitia minus maxime. Aperiam necessitatibus soluta nisi.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit consequuntur minima nostrum nobis repellendus impedit, quos consequatur iste! Quasi fuga, deserunt accusamus voluptatum, dicta nobis adipisci ipsa illo dignissimos delectus obcaecati assumenda animi vitae? Amet officiis atque doloremque iusto?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus suscipit perferendis earum officiis, quidem ipsum? Asperiores ullam velit esse necessitatibus nemo accusamus in atque?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt sed magnam autem libero, rem voluptates, eius recusandae temporibus enim similique vero in quidem voluptate fugiat velit. Fugit dolore numquam suscipit aliquid atque non dignissimos reprehenderit temporibus, ratione dolor eum odio quibusdam repudiandae ducimus. Qui cum quibusdam, labore quidem impedit voluptates.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas adipisci cumque magni aperiam velit dicta eligendi nulla, consectetur quas ea, assumenda architecto ducimus libero facere unde nostrum, officiis ipsam quos? Saepe enim ratione ea error, distinctio molestiae quis dolores at culpa iusto, vero facilis esse modi quas sit consequuntur? Est quam libero itaque atque consectetur hic molestiae incidunt molestias quis. Cumque rerum cum modi, magnam illum culpa. Sunt veniam nostrum est id error optio labore et dolorum, nemo libero cupiditate, rem non? Excepturi cum magnam quae. Ad, nesciunt? Ea pariatur nihil voluptatum sed, modi commodi aspernatur deleniti sunt reiciendis nam?</p>
         
        </div>

        <div className="three">
          <section className="team-section">
            <h2>Our Team</h2>
            <div className="team-row">
              <div className="team-member">
                <img src="https://plus.unsplash.com/premium_photo-1661432963180-11f554ff1ced?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwaW4lMjBmb3JtYWwlMjBhdHRpcmV8ZW58MHx8MHx8fDA%3D" alt="Member 1" />
                <h3>John Doe</h3>
                <p>President</p>
              </div>
              {/* ...other members */}
              <div class="team-member">
                    <img src="https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uJTIwaW4lMjBmb3JtYWwlMjBhdHRpcmV8ZW58MHx8MHx8fDA%3D" alt="Member 2"/>
                    <h3>Jane Smith</h3>
                    <p>Vice President</p>
                </div>
                <div class="team-member">
                    <img src="https://media.istockphoto.com/id/1163294201/photo/smiling-confident-businesswoman-posing-with-arms-folded.webp?a=1&b=1&s=612x612&w=0&k=20&c=dDmDW8ubpXHeS_yyE5OHEl8PBt9UQO7tRa41dBEV9V0=" alt="Member 3"/>
                    <h3>Alice Johnson</h3>
                    <p>Secretary</p>
                </div>
            </div>
    
            <div class="team-row">
                <div class="team-member">
                    <img src="https://media.istockphoto.com/id/613531310/photo/young-and-handsome.webp?a=1&b=1&s=612x612&w=0&k=20&c=eE2fa0uPgp4Gd5Kned1s7vKf_w00ux9_o9pEtLh6z_c=" alt="Member 4"/>
                    <h3>Robert Williams</h3>
                    <p>Treasurer</p>
                </div>
                <div class="team-member">
                    <img src="https://media.istockphoto.com/id/1426587191/photo/confident-happy-and-smiling-business-woman-standing-with-her-arms-crossed-while-in-an-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=NyYtlLswS5kHU27_ZVgQ6WdI9kZquyLLt3x5ga8bEk8=" alt="Member 5"/>
                    <h3>Emily Brown</h3>
                    <p>Head of Logistics</p>
                </div>
                <div class="team-member">
                    <img src="https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbiUyMGluJTIwZm9ybWFsJTIwYXR0aXJlfGVufDB8fDB8fHww" alt="Member 6"/>
                    <h3>Michael Davis</h3>
                    <p>Head of Communications</p>
                </div>
            </div>
    
            <div class="team-row">
                <div class="team-member">
                    <img src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww" alt="Member 7"/>
                    <h3>Olivia Wilson</h3>
                    <p>Committee Director</p>
                </div>
                <div class="team-member">
                    <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww" alt="Member 8"/>
                    <h3>William Garcia</h3>
                    <p>Technology Lead</p>
                </div>
                <div class="team-member">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww" alt="Member 9"/>
                    <h3>Sophia Rodriguez</h3>
                    <p>Delegate Relations</p>
                </div>
            </div>
          </section>
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
    </>
  );
};

export default About;
