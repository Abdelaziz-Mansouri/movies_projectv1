import React from 'react';
import Nav from './components/Nav';
import Home from './components/Client/Home';


function App() {
  if (window.location.pathname != '/home') {
    return (
      <Nav/>
    )
  }else{
    return(
      <Home/>
    )
  }
  
}

export default App;
