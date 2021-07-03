import Popup from './components/Popup';
import './App.css';
import UserForm from './components/UserForm';
import { useState } from 'react';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="App">
      
      <br />
      <button className="main-button" onClick={()=> setButtonPopup(true)}>E KYC Details</button>
      <Popup trigger={buttonPopup } setTrigger ={setButtonPopup}>
      </Popup>
    </div>
  );
}

export default App;
