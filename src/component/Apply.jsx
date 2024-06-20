import React from 'react';
import "./Apply.css"

function Apply(props) {
  return (
    <div className="my-3">
      
      <form className="apply-form">
        <fieldset>
          <legend>Apply Now</legend>
          <div className="form-group">
            <label htmlFor="name">Company you are interrested in:</label>
            <input type="text" id="name" name="name" required value={props.value} />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact Number:</label>
            <input type="tel" id="contact" name="contact" required />
          </div>
          <div className="form-group">
            <label htmlFor="experience">Work Experience:</label>
            <select id="experience" name="experience" required>
              <option value="">Select</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3+">3+ years</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="resume">Upload Resume:</label>
            <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required />
            <small>Accepted formats: PDF, DOC, DOCX</small>
          </div>
          <div className="form-group">
            <button type="submit">Apply Now</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Apply;
