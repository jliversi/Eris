import React from 'react';

import SplashInput from './SplashInput';

import splashLeft from 'assets/images/splash/splash-left.svg';
import splashRight from 'assets/images/splash/splash-right.svg';
import splashMid from 'assets/images/splash/splash-mid.svg';
import balloons from 'assets/images/splash/balloons.svg';
import boat from 'assets/images/splash/boat.svg';
import island1 from 'assets/images/splash/island1.svg';
import island2 from 'assets/images/splash/island2.svg';
import c1 from 'assets/images/splash/clouds/c1.svg';
import c2 from 'assets/images/splash/clouds/c2.svg';
import c3 from 'assets/images/splash/clouds/c3.svg';
import c4 from 'assets/images/splash/clouds/c4.svg';
import c6 from 'assets/images/splash/clouds/c6.svg';
import c7 from 'assets/images/splash/clouds/c7.svg';
import c8 from 'assets/images/splash/clouds/c8.svg';


function SplashMain(props) {
  return (
    <div className='splash-main-element'>
      <div className='floaters'>
        <img src={splashLeft} className='splash-float-left' />
        <img src={splashRight} className='splash-float-right' />
        <img src={splashMid} className='splash-float-mid' />
        <img src={balloons} className='balloons' />
        <img src={boat} className='boat' />
        <img src={island1} className='island1' />
        <img src={island2} className='island2' />
        <div>
          <img src={c1} className='c1' />
          <img src={c2} className='c2' />
          <img src={c3} className='c3' />
          <img src={c4} className='c4' />
          <img src={c6} className='c6' />
          <img src={c7} className='c7' />
          <img src={c8} className='c8' />
        </div>
      </div>

      <div className='splash-main-box'>
        <h1>Your place to talk</h1>
        <p>Whether you’re part of a school club, gaming group, worldwide art community, or just a handful of friends that want to spend time together, Eris makes it easy to talk every day and hang out more often.</p>
        <SplashInput />
      </div>
    </div>
  )
}

export default SplashMain;