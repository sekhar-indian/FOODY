import React from 'react';

import './components/home/home.css';
import Home from './components/home/home';
import NavScrollExample from './components/nave/navebar';
import Menu from './components/menu/menu';
function App() {
 return (
  <div>
    <div class="banerbgimgFor">
    <NavScrollExample/>
    <Home/>
    </div>
    <Menu/>
  </div>
 )
}

export default App;
