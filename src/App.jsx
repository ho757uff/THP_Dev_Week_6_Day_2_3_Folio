import { useState } from 'react';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light'); // état pour gérer le thème

  // Fonction pour basculer entre les thèmes jour et nuit
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <Header toggleTheme={toggleTheme} />
      {/* Ajoutez les autres composants ici */}
    </div>
  );
}

export default App;
