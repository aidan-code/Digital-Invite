import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Maincp from './Components/Maincp'
import GetEvent from './Components/GetEvent';
import  GiftUs from './Components/GiftUs';
import Rsvp from './Components/Rsvp';
import GetChurch from './Components/GetChurch'
import Invite from './Components/Invite';


function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Maincp/>}/>
        <Route path="/GetEvent" element={<GetEvent/>}/>
        <Route path="/GetChurch" element={<GetChurch/>}/>
        <Route path="/GiftUs" element={<GiftUs/>}/>
        <Route path="/Rsvp" element={<Rsvp/>}/>
        <Route path="/invite" element={<Invite/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
