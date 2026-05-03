import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">

     
      <img src="/photos/ballina.png" alt="Ballina" className="hero-image" />

      <hr />

     
      <div className="marquee-container">
        <div className="marquee">
          Drejtësia është themeli i një shoqërie të fortë • Noteria siguron besim dhe siguri ligjore • Çdo dokument ka vlerë vetëm kur është i vërtetuar •
        </div>
      </div>

      <hr />

      
      <div className="about-section milk-box">

        <div className="about-box">
          <h2>Oda e Noterëve të Kosovës</h2>
          <p>
            Oda e Noterëve përfaqëson dhe mbështet të gjithë noterët në Kosovë,
            duke garantuar standarde të larta profesionale, integritet dhe transparencë në çdo shërbim ligjor.
          </p>

          <p>
            Ajo ka kontribuar në digjitalizimin e shërbimeve dhe në rritjen e besueshmërisë së dokumenteve ligjore në vend.
          </p>
        </div>

        <div className="about-logo navy-side">
          <img src="/photos/oda.png" alt="Notary Symbol" />
        </div>

      </div>

      <hr />

      
      <div className="services-section">
        <h2>Shërbimet Noteriale</h2>

        <div className="services-grid-alt">

          
          <div className="service-row">
            <div className="service-text milk">
              <p>Kontrata e noterizuar është një marrëveshje juridike e lidhur ndërmjet dy ose më shumë palëve, e cila është hartuar ose verifikuar dhe më pas është vërtetuar nga një noter publik. Noteri, si autoritet i pavarur dhe i autorizuar nga shteti, garanton që palët kanë vepruar me vullnet të lirë, janë të identifikuara saktë dhe kanë kuptuar plotësisht përmbajtjen dhe pasojat juridike të kontratës. Noterizimi i jep kontratës fuqi të shtuar ligjore dhe besueshmëri në sistemin juridik.</p>
            </div>
            <div className="service-title navy">
              <h3>Kontrata</h3>
            </div>
          </div>

          <div className="service-row reverse">
            <div className="service-title navy">
              <h3>Autorizime</h3>
            </div>
            <div className="service-text milk">
              <p>Autorizimi (prokura) është një akt juridik me anë të të cilit një person fizik ose juridik (autorizuesi) i jep një personi tjetër (i autorizuari) të drejtën për të vepruar në emër dhe për llogari të tij në marrëdhënie juridike me palë të treta. Ky akt krijon një raport përfaqësimi, ku veprimet e kryera nga i autorizuari, brenda kufijve të përcaktuar, prodhojnë drejtpërdrejt pasoja juridike për autorizuesin.</p>
            </div>
          </div>

        
          <div className="service-row">
            <div className="service-text milk">
              <p>Trashëgimia është instituti juridik përmes të cilit pasuria, të drejtat dhe detyrimet e një personi të ndjerë (trashëgimlënësi) kalojnë tek një ose më shumë persona të tjerë (trashëgimtarët), sipas rregullave të përcaktuara nga ligji ose sipas vullnetit të shprehur në testament. Ky transferim ndodh në momentin e vdekjes dhe përfshin jo vetëm pasurinë materiale, por edhe të drejta dhe detyrime që nuk janë të lidhura ngushtë me personalitetin e trashëgimlënësit.</p>
            </div>
            <div className="service-title navy">
              <h3>Trashëgimi</h3>
            </div>
          </div>

          <div className="service-row reverse">
            <div className="service-title navy">
              <h3>Vërtetime</h3>
            </div>
            <div className="service-text milk">
              <p>Vërtetimi është një akt juridik ose administrativ përmes të cilit një autoritet kompetent (si noteri, organet e administratës publike apo institucionet përkatëse) konfirmon saktësinë, ekzistencën ose përputhshmërinë e një fakti, dokumenti apo deklarate me realitetin ose me të dhënat zyrtare. Ky akt ka për qëllim të krijojë besueshmëri dhe siguri juridike në marrëdhëniet ndërmjet palëve.</p>
            </div>
          </div>

         
          <div className="service-row">
            <div className="service-text milk">
              <p>Deklarata është një shprehje e njëanshme e vullnetit ose e pohimit të një fakti nga një person fizik apo juridik, e cila ka për qëllim të prodhojë pasoja juridike ose të shërbejë si provë për një situatë të caktuar. Ajo mund të lidhet me pranimin e një detyrimi, pohimin e një të drejte, ose konfirmimin e një fakti që ka rëndësi në marrëdhënie juridike.</p>
            </div>
            <div className="service-title navy">
              <h3>Deklarata</h3>
            </div>
          </div>

       
          <div className="service-row reverse">
            <div className="service-title navy">
              <h3>Legalizim</h3>
            </div>
            <div className="service-text milk">
              <p>Legalizimi është një procedurë juridike përmes së cilës një dokument i lëshuar nga një autoritet në një shtet vërtetohet si autentik dhe i vlefshëm për përdorim në një shtet tjetër. Ky proces konsiston në verifikimin e nënshkrimit, vulës dhe kompetencës së autoritetit që ka lëshuar dokumentin, pa hyrë në përmbajtjen e tij. Legalizimi siguron që dokumenti të pranohet nga institucionet e huaja si i besueshëm dhe i vlefshëm juridikisht.</p>
            </div>
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