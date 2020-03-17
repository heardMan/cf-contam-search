import React from 'react';
import ContaminantSearch from './views/ContaminantSearch'

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1 id='title'>Contaminant Search</h1>
      </header>
      <main>
        <ContaminantSearch />
      </main>
      
    </div>
  );
}

export default App;
