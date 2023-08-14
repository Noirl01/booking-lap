import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import List from './Pages/list/List';
import Hotel from './Pages/hotel/Hotel';
import Login from './Pages/login/Login';
import Landingpage from './Pages/Landingpage/Landingpage';
import Signup from './Pages/Signup/SIgnup';


function App() {

  return (
    <div className="App">
      
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
