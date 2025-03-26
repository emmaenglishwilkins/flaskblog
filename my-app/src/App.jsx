import React from 'react';
import { BrowserRouter, HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home';
import { Blog } from './pages/blog';
// import { DvdLogo } from './pages/dvd-logo/dvdLogo';
import { Poetry } from './pages/poetry';
import { Room } from './pages/room';
// import { Layout } from './layout';
// import { DvdLogo } from './pages/dvd-logo/dvdLogo';

// import { DraggablePhotos } from './components/draggable-photos';
// import { PoetryPages } from './pages/poetry-pages';

function App() {
  return(
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" Component = {<Blog/>}/>
          {/* <Route path="/dvd" element = { DvdLogo }/> */}
          <Route path="/poetry" Component = { Poetry }/>
          <Route path="/room" Component={Room}/>
      </Routes>
    </Router>
  )
}

export default App;