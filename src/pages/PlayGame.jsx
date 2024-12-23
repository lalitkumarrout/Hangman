import React from 'react'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
import MaskedText from '../components/MaskedText/MaskedText';

const PlayGame = () => {

  // const[searchparams] =useSearchParams();
  // console.log(searchparams.get('text'));
  const {state}=useLocation();

  
  return (
   <>
   <h1>Play Game {state.wordSelected}</h1>
   <MaskedText text={state.wordSelected} guessedLetters={['H','E']}/>
   <Link to='/Start' className='text-blue-400'>Start Game Link</Link>
   </>
  )
}

export default PlayGame
