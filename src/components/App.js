import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../pages/home';
import About from '../pages/about';
import Error from '../pages/error-404';
import HouseDetails from '../pages/house-details';

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