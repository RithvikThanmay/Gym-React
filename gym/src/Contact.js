import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="contact-main">
        <h1>Let's Talk!</h1>
        <h3>Reach out to GYM IT: Our team is ready to assist you on your fitness journey.</h3>
      </div>
      <div className="contact">
        <div className="c-left">
          <div className="c-item">
            <i class="ri-phone-fill"></i>
            <div className='c-sub-item'>
              <h3>Phone</h3>
              <p>+91 88254 10300</p>
            </div>
          </div>
          <div className="c-item">
            <i class="ri-mail-line"></i>
            <div className='c-sub-item'>
              <h3>Email</h3>
              <p>arfitness.hyderabad@gmail.com</p>
            </div>
          </div>
          <div className="c-item">
            <i class="ri-map-pin-line"></i>
            <div className='c-sub-item'>
              <h3>Location</h3>
              <p>No - 4, Khan Street, 1st Floor,</p>
              <p>Choolaimedu High Road, @Pluto's</p>
              <p>Restaurant Building Complex,</p>
              <p>Choolaimedu, Chennai - 600094</p>
            </div>
          </div>
        </div>
        <div className="c-right">
          <h1 className='my-3'>Contact US</h1>
          <input type="text" placeholder="Name*" />
          <input type="email" placeholder="Email*" />
          <input type="phone" placeholder="Phone Number" />
          <textarea placeholder="Write your Message"></textarea>
          <button className='btn btn-primary'>Enquire</button>
        </div>
      </div>
    </>
  )
}

export default Contact