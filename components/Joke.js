import { PropTypes } from 'prop-types';

export default function Joke({ joke, btnText }) {
  return (
    <>
      {btnText === 'Get punchline!'
        ? <h3>{joke.setup}</h3>
        : <h3>{joke.delivery}</h3>}
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
