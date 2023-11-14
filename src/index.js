import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';

import ChevronUp from './icons/jsx/ChevronUp';
import ArrowUp from './icons/jsx/ArrowUp';
import Menu from './icons/jsx/Menu';
import OpenNew from './icons/jsx/OpenNew';
import Download from './icons/jsx/Download';
import Hamburger from './icons/jsx/Hamburger';
import OverflowMenuVertical from './icons/jsx/OverflowMenuVertical';
import Search from './icons/jsx/Search';
import Map from './icons/jsx/Map';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
      <h1>Hello to Fibre Icons™ - Index page here </h1>

      <div>
        <Menu />
        <OpenNew />
      </div>
      <div>
        <Menu className="big" />
        <Hamburger className="big" />
        <OpenNew className="big" />
        <Download className="big" />
        <OverflowMenuVertical className="big" />
        <ChevronUp className="big" />
        <ArrowUp className="big" />
      </div>
      <div>
        <Menu className="big" nonScaling />
        <Hamburger className="big" nonScaling />
        <OpenNew className="big" nonScaling />
        <Download className="big" nonScaling />
        <OverflowMenuVertical className="big" nonScaling />
        <ChevronUp className="big" nonScaling />
        <ArrowUp className="big" nonScaling />
      </div>
      <div>
        <Menu className="large" />
        <OpenNew className="large" />
        <ChevronUp className="large" />
        <ArrowUp className="large" />
        <Search className="large" />
        <Map className="large" />
      </div>
      <div>
        <Menu className="large" nonScaling />
        <OpenNew className="large" nonScaling />
        <ChevronUp className="large" nonScaling />
        <ArrowUp className="large" nonScaling />
        <Search className="large" nonScaling />
        <Map className="large" nonScaling />
      </div>


      
    </div>

    

  </React.StrictMode>
);