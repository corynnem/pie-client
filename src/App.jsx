import React, {useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Auth from './Components/Auth/Auth'
import Pies from './Components/Pies/Pies'
import './App.css';

// React naming convention is PascalCase - first letter of each word capitalized
// React uses interpolation with {}

function App() {
  const [sessionToken, setSessionToken] = useState('')

 
  
 
  return (
    <div className="App" >
      {sessionToken}
      <Navbar/>
      <Auth/>
      <Pies/>
    </div>
  );
}

export default App;
