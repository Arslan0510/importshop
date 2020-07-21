import React, { Component } from 'react';
import HeroSection from '../../components/HeroSection';
import HeaderSection from '../../components/HeaderSection';
import HearderNav from '../../components/HeaderSection/HeaderNav';

export class index extends Component {
  render() {
    return (
      <>
        <HeroSection />
        <HearderNav />
        {/* <HeaderSection /> */}
      </>
    );
  }
}

export default index;
