
"use client";

import { useState } from "react";
import Logo from  "@/assets/logo-blank.png"
export default function ContactForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="container-fluid">
      <p className="slider-header" style={{paddingTop: "1rem"}}>Get in contact with us</p>
      <form className="form-signup">
        <div className="row">
          {/* Section 1 */}
          <div className="col-lg-7 col-12 section1">
            <div className="form-row header">
              <div className="col-sm-12">
                <img src={Logo.src} alt="Logo" style={{width: 100}}/>
                <h4>Get in touch with us</h4>
                <p>Contact us using the form below</p>
              </div>
            </div>

            {/* Names */}
            <div className="form-row">
              <div className="col-sm-6">
                <div
                  className={`form-group ${
                    firstname.length ? "not-empty" : ""
                  }`}
                >
                  <input
                    type="text"
                    className="form-control"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                  />
                  <label className="animated-label">
                    First name
                  </label>
                </div>
              </div>

              <div className="col-sm-6">
                <div
                  className={`form-group ${
                    lastname.length ? "not-empty" : ""
                  }`}
                >
                  <input
                    type="text"
                    className="form-control"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                  />
                  <label className="animated-label">
                    Last name
                  </label>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="form-row">
              <div className="col-sm-12">
                <div
                  className={`form-group ${
                    email.length ? "not-empty" : ""
                  }`}
                >
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ paddingRight: "30%" }}
                  />

                  <label className="animated-label">
                    Email
                  </label>

                  <span className="append">@example.com</span>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="form-row submit-area">
              <div className="col-sm-12">

                <div className="log-sign">
                  <a href="#" className="btn solid">
                    Get In touch
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </form>
    </div>
  );
}