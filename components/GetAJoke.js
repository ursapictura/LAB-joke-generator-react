import { useState } from 'react';
import getJoke from '../api/jokeData';
import Joke from './Joke';

export default function GetAJoke() {
  const [joke, setJoke] = useState([]);
  const [btnText, setBtnText] = useState('Get a joke!');

  const callJoke = () => {
    getJoke().then((jokeObj) => {
      setJoke(jokeObj);
      setBtnText('Get punchline!');
    });
  };

  return (
    <div>
      <Joke joke={joke} btnText={btnText} />
      {btnText === 'Get a joke!' || btnText === 'Get a new joke!'
        ? <button type="button" onClick={callJoke}>{btnText}</button>
        : <button type="button" onClick={() => setBtnText('Get a new joke!')}>{btnText}</button>}
    </div>
  );
}
