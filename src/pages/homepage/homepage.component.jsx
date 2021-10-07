import React from 'react';
import './homepage.styles.scss';
import Header from './../../components/header/header.component';
import Banner from '../../components/banner/banner.component';
const Homepage = () => {
  return (
    <div className='homepage'>
      <Header />
      <Banner />
    </div>
  );
};

export default Homepage;
