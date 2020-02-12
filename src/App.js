import React from 'react';

import './App.css'
import Home from './components/formcuidador/pages/Home'
import FormCuidador from './components/formcuidador/FormCuidador'

const App = () => {
  return (
    <div className="container">
      <Home />
      <FormCuidador />
    </div>
  );
}

export default App;
