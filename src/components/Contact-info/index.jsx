import React from "react";

const ContactInfo = () => {
  return (
    <div className="info pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-phone"></span>
              <div className="cont">
                <h6 className="custom-font">Call Us</h6>
              <p>  <a href="tel:+91 90364 28899">+ 91 90364 28899</a></p>
              <p> <a href="tel:+91 90362 68899"> + 91 90362 68899</a></p> 
               
               
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-mail-open"></span>
              <div className="cont">
                <h6 className="custom-font">Email Us</h6>
                <p ><a href="mailto:admin@thearchitecturecorporation.com">admin@thearchitecturecorporation.com</a></p>
                <p ><a href="mailto:design@thearchitecturecorporation.com">design@thearchitecturecorporation.com</a></p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-map"></span>
              <div className="cont">
                <h6 className="custom-font">Address</h6>
                <p>
                Shop no. 305, Milestone 25 building, Balmatta,Mangalore - 575002
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
