import Heading1 from '../typography/heading/heading.component';
import Heading2 from '../typography/heading2/heading2.component';
import './about-us.styles.scss';
const About = () => {
  return (
    <div className='about-us'>
      <Heading1 size='h2'>Why Us?</Heading1>
      <div className='about-us__content'>
        <div className='about-us__img'></div>
        <div className='about-us__details'>
          <div className='about-us__textbox'>
            <Heading2 weight='700'>Real offers from top providers</Heading2>
            <p>
              We work with dozens of lenders and providers to bring you offers.
              With just a few pieces of information, we can find personalized
              rates without impacting your credit score.
            </p>
          </div>
          <div className='about-us__textbox'>
            <Heading2 weight='700'>100% free to compare rates</Heading2>
            <p>
              Using Lantern by SoFi to check pre-qualified rates is 100% free.
              Compare rates and shop around in one safe place.
            </p>
          </div>
          <div className='about-us__textbox'>
            <Heading2 weight='700'>Safe and Secure</Heading2>
            <p>
              Your security is our top priority. We keep your data safe and we
              won’t share your personal information without your consent.
            </p>
          </div>
          <div className='about-us__textbox'>
            <Heading2 weight='700'>Expert info</Heading2>
            <p>
              Our objective editorial team mission is to address complicated
              money questions and topics simple to understand and provide
              unbiased and transparent reviews.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
