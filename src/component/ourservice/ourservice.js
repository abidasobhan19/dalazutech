import React from "react";
import "./ourservice.css";

const OurService = () => {
  return (
    <section className="community section-padding style-4">
      <div className="container">
        <div className="section-head text-center style-4 ">
          <a
            href="#"
            style={{
              color: "#000000",
              marginRight: 10,
              textDecoration: "none",
            }}
          >
            <h1> Our Service</h1>
          </a>
        </div>
        <div className="community-content">
          <div className="community-card">
            <div className="icon">
              <i className="fab fa-facebook" />
            </div>
            <div className="inf">
              <h5>Facebook</h5>
            </div>
          </div>
          <div className="community-card">
            <div className="icon">
              <i className="fab fa-facebook-messenger" />
            </div>
            <div className="inf">
              <h5>Messenger</h5>
            </div>
          </div>
          <div className="community-card">
            <div className="icon">
              <i className="fab fa-whatsapp" />
            </div>
            <div className="inf">
              <h5>WhatsApp</h5>
            </div>
          </div>
          <div className="community-card">
            <div className="icon">
              <i className="fab fa-instagram" />
            </div>
            <div className="inf">
              <h5>Instagram</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
