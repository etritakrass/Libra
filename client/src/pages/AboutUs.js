import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      {/* MAIN BOXES */}
      <div className="boxes-container">

        {/* BOX 1 */}
        <div className="box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png"
            alt="Notary process"
            className="icon"
          />
          <h2>Notary Process</h2>
          <p>
            Notaries verify and authenticate legal documents to ensure their
            validity. Traditionally, individuals must visit a notary in person,
            present identification, and sign documents in their presence. This
            ensures security but can be time-consuming.
          </p>
        </div>

        {/* BOX 2 */}
        <div className="box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
            alt="Notaries in Kosovo"
            className="icon"
          />
          <h2>Notaries in Kosovo</h2>
          <p>
            Kosovo has a network of licensed notaries who provide essential
            legal services. They are located across different regions, ensuring
            accessibility for citizens and businesses.
          </p>
        </div>

        {/* BOX 3 */}
        <div className="box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Documents processed"
            className="icon"
          />
          <h2>Processed Documents</h2>
          <p>
            Thousands of documents are notarized each year, including contracts
            and official declarations. Digitalization helps speed up the process
            and improves efficiency.
          </p>
        </div>

      </div>

      {/* EXTRA SECTION */}
      <div className="extra-container">

        {/* RECORDS */}
        <div className="extra-box">
          <h2>Records & Achievements</h2>
          <p>
            Our platform is designed to improve efficiency and reduce waiting
            times in notarization services. We aim to set new standards in speed,
            accessibility, and user experience through digital transformation.
          </p>
        </div>

        {/* FAQ */}
        <div className="extra-box">
          <h2>Frequently Asked Questions</h2>

          <p>
            <strong>Q: Can I notarize documents online?</strong><br />
            Yes, our platform allows digital submission and connection with licensed notaries.
          </p>

          <p>
            <strong>Q: Is it secure?</strong><br />
            We use modern security standards to protect your data.
          </p>

          <p>
            <strong>Q: How long does it take?</strong><br />
            The process is much faster than traditional methods.
          </p>
        </div>

      </div>
    </div>
  );
}

export default AboutUs;