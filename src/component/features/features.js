import React from "react";
import "./features.css";
const Features = () => {
  return (
    <section className="dalazu demo-screen-demo " id="features">
      <div className="container text-center">
        <div className="heading-subtitle">
          <span className="tx-primary tx-16 fw-semibold">Features</span>
        </div>
        <h1 className="wow fadeInUp reveal active">
          Our <span className="tx-primary">Features</span>{" "}
        </h1>
        <div className="row align-items-center mt-5">
          <div className="col-lg-4">
            <div className="card bg-transparent shadow-none">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-grow-1 text-center">
                    <div className="mb-2">
                      <span className="avatar bg-primary-gradient1 text-white br-style">
                        <i className="fe fe-sun" />
                      </span>
                    </div>
                    <h5 className="mb-2">Light and Dark Theme</h5>
                    <p className="mb-0 op-8">
                      The Hostma is also available in two different types of
                      layouts “Light and Drak Layouts. So that user can switch
                      their dashboard from one layout to another layout
                      effortlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-transparent shadow-none">
              <div className="card-body">
                <div className="d-flex align-items-start">
                  <div className="flex-grow-1 text-center">
                    <div className="mb-2">
                      <span className="avatar bg-secondary-gradient text-white br-style">
                        <i className="fe fe-toggle-left" />
                      </span>
                    </div>
                    <h5 className="mb-2">LTR and RTL Versions</h5>
                    <p className="mb-0 op-8">
                      The Hostma is available in LTR &amp; RTL versions with
                      single assets. Using those single assets, it’s very easy
                      to switch from one version to another version.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <img
              src="https://spruko.com/demo/hosting/hostma/demo/img/png/4.png"
              className="img-fluid"
              alt="img"
              width={300}
            />
          </div>
          <div className="col-lg-4">
            <div className="card bg-transparent shadow-none">
              <div className="card-body">
                <div className="d-flex align-items-start">
                  <div className="flex-grow-1 text-center">
                    <div className="mb-2">
                      <span className="avatar bg-success-gradient text-white br-style">
                        <i className="fe fe-layout" />
                      </span>
                    </div>
                    <h5 className="mb-2">Full Width and Boxed</h5>
                    <p className="mb-0 op-8">
                      The Hostma is also available in two different types of
                      layouts “Full Width” and “Boxed” Layouts. So that user can
                      switch their dashboard from one layout to another layout
                      effortlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-transparent shadow-none">
              <div className="card-body">
                <div className="d-flex align-items-start">
                  <div className="flex-grow-1 text-center">
                    <div className="mb-2">
                      <span className="avatar bg-danger-gradient text-white br-style">
                        <i className="fe fe-settings" />
                      </span>
                    </div>
                    <h5 className="mb-2">Customizable Theme</h5>
                    <p className="mb-0 op-8">
                      The Hostma is available in different types of color
                      styles. Where the users can change their template
                      completely with those color styles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
