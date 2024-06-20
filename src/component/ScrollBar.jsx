// ScrollBar.js top companies at the bottom

import React from 'react';
import { Link } from 'react-router-dom';
import "./ScrollBar.css"

function ScrollBar() {
  return (
    <div>
      <center> 
        <div className=""> 
          <h1 style={{textAlign: "center", color: "#0e387a"}}>Top companies</h1>
          <h3 style={{textAlign: "center"}}>Where you can get an opportunity to work</h3> 
          <div className="horizontal-scrollable" style={{overflowX: "auto", whiteSpace: "nowrap", width: "100%"}}> 
            <div className="row text-center my-5" style={{display: "flex", textAlign: "center", margin: "0 auto"}}> {/* Ensure row is flex */}
              <div className="col-3 " style={{marginRight: "10px", marginLeft: "10px"}}>
              <Link to="/tcs">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png" style={{ width: "180px", height: "50px", objectFit: "cover" }} />
                </Link>
              </div> 
              <div className="col-3" style={{marginRight: "10px", marginLeft: "10px"}}>
                <Link to="/capgemini">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEp8MJc1y5sgj_AEhyR8r50UwuYPR9IXjepw&s" style={{ width: "180px", height: "50px", objectFit: "cover" }}/>
                </Link>
                </div> 
              <div className="col-3" style={{marginRight: "10px", marginLeft: "10px"}}>
                <Link to="/ola"><img src="https://upload.wikimedia.org/wikipedia/en/0/0f/Ola_Cabs_logo.svg"  style={{ width: "180px", height: "60px", objectFit: "cover" }}/>
                </Link></div> 
              <div className="col-3" style={{marginRight: "10px", marginLeft: "10px"}}>
                <Link to="/hcl"><img src="https://1000logos.net/wp-content/uploads/2023/03/HCL-logo.png" style={{ width: "180px", height: "50px", objectFit: "cover" }}/></Link></div> 
              <div className="col-3" style={{marginRight: "10px", marginLeft: "10px"}}>
                <Link to="/accenture"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1024px-Accenture.svg.png" style={{ width: "200px", height: "50px", objectFit: "cover" }}/>
                </Link></div> 
              <div className="col-3" style={{marginRight: "10px", marginLeft: "10px"}}>
                <Link to="/zomato"><img src="https://logos-world.net/wp-content/uploads/2020/11/Zomato-Logo.png" style={{ width: "180px", height: "50px", objectFit: "cover" }}/>
                </Link></div> 
              <div className="col-3" style={{marginRight: "10px", marginLeft: "10px"}}>
                <Link to="/swiggy"><img src="https://i0.wp.com/www.themediaant.com/blog/wp-content/uploads/2023/08/b45f8vpzym2hqa73opxa.png" style={{ width: "180px", height: "50px", objectFit: "cover" }}/>
                </Link></div>
              <div className="col-3" style={{marginRight: "10px", marginLeft: "10px"}}>
                <Link to="/wipro"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" style={{ width: "150px", height: "120px", objectFit: "cover" }}/>
                </Link></div>  
              <div className="col-3" style={{marginRight: "10px", marginLeft: "10px"}}>
                <Link to="/blinkit"><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/assets/ui/print/bl_logo_web.png" style={{ width: "150px", height: "50px", objectFit: "cover" }}/>
                </Link></div>
            </div> 
          </div> 
        </div> 
      </center> 
    </div>
  );
}
export default ScrollBar;