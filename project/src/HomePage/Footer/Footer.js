import React from 'react'
import './Footer.css'
import logo from '../Navbar/navImages/logo.png'
import twitter from './twitter.png'
import linkedin from './linkedin.png'
import youtube from './youtube.png'
import loca from './loca.png'

export default function Footer(){
    return (
        <footer className="footer_imagee">
          <div className="img-overlay">
            <div className="row">
              <div className="column1">
                <img className="logo1" src={logo} />
                <p className="logo_desc">
                  We are a collaboration of non-government organisation and
                  professionals working to ensure that people have a fun
                  shopping experience.
                </p>
              </div>

                <div className="column2">
                  <p className='colm2_title'>Contact Us</p>
                  <div className="contact-links">
                    <p>hiiamsalomi@gmail.com</p>
                    <p>+977 9867568990</p>
                  </div>
                  <div className="social_logo">
                      <a
                        target="_blank"
                        href="https://twitter.com/home?lang=en"
                      >
                        <img src={twitter}></img>
                      </a>
                      <a target="_blank" href="https://www.linkedin.com/feed/">
                        <img src={linkedin} />
                      </a>
                      <a target="_blank" href="https://www.youtube.com/">
                        <img  src={youtube} />
                      </a>
                    </div>
                  </div>
                </div>
            </div>
        </footer>
    )
}