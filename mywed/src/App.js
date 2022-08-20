import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Maincp from './Components/Maincp'
import Getthere from './Components/Getthere';


function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Maincp/>}/>
        <Route path="/Getthere" element={<Getthere/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
