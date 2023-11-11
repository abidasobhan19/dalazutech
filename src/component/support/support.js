import React from "react";

import "./support.css";

const Support = () => {
  return (
    <section className=".dsupport  section blob-bg-sec banner-pd-3">
      {" "}
      <img
        src="https://spruko.com/demo/hosting/hostma/dist/assets/images/patterns/18.png"
        alt="img"
        className="patterns-5 transform-rotate-180 height-inherit bottom-0 op-1"
      />{" "}
      <img
        src="https://spruko.com/demo/hosting/hostma/dist/assets/images/patterns/18.png"
        alt="img"
        className="patterns-7 height-inherit bottom-0"
      />{" "}
      <div className="container">
        {" "}
        <div className="row align-items-center">
          {" "}
          <div className="col-lg-7">
            {" "}
            <div className="heading-section text-start mb-4">
              {" "}
              <div className="heading-title text-white">
                Best Technical Support 24/7
              </div>{" "}
              <div className="heading-description text-white op-8">
                Support and Guidance
              </div>{" "}
            </div>{" "}
            <p className="mb-3 op-8">
              Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit
              ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit
              ipsum ipsum erat et kasd, sed et et erat elitr consetetur et
              aliquyam. Et lorem ipsum Sit ipsum sanctus ea.
            </p>
            <p className="tx-20 fw-500">
              Call Us :{" "}
              <a href="tel:123-789-7854" className="text-white me-1">
                123-789-7854
              </a>{" "}
              (Or){" "}
              <a href="contact-us.html" className="text-white ms-1">
                Chat Now
              </a>
            </p>
            <a href="contact-us.html" className="btn btn-lg btn-secondary">
              Contact Now
            </a>{" "}
          </div>{" "}
          <div className="col-lg-5">
            {" "}
            <div className="text-center mt-5 mt-lg-0">
              {" "}
              <img
                src="https://spruko.com/demo/hosting/hostma/dist/assets/images/png/57.png"
                alt="img"
                className="img-fluid"
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default Support;
