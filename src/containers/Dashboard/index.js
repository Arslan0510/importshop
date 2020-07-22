import React, { Component } from 'react';
import HeroSection from '../../components/HeroSection';
import HearderNav from '../../components/HeaderSection/HeaderNav';

export class index extends Component {
  render() {
    return (
      <>
        <HearderNav />
        <HeroSection />
      </>
    );
  }
}

export default index;
