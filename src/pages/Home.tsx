import React from 'react';
import Announcement from '../components/Announcement';
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';

function Home() {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
    </div>
  );
}

export default Home;
