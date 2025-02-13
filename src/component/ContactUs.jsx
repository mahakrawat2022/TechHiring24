import React from 'react';
import "./ContactUs.css"

function ContactUs(props) {
  return (
    <div className="container">
      <div className="content">
        <h2 style={{color:"#0e387a"}}>{props.heading} </h2>
        <p className="my-4">{props.content}
</p>
      </div>
      <div className="contact-form">
        <h1>Contact our team</h1>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input className="form-control my-2" type="text"/>
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input className="form-control my-2" type="email"/>
          </div>
          <div className="form-group">
            <label>Contact number:</label>
            <input className="form-control my-2" type="tel"/>
          </div>
          <div className="form-group">
            <label>Country or Region:</label>
            <input className="form-control my-2" type="text"/>
          </div>
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
