import React from 'react'
import './Footer.css'
import logo from '../Navbar/navImages/logo.png'
import twitter from './twitter.png'
import linkedin from './linkedin.png'
import youtube from './youtube.png'
import loca from './loca.png'

export default function Footer(){
    return (
      <div className="footer-sec">
        <div className="imagee">
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

              <div className="colm">
                <div className="column">
                  <h1>Contact Us</h1>
                  <div className="contact-links">
                    <p>hiiamsalomi@gmail.com</p>
                    <p>+977 9867568990</p>
                    <span>
                      <img className="loca" src={loca} />
                      <a
                        target="_blank"
                        href="https://www.google.com/maps/search/Bhat+Bhateni+Supermarket/@27.647008,85.2930593,13z/data=!3m1!4b1?entry=ttu"
                      >
                        Find in Google Maps
                      </a>
                    </span>
                  </div>
                  <div className="logo2">
                    <div className="tweet">
                      <a
                        target="_blank"
                        href="https://twitter.com/home?lang=en"
                      >
                        <img className="tweet" src={twitter}></img>
                      </a>
                    </div>
                    <div className="linked">
                      <a target="_blank" href="https://www.linkedin.com/feed/">
                        <img className="linked" src={linkedin} />
                      </a>
                    </div>
                    <div className="yt">
                      <a target="_blank" href="https://www.youtube.com/">
                        <img className="yt" src={youtube} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}