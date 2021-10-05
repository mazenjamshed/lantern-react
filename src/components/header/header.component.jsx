import React from 'react';
import './header.styles.scss';
import Heading1 from '../typography/heading/heading.component';
import Heading2 from '../typography/heading2/heading2.component';
import CardContainer from '../card/card-container.component';
const Header = () => {
  return (
    <div className='header'>
      <Heading1 type='primary' size='h1'>
        Financing made <span className='sub-icon'>easy</span>
      </Heading1>
      <Heading2 weight={400}>
        Need money tips, helpful tools, and access to a wide range of
        <br /> financial products? Let us shed some light.
      </Heading2>
      <Heading2 weight={700}>Easily explore product options</Heading2>
      <CardContainer />
    </div>
  );
};

export default Header;
