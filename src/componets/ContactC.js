import React from 'react'
import Button from "../componets/Button"

function ContactC() {
  return (
    <div className='contact--page'>

        <div className='contact-info'>
          <h1>Contact Information</h1>
          <div className='contact--links'>
            
            <address>Address: 198 West 21th Street, Suite 721 New York NY 10016</address>
            <p>Phone: <a href='#'>+ 1235 2355 98</a></p>
            <p>Email: <a href='#'>info@yoursite.com</a></p>
            <p>Website <a href='#'>yoursite.com</a></p>

          </div>
        </div>

        <div className='contact--form'>
        <div className='left'>
          hello
        </div>
        <div className='right'>
        <form className='contact-right-form'
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              gap: '1rem'
            }}
      >
            <input type='text' placeholder='Your Name'/>
            <input type='email' placeholder='Your Email'/>
            <input type='text' placeholder='Subject'/>
            <textarea placeholder='Message' rows="10"></textarea>
            <Button cl = "blue" py = "1.5rem" px = "4rem" msg = "Send Message"/>
          </form>
        </div>
        </div>

        </div>
  )
}

export default ContactC
