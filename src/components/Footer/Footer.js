import React from 'react'
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook-white.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram-white.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/linkedin-white.svg";

function Footer() {
  return (
    <>
    <footer>
      <div class="overlay"></div>
      <div class="content">
        <div class="footer-div">
          <div class="footer-div-1">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Our Products</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div class="footer-div-2">
            <h2>Contact Us</h2>
            <span>info@decimalsolutions.com</span>
            <span>+92 345 5893337, +92 300 4257414</span>
            <span
              >Office No# 17, 2nd Floor, Zaki Centre, I-8 Markaz Islamabad,
              44000</span
            >
          </div>
          <div class="footer-div-3">
            <div class="socials-footer">
              <a href="#">
                <FacebookIcon  />
              </a>
              <a href="#">
               <InstagramIcon />
              </a>
              <a href="#">
                <LinkedInIcon />
              </a>
            </div>
            <hr />
            <div class="last-line">
              <span
                >Copyright &copy; <span class="bold">decimal Solution</span> All
                rights reserved 2022</span
              >
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer