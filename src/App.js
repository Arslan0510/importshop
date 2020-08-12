import React from 'react';
import Routes from './Routes';
import HearderNav from './components/HeaderSection/HeaderNav';

function App() {
  return (
    <div className='root'>
      <HearderNav />
      <Routes />
    </div>
  );
}

export default App;
