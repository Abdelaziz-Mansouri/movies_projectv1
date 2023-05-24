import React, { useState } from 'react';
import LoginRegister from './components/Client/Login_Register/LoginRegister.jsx';
import Nav from './components/Nav.jsx'

import UserContext from './components/UserContext.jsx';


const App = () => {
  const [user, setUser] = useState(null);


  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <LoginRegister />
      </UserContext.Provider>
    </>

  )
}

export default App;
