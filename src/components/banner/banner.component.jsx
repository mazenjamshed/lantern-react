import Heading1 from '../typography/heading/heading.component';
import './banner.styles.scss';
const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner__left'>
        <Heading1 size='h2' accent>
          Check your score with SoFi Relay
        </Heading1>
        <p>
          Track your credit score for free. Sign up and get 100 SoFi Reward
          points.
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default Banner;
