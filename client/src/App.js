import './App.scss';
import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/AppRouter';
import NavBar from './components/UI/NavBar/NavBar';

function App() {
  const [showNavBar, setShowNavBar] = useState();

  return (
    <BrowserRouter>
      {!showNavBar? <NavBar />: null}
      <AppRouter  setShowNavBar={setShowNavBar}/>
    </BrowserRouter>
  );
}

export default App;
