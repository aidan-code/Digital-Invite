import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Maincp from './Components/Maincp'
import Getthere from './Components/Getthere';
import  GiftUs from './Components/GiftUs';


function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Maincp/>}/>
        <Route path="/Getthere" element={<Getthere/>}/>
        <Route path="/GiftUs" element={<GiftUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
