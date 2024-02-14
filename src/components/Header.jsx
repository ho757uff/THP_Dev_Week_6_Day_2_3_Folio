// Header.jsx
import React from 'react';

const Header = ({ toggleTheme }) => {
  return (
    <header>
      <h1>Portfolio de Robin Debessel</h1>
      <nav>
        <a href="https://github.com/ho757uff">Profil GitHub</a>
      </nav>
      <button onClick={toggleTheme}>Mode Jour/Nuit</button>
    </header>
  );
};

export default Header;
