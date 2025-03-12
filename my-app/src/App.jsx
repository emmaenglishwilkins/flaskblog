import React from 'react';
import { BrowserRouter, HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home'
import { Blog } from './pages/blog';
import { Layout } from './layout';

function App() {
  return(
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element = {<Blog/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;