import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';

import ChevronUp from './icons/jsx/ChevronUp';
import ArrowUp from './icons/jsx/ArrowUp';
import Menu from './icons/jsx/Menu';
import OpenNew from './icons/jsx/OpenNew';
import Download from './icons/jsx/Download';

import Export from './icons/jsx/Export';
import Hamburger from './icons/jsx/Hamburger';
import OverflowMenuVertical from './icons/jsx/OverflowMenuVertical';
import Search from './icons/jsx/Search';
import Map from './icons/jsx/Map';


import Resources from './icons/jsx/Resources';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
      <h1>Hello to Fibre Icons™ - Index page here </h1>


      <div className="Intro">
        <div>
          <Resources className="medium" /><span>Scaling outline</span>
        </div>
        <div>
          <Resources className="medium" nonScaling /><span>With <code>nonScaling</code> outline setting</span>
        </div>
      </div>
      <h2>Regular icons</h2>
      <div>
        <Menu />
        <OpenNew />
        <ChevronUp />
        <ArrowUp />
        <Search />
        <Map />
        <Export />
        <Resources />
      </div>
      
      <div>
        <Menu nonScaling />
        <OpenNew nonScaling />
        <ChevronUp nonScaling />
        <ArrowUp nonScaling />
        <Search nonScaling />
        <Map nonScaling />
        <Export nonScaling />
        <Resources nonScaling />
      </div>
      <h2>Medium icons</h2>
      <div>
        <Menu className="medium" />
        <OpenNew className="medium" />
        <ChevronUp className="medium" />
        <ArrowUp className="medium" />
        <Search className="medium" />
        <Map className="medium" />
        <Export className="medium" />
        <Resources className="medium" />
      </div>
      <div>
        <Menu className="medium" nonScaling />
        <OpenNew className="medium" nonScaling />
        <ChevronUp className="medium" nonScaling />
        <ArrowUp className="medium" nonScaling />
        <Search className="medium" nonScaling />
        <Map className="medium" nonScaling />
        <Export className="medium" nonScaling />
        <Resources className="medium" nonScaling />
      </div>
      <h2>Big icons</h2>
      <div>
        <Menu className="big" />
        <OpenNew className="big" />
        <ChevronUp className="big" />
        <ArrowUp className="big" />
        <Search className="big" />
        <Map className="big" />
        <Export className="big" />
        <Resources className="big" />
      </div>
      <div>
        <Menu className="big" nonScaling />
        <OpenNew className="big" nonScaling />
        <ChevronUp className="big" nonScaling />
        <ArrowUp className="big" nonScaling />
        <Search className="big" nonScaling />
        <Map className="big" nonScaling />
        <Export className="big" nonScaling />
        <Resources className="big" nonScaling />
      </div>
      <h2>Large icons</h2>
      <div>
        <Menu className="large" />
        <OpenNew className="large" />
        <ChevronUp className="large" />
        <ArrowUp className="large" />
        <Search className="large" />
        <Map className="large" />
        <Export className="large" />
        <Resources className="large" />
      </div>
      <div>
        <Menu className="large" nonScaling />
        <OpenNew className="large" nonScaling />
        <ChevronUp className="large" nonScaling />
        <ArrowUp className="large" nonScaling />
        <Search className="large" nonScaling />
        <Map className="large" nonScaling />
        <Export className="large" nonScaling />
        <Resources className="large" nonScaling />
      </div>


      
    </div>

    

  </React.StrictMode>
);