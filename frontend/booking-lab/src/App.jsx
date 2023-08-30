import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import List from './Pages/list/List';
import Login from './Pages/login/Login';
import Landingpage from './Pages/Landingpage/Landingpage';
import Signup from './Pages/Signup/SIgnup';
import HotelsByID from './Pages/HotelsByID/HotelsByID';
import Popular from './Pages/PopularHotels/Popular';


function App() {
  

  return (
    <div className="App overflow-hidden md:overflow-auto md:container">
      
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/hotels/:id" element={<HotelsByID/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
