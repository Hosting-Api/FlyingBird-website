import React, { Component, Fragment } from "react";

class Footer extends Component {
    
  render() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div style={{ position: "relative", bottom: 0, width:"100%" }} className="bg-gray-100">
          <div className="bg-gray-100 container mx-auto text-center px-6 pt-10 pb-6">
          © {year} {" - "} All rights reserved 
          </div>
        </div>
    );
  }
}

export default Footer;