import './heading2.styles.scss';

const Heading2 = (props) => {
  return <h2 className={`heading fw-${props.weight} `}>{props.children}</h2>;
};

export default Heading2;
