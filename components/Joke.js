import { PropTypes } from 'prop-types';

export default function Joke({ joke, btnText }) {
  return (
    <>
      <h3>{joke.setup}</h3>
      {btnText === 'Get punchline!'
        ? ''
        : <h4>{joke.delivery}</h4>}
    </>
  );
}

Joke.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string.isRequired,
    delivery: PropTypes.string.isRequired,
  }).isRequired,
  btnText: PropTypes.shape({
    setup: PropTypes.string.isRequired,
    delivery: PropTypes.string.isRequired,
  }).isRequired,
};
