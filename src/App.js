import React from 'react';
import ContaminantSearch from './views/ContaminantSearch'

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Contaminant Search</h1>
      </header>
      <main>
        <ContaminantSearch />
      </main>
      <footer>
        <h6>markheard.io software solution</h6>
      </footer>
    </div>
  );
}

export default App;
