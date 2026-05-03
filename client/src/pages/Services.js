import React from 'react';
import './Services.css';

export default function Services() {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="services-hero">
        <h1>Shërbimet</h1>
      </div>

      {/* Main Content */}
      <div className="services-container">
        <div className="services-intro">
          <h2>Çfarë ofrojmë ne?</h2>
          <p>
            Shërbimet publike të cilat janë kryer deri më tani nga gjykatat, komuna dhe institucionet tjera shtetërore, tani i janë deleguar noterëve me qëllim që këto shërbime të jenë sa më afër qytetarit.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="services-grid">
          
          {/* Card 1 */}
          <div className="service-card-item">
            <div className="card-header-top">
              <div className="icon-box-gold">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="card-title-box">
                <span className="subtitle-orange">Noterizim</span>
                <h3>Çështje familjare</h3>
              </div>
            </div>
            <hr className="card-divider" />
            <div className="card-body-text">
              <p>Noteri mund t'ju ndihmojë në zgjidhjen e çështjeve tuaja familjare dhe ofron këshilla rreth formës së duhur të dokumenteve, si p.sh:</p>
              <ul>
                <li>Kontratat martesore;</li>
                <li>Marrëveshjet e pjesëtimit të pasurisë;</li>
                <li>Marrëveshjet për mbajtjen (ushqimin) e fëmijëve;</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="service-card-item">
            <div className="card-header-top">
              <div className="icon-box-gold">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="card-title-box">
                <span className="subtitle-orange">Noterizim</span>
                <h3>Çështje pronësore</h3>
              </div>
            </div>
            <hr className="card-divider" />
            <div className="card-body-text">
              <p>Noteri mund t'ju ndihmojë në përpilimin dhe vërtetimin e kontratave mbi kalimin e pronësisë dhe të drejtave tjera reale, p.sh:</p>
              <ul>
                <li>Kontratat e shitblerjes së paluajtshmërisë;</li>
                <li>Kontratat e dhurimit;</li>
                <li>Themelimi i hipotekës;</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="service-card-item">
            <div className="card-header-top">
              <div className="icon-box-gold">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="card-title-box">
                <span className="subtitle-orange">Noterizim</span>
                <h3>Çështje ekonomike dhe të punës</h3>
              </div>
            </div>
            <hr className="card-divider" />
            <div className="card-body-text">
              <p>Noteri luan rol të rëndësishëm në fushën e të drejtës komerciale dhe të punës, duke siguruar vlefshmërinë e akteve si:</p>
              <ul>
                <li>Themelimi i shoqërive tregtare;</li>
                <li>Statutet e kompanive;</li>
                <li>Kontratat e ndryshme të punës dhe bashkëpunimit;</li>
              </ul>
            </div>
          </div>

          {/* Card 4 */}
          <div className="service-card-item">
            <div className="card-header-top">
              <div className="icon-box-gold">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="card-title-box">
                <span className="subtitle-orange">Noterizim</span>
                <h3>Vërtetimet, legalizimet dhe çertifikatat tjera</h3>
              </div>
            </div>
            <hr className="card-divider" />
            <div className="card-body-text">
              <p>Noteri do t'i kryej legalizimet, vërtetimet dhe autorizimet e dokumenteve të ndryshme që ju duhen në jetën e përditshme, psh:</p>
              <ul>
                <li>Verifikimi i nënshkrimeve, dokumenteve si dhe kopjeve të dokumenteve;</li>
                <li>Verifikimi dhe vërtetimi i kontratave;</li>
                <li>Autorizimi i përgjithshëm apo i posaçëm;</li>
              </ul>
            </div>
          </div>

          {/* Card 5 */}
          <div className="service-card-item">
            <div className="card-header-top">
              <div className="icon-box-gold">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div className="card-title-box">
                <span className="subtitle-orange">Noterizim</span>
                <h3>Ruajtja dhe depozitimi i gjërave dhe dokumenteve</h3>
              </div>
            </div>
            <hr className="card-divider" />
            <div className="card-body-text">
              <p>Noteri merr në ruajtje dokumentet dhe gjërat tjera me vlerë pasi që ai është institucion i besueshëm për ruajtjen e gjërave me vlerë dhe dokumenteve, psh:</p>
              <ul>
                <li>Ruajtja e dokumenteve duke përfshirë testamentet nga noteri;</li>
                <li>Depozitimi i gjërave me vlerë, siç janë: stoli ari, gjëra me vlerë të familjes, etj e sidomos në rast të trashëgimisë;</li>
              </ul>
            </div>
          </div>

          {/* Card 6 */}
          <div className="service-card-item">
            <div className="card-header-top">
              <div className="icon-box-gold">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
              <div className="card-title-box">
                <span className="subtitle-orange">Noterizim</span>
                <h3>Tarifat Noteriale ONK</h3>
              </div>
            </div>
            <hr className="card-divider" />
            <div className="card-body-text">
              <p>
                Tarifat noteriale Për secilin shërbim të kryer nga noteri duhet të paguhet tarifa. Tarifat noteriale janë rregulluar me Udhëzimin Administrativ për Tarifat Noteriale në Republikën e Kosovës. Për shërbime të njejta do të aplikohen tarifa të njejta në tërë Kosovën. Lartësinë e shumës për secilin shërbim noterial do ta gjeni në udhëzimin e lartëpërmendur.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
