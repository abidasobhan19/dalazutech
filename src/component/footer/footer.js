import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#1c2331", color: "#fff", padding: 50 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ width: "40%" }}>
          <h3 style={{ fontSize: 24, marginBottom: 20 }}>
            Dalazu Technologies
          </h3>
          <p style={{ fontSize: 16 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien,
            vel bibendum sapien velit in sapien.
          </p>
        </div>
        <div style={{ width: "30%" }}>
          <h3 style={{ fontSize: 24, marginBottom: 20 }}>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 10 }}>
              <a href="/" style={{ color: "#fff", fontSize: 16 }}>
                Home
              </a>
            </li>
            <li style={{ marginBottom: 10 }}>
              <a href="#" style={{ color: "#fff", fontSize: 16 }}>
                About
              </a>
            </li>
            <li style={{ marginBottom: 10 }}>
              <a href="#" style={{ color: "#fff", fontSize: 16 }}>
                Schedule
              </a>
            </li>
            <li style={{ marginBottom: 10 }}>
              <a href="#" style={{ color: "#fff", fontSize: 16 }}>
                Players
              </a>
            </li>
            <li style={{ marginBottom: 10 }}>
              <a href="#" style={{ color: "#fff", fontSize: 16 }}>
                Mobile App
              </a>
            </li>
          </ul>
        </div>
        <div style={{ width: "30%" }}>
          <h3 style={{ fontSize: 24, marginBottom: 20 }}>Contact Us</h3>
          <p style={{ fontSize: 16 }}>
            123 Main Street
            <br />
            Anytown, USA 12345
            <br />
            <br />
            Phone: (123) 456-7890
            <br />
            Email: info@dalazu.com
          </p>
        </div>
      </div>
      <hr style={{ borderTop: "1px solid #fff", margin: "50px 0" }} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a href="#" style={{ color: "#fff", marginRight: 10 }}>
            Privacy Policy
          </a>
          <div
            style={{
              borderRight: "1px solid #fff",
              height: 20,
              margin: "0 10px",
            }}
          />
          <a href="#" style={{ color: "#fff", marginRight: 10 }}>
            Terms of Service
          </a>
          <div
            style={{
              borderRight: "1px solid #fff",
              height: 20,
              margin: "0 10px",
            }}
          />
          <a href="#" style={{ color: "#fff" }}>
            Copyright 2023, All rights reserved by Dalazu.
          </a>
          <div
            style={{
              borderRight: "1px solid #fff",
              height: 20,
              margin: "0 10px",
            }}
          />
          <span>Design &amp; Developed by </span> .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
