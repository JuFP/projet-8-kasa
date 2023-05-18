import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/error' element={<Error/>} />   
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
