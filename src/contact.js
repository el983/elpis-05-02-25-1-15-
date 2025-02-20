import React from 'react';
import './contact.css'; // your scoped CSS

const ContactUs = () => {
  return (
    <div className="contact-container" id='contact-page'>
      <div className="contact-header">
        <h1>Contact <span>&rarr;</span><br/> Us Today</h1>
      </div>
      <form className="contact-form">
        <label>Which Department are you contacting?*</label>
        <select required>
          <option value="">Select a department</option>
          <option value="coaching-consulting">Coaching & Consulting</option>
          <option value="turnkey-educational">Turnkey Educational Projects</option>
          <option value="finishing-school">Finishing School Projects</option>
          <option value="vocational-training">Vocational Training Partners</option>
          <option value="international-admissions">International Student Admissions</option>
          <option value="college-university">Colleges & University Admissions Across the Globe</option>
          <option value="preparatory-courses">Preparatory Courses</option>
        </select>
        <br/>
        <div className="input-group">
          <input type="text" placeholder="First Name*" required />
          <input type="text" placeholder="Last Name*" required />
        </div>
        <div className="input-group">
          <input type="email" placeholder="Email*" required />
          <input type="text" placeholder="Subject*" required />
        </div>
        <textarea placeholder="Message*" required></textarea>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
