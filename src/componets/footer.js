import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Footer = () => {

  return (
    <>
    <footer>
      <div className='upper--footer'>
        <div className='footer--column'>
          <h2 className='footer--heading logo'><Link to = "/">Unbrew.</Link></h2>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
         <ul className='social'>
          <li><a href='#'><i class="fa-brands fa-twitter"></i></a></li>
          <li><a href='#'><i class="fa-brands fa-instagram"></i></a></li>
          <li><a href='#'><i class="fa-brands fa-facebook"></i></a></li>
          
         </ul>
        </div>
        <div className='footer--column'>
          <h2 className='footer--heading'>Explore</h2>
          <ul>
            <li><a href='/about'>About Us</a></li>
            <li><a href='/service'>Service</a></li>
            <li><a href='/work'>Works</a></li>
            <li><a href='/blogs'>Blog</a></li>
            <li><a href='/contact'>Contact Us</a></li>
          </ul>
          
        </div>
        <div className='footer--column'>
          <h2 className='footer--heading'>Quick Links</h2>
          <ul>
            <li><a href='/contact'>Contact Us</a></li>
            <li><a href='/pricing'>Pricing</a></li>
            <li><a href='#'>Terms & Condintion</a></li>
            <li><a href='#'>Privacy</a></li>
            <li><a href='#'>Feedbacks</a></li>
          </ul>
        </div>
        <div className='footer--column poost'>
          <h2 className='footer--heading'>Recent Posts</h2>
          <div className='post'>
            <div className='post--item'>
              <div className='image img--1'></div>
              <div className='meta--data'>
                <div className='meta'>
                    <div className='meta--items date'>APR. 3, 2024</div>
                    <div className='meta--items admin'>Admin</div>
                </div>
                <h3>Creativity and Inspiration</h3>
              </div>
            </div>
            <div className='post--item'>
              <div className='image img--2'></div>
              <div className='meta--data'>
                <div className='meta'>
                    <div className='meta--items date'>APR. 3, 2024</div>
                    <div className='meta--items admin'>Admin</div>
                </div>
                <h3>Creativity and Inspiration</h3>
              </div>
            </div>
            <div className='post--item'>
              <div className='image img--3'></div>
              <div className='meta--data'>
                <div className='meta'>
                    <div className='meta--items date'>APR. 3, 2024</div>
                    <div className='meta--items admin'>Admin</div>
                </div>
                <h3>Creativity and Inspiration</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='footer--column last'>
          <h2 className='footer--heading'>Have a Questions?</h2>
          <p className='ques'><i class="fa-solid fa-map"></i> <div>	203 Fake St. Mountain View, San Francisco, California, USA</div></p>
          <p className='ques'>
            <a  href = "tel:+2 392 3929 210"><i class="fa-solid fa-phone"></i><div>+2 392 3929 210</div></a>
          </p>
          <p className='ques'><a  href = "mailto: info@yourdomain.com"><i class="fa-solid fa-paper-plane"></i><div>	info@yourdomain.com</div></a></p>
        </div>
      </div>
      <div className='lower--footer'>
        <p>Copyright ©2024 All rights reserved</p>
      </div>



    </footer>
      
      <Outlet /> 
    </>
  );
}

export default Footer;