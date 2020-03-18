import React from 'react';
import logo from './logo.svg';
//import './style';
import './sass/style.scss';

function App() {
  const version_string = `${process.env.GKA_FRONT_VERSION}-${process.env.NODE_ENV}`
  return (
    <div className="customer-landing-page theme-light flex flex-column align-center cover">
      <header className="">
      </header>
      <section>
        <h1>Bienvenu</h1>
        <p>
          Le Dr. XXX vous invite à rejoindre sa salle d'attente pour une consultation à distance. Lorsque vous êtes prêts, cliquez sur le bouton ci-dessous pour la rejoindre.
        </p>
        <button>JE SUIS PRÊT !</button>
      </section>
      <footer class="footer">
        <div>
          <p alt={version_string} title={version_string}>2020 - Designed with love, cocoa and coffe by GeekAgency - Switzerland</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
