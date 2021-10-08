import Heading1 from '../typography/heading/heading.component';

import './credit-card.styles.scss';

const CreditCard = () => {
  return (
    <div className='credit-card'>
      <div className='credit-card__content'>
        <div className='credit-card__img'></div>
        <div className='credit-card__text'>
          <Heading1 size='h2'>Find different credit card options</Heading1>
          <p>
            Quickly see which cards offer the lowest rate, most cash back, or
            sweetest perks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
