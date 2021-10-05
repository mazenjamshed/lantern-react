import './heading.styles.scss';

const Heading1 = (props) => {
  return <h1 className={`heading ${props.size} `}>{props.children}</h1>;
};

export default Heading1;
