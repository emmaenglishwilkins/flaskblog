import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NowPlaying from './NowPlaying';
import './App.css';
// import NowPlaying from '../spotify';
import DvdLogo from '../pages/dvd-logo/dvdLogo';
console.log('DvdLogo component:', DvdLogo);

function App() {
  return (
    <div className="App">
      <NowPlaying />
  

      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<Home/>}/> */}
          <Route path="/dvdLogo" element={<DvdLogo/>}/>
          {/* <Route path="/poetry-pages" element={<Artists/>}/>
          <Route path="/blog" element={<Prompt/>}/> */}
        </Routes>
      </BrowserRouter>

    </div>
    
  );
}

export default App;