import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Maincp from './Components/Maincp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Maincp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
