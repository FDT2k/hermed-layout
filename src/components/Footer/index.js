import React from 'react';

export default ({t}) => {
  const version_string = `${process.env.GKA_FRONT_VERSION}-${process.env.NODE_ENV}`
  return  (
    <footer class="footer">
      <div>
        <p alt={version_string} title={version_string}>2020 - Designed with love, cocoa and coffe by GeekAgency - Switzerland</p>
      </div>
    </footer>
  )
}
