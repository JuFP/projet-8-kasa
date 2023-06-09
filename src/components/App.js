import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../pages/home.jsx';
import About from '../pages/about.jsx';
import Error from '../pages/error-404.jsx';
import HouseDetails from '../pages/house-details.jsx';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/error' element={<Error/>}/> 
        <Route path='/house-details/:id' element={<HouseDetails/>}/> 
        <Route path='*' element={<Error/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
