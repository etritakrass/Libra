import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">

      
      <img src="/photos/ballina.png" alt="Ballina" className="hero-image" />

      <hr />

      {/* teksti qe ka me levize */}
      <div className="marquee-container">
        <div className="marquee">
           Drejtësia është themeli i një shoqërie të fortë • Noteria siguron besim dhe siguri ligjore • Çdo dokument ka vlerë vetëm kur është i vërtetuar •
        </div>
      </div>

      <hr />

      {/* shpjegim per oden  */}
      <div className="about-section">

        <div className="about-box">
          <h2>Oda e Noterëve të Kosovës</h2>
          <p>
            Oda e Noterëve përfaqëson dhe mbështet të gjithë noterët në Kosovë,
            duke garantuar standarde të larta profesionale, integritet dhe
            transparencë në çdo shërbim ligjor.
          </p>

          <p>
            Ajo ka kontribuar në digjitalizimin e shërbimeve dhe në rritjen e
            besueshmërisë së dokumenteve ligjore në vend.
          </p>
        </div>

        <div className="about-logo">
          <img src="photos//oda.png" alt="Notary Symbol" />
        </div>

      </div>

      <hr />

      {/* SERVICES SECTION */}
      <div className="services-section">

        <h2>Shërbimet Noteriale</h2>

        <div className="services-grid">

          <div className="service">
            <h3>Kontrata</h3>
            <p>Hartimi dhe vërtetimi i kontratave ligjore ndërmjet palëve.</p>
          </div>

          <div className="service">
            <h3>Autorizime</h3>
            <p>Dokumente për përfaqësim ligjor dhe autorizime zyrtare.</p>
          </div>

          <div className="service">
            <h3>Trashëgimi</h3>
            <p>Procedura ligjore për ndarjen dhe verifikimin e pasurisë.</p>
          </div>

          <div className="service">
            <h3>Vërtetime</h3>
            <p>Certifikim i dokumenteve dhe kopjeve zyrtare.</p>
          </div>

          <div className="service">
            <h3>Deklarata</h3>
            <p>Deklarata ligjore dhe dokumente nën betim.</p>
          </div>

          <div className="service">
            <h3>Legalizim</h3>
            <p>Legalizimi i dokumenteve për përdorim zyrtar.</p>
          </div>

        </div>
      </div>

      <hr />

      
      <div className="home-footer-note">
        <p>Platforma Libra – Shërbime noteriale online të sigurta dhe profesionale</p>
      </div>

    </div>
  );
}