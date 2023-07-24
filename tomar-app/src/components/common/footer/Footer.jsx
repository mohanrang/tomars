import React from "react";
import { blog } from "../../../dummydata";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>TOMAR'S</h1>
            <span>CHANDRANAGAR, ITANAGAR</span>
            <p>INVITE YOU TO JOIN FOR TRUE STUDY</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li> <Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Services</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
            <li><Link to="/contact">Contact Us</Link></li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li><Link to="/courses">Feedbacks</Link></li>
            </ul>
          </div>
          
          <div className='box last'>
            <h3>Contact</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                2cd Floor, Roan Apartment,<br /> Chandranagar, Itanagar, 791113.
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 9862639179
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                rps34300@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2023 All rights reserved | Thank You
        </p>
      </div>
    </>
  )
}

export default Footer
