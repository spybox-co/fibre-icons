import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';

import ChevronUp from './icons/ChevronUp';
import ArrowUp from './icons/ArrowUp';
import Menu from './icons/Menu';
import OpenNew from './icons/OpenNew';
import Download from './icons/Download';

import Export from './icons/Export';
import Hamburger from './icons/Hamburger';
import OverflowMenuVertical from './icons/OverflowMenuVertical';
import Search from './icons/Search';
import Map from './icons/Map';

import Case from './icons/Case';

import SettingsAdjust from './icons/SettingsAdjust';

import Resources from './icons/Resources';

import { parse } from 'svg-parser';


const sample = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#000" d="M11.5 6.5a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM10 10l4.5 4.5"/></svg>`;

const parsed = parse(sample);


const Console = () => {

  useEffect(() =>{
    console.log(parsed.children[0].children[0].properties);
    console.log(parsed.children[0].properties);
  }, [parsed])
  return null;
}


const IconSet = (props) => {

  const {
    nonScaling,
    type,
    title
  } = props;

  const iconProps = {
    nonScaling: nonScaling,
    className: type
  }




  return (
    <>
      {title && <h2>{title}</h2>}
      <div className="IconSet">

          <Menu {...iconProps} />
          <OpenNew {...iconProps} />
          <ChevronUp {...iconProps}/>
          <ArrowUp {...iconProps}/>

          <Search {...iconProps}/>
          <Map {...iconProps}/>
          <Export {...iconProps}/>
          <Resources {...iconProps}/>

          <SettingsAdjust {...iconProps}/>
          <Case {...iconProps}/>

      </div>
    </>
  );
}

const IconContainer = (props) => {

  const {
    type,
    title
  } = props;

  return(
    <div>
      {title && <h2>{title}</h2>}

      <IconSet type={type} />
      <IconSet type={type} nonScaling />


    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div className="App">
      <h1>Hello to Fibre Icons™ - Index page here </h1>

      <Console />
      <div className="Intro">
        <div>
          <div>
            <OverflowMenuVertical className="medium" />
            <Download className="medium" />
          </div>
          <div>
            <Hamburger className="medium" />
            <Resources className="medium" />
            <span>Scaling outline</span>
          </div>
          
        </div>
        <div>

          <div>
            <OverflowMenuVertical className="medium" nonScaling />
            <Download className="medium" nonScaling />
          </div>
          <div>
            <Hamburger className="medium" nonScaling />
            <Resources className="medium" nonScaling />
            <span>With <code>nonScaling</code> outline setting</span>
          </div>
          
        </div>
      </div>


      <IconContainer title="Regular icons" />

      <IconContainer title="Medium icons" type="medium" />
      <IconContainer title="Big icons" type="big" />
      <IconContainer title="Large icons" type="large" />
      
    </div>

    

  </React.StrictMode>
);



