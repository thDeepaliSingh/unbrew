import React from 'react'
import { Link, Outlet,  useLocation } from 'react-router-dom'



const Navbar = () => {

  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <>

      <nav id='navbar'>
        <h1><Link to = '/'> Unbrew. </Link></h1>
        <ul>
          <li><Link to = '/' className={currentPath === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to = '/about' className={currentPath === '/about' ? 'active' : ''}>About US</Link></li>
          <li><Link to = '/service' className={currentPath === '/service' ? 'active' : ''}>Service</Link></li>
          <li><Link to = '/pricing' className={currentPath === '/pricing' ? 'active' : ''}>Pricing</Link></li>
          <li><Link to = '/work' className={currentPath === '/work' ? 'active' : ''}>Work</Link></li>
          <li><Link to = '/blogs' className={currentPath === '/blogs' ? 'active' : ''}>Blog</Link></li>
          <li><Link to = '/contact' className={currentPath === '/contact' ? 'active' : ''}>Contact Us</Link></li>
          <div className = 'hm-bg'>
            <div className='hm--bg-container'
                
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar
