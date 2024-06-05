import React, { useState } from 'react';
import Language from './components/test'; // Zakładając, że Language znajduje się w folderze components

function App() {
  const [lang, setLang] = useState('en');

  const changeLanguage = (newLang) => {
    setLang(newLang);
    console.log(`Language changed to: ${newLang}`);
    // Możesz dodać dodatkową logikę, np. aktualizację treści na stronie
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Aktualny język: {lang}</h1>
        <Language changeLanguage={changeLanguage} />
      </header>
    </div>
  );
}

export default App;
