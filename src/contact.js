import React from 'react';
import './contact.css'; // your scoped CSS

const Contact = () => {
  return (
    <div className="contact-page" id='contact-page'>
      <div className="container">
        <div className="contact center">
          <div className="timage center">
            <div className="telephone">
              <div className="handset"></div>
              <div className="dialing-mechanism"></div>
              <div className="stand"></div>
            </div>
          </div>
          <div className="form-wrapper center">
            <h3 className="form-heading">Contact Us</h3>
            <form className="center">
              <input type="text" placeholder="Subject" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <a href="mailto:abcd@gmail.com"><input type="submit" value="Submit" className="form-btn" /></a> 
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
