import React from 'react';
import { Link } from 'react-router-dom';

function CircularLinks() {
  return (
    <div className="d-flex justify-content-center align-items-center my-4">
      <Link to="/ContactUsFreelancing" className="btn btn-primary rounded-circle me-3 text-center" style={{ width: '150px', height: '150px', lineHeight: '120px' }}>Freelancing</Link>
      <Link to="/ContactUsTraining" className="btn btn-primary rounded-circle me-3 text-center" style={{ width: '120px', height: '120px', lineHeight: '100px' }}>Training</Link>
      <Link to="/ContactUsJobs" className="btn btn-primary rounded-circle me-3 text-center" style={{ width: '100px', height: '100px', lineHeight: '80px' }}>Jobs</Link>
      <Link to="/ContactUsInternship" className="btn btn-primary rounded-circle me-3 text-center" style={{ width: '120px', height: '120px', lineHeight: '100px' }}>Internship</Link>
      <Link to="/ContactUsPlacement" className="btn btn-primary rounded-circle text-center" style={{ width: '150px', height: '150px', lineHeight: '120px' }}>Placement</Link>
    </div>
  );
}

export default CircularLinks;
