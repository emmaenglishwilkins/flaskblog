import React from 'react';
import { BrowserRouter, HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home'
import { Blog } from './pages/blog';
import { Layout } from './layout';
// import { DvdLogo } from './pages/dvd-logo/dvdLogo';

// import { DraggablePhotos } from './components/draggable-photos';
// import { PoetryPages } from './pages/poetry-pages';

function App() {
  return(
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element = {<Blog/>}/>
          {/* <Route path="/dvd" element = { DvdLogo }/> */}
      </Routes>
    </Router>
  )
}

export default App;