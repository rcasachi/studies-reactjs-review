import React from 'react';
import './App.css';
import uiux from './assets/ui-ux.jpg';
import TechList from './components/TechList';

function App() {
  return (
    <>
      <img width="500" src={uiux} alt="testing ui ux"/>

      <TechList />
    </>
  );
}

export default App;
