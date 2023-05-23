import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Logo from './img/logo.png'
import mainContent from './img/image 1.png'
import mainRectangle from './img/Rectangle 9.png'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { hover } from '@testing-library/user-event/dist/hover';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <div className="conteiner" style={{ width: '100%', }}>
      <div className="navigation" style={{ width: '95%', margin:'auto', height: '100px', display: 'flex', justifyContent: 'space-around', gap:'5vw', alignItems:'center'}}>
        <div className="navlogo" style={{display:'flex', justifyContent: 'center', gap:'1vw', alignItems:'center', fontFamily: "'Russo One', sans-serif", fontWeight:'500', fontSize:'32px', color:'#58A9A5',}}>
          <img src={Logo} alt="img" />
          <p style={{paddingTop:'4px'}}>Locus</p>
        </div>
        <div className="navLinks" style={{width:'35%'}}>
          <ul style={{display: 'flex', gap:'3vw',}}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">About us</a></li>
          </ul>
        </div>
        <div className="btn_nav">
          <button id='btn' style={{padding:'15px 50px', borderRadius:'12px', border:'none', cursor:'pointer', fontSize:'17px', fontWeight:'600', backgroundColor:'#58A9A5', color:'#fff',}}>Sign up</button>
        </div>
      </div>
      <div className="main_content" style={{display:'flex', justifyContent:'space-between', padding:'60px 3%'}}>
        <div className="main_content_left">
          <h1 style={{fontSize:'65px', width:'95%', fontFamily: "'Reem Kufi Fun', sans-serif ", fontWeight:'600', lineHeight:'70px', paddingTop:'5%'}}>Get the inspiration of interior design here</h1>
          <p style={{}}>architecture not only about engineering, it even lands to art and aesthetics. With us, you will get a residentical design with an extraordinary touch of art. </p>
          <a href="#">Let`s go</a>
        </div>
        <div className="main_content_right" style={{position:'relative'}}>
          <img src={mainContent} alt="img" style={{position: 'absolute'}} />
          <img src={mainRectangle} alt="img" />
        </div>
      </div>
    </div>
  </div>

);


