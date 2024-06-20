import React from 'react';

function Body() {
  return (
    <div style={{ position: "relative", margin: "0", padding: "0", textAlign: "center", marginTop: "20px" }}>
      <img
        style={{ width: "100%", display: "block", margin: "0", padding: "0", height: "500px" }}
        src="https://media.istockphoto.com/id/506351726/photo/recruiter-advertising-for-job-vacancies-searching-candidates-to-hire.jpg?s=1024x1024&w=0&k=20&c=9mZD15PyA2oV91sn442jCaNN1dR-72lRJbXXyv9d360="
        alt="Recruiter Advertising for Job Vacancies"
      />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "20px", borderRadius: "10px", maxWidth: "200px", width: "100%" }}>
        <h2>Login</h2>
        <form>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" style={{ width: "100%", padding: "6px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" style={{ width: "100%", padding: "6px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" style={{ width: "100%", padding: "6px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <button type="submit" style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "none", backgroundColor: "#007bff", color: "#fff", cursor: "pointer" }}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Body;
