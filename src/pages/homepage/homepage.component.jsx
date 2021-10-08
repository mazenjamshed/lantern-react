import React from 'react';
import './homepage.styles.scss';
import Header from './../../components/header/header.component';
import Banner from '../../components/banner/banner.component';
import Heading1 from '../../components/typography/heading/heading.component';
import CreditCard from '../../components/credit-card/credit-card.component';
import About from '../../components/about-us/about-us.component';
const Homepage = () => {
  return (
    <div className='homepage'>
      <Header />
      <Banner />
      <Heading1 size='h2'>Take a step towards your money goal</Heading1>
      <p>
        We’ve got the top lenders and financial products, tools, and articles to
        help you tackle your goal.
      </p>
      <div className='cards'></div>
      <div className='scenery'></div>
      <CreditCard />
      <About />
    </div>
  );
};

export default Homepage;
