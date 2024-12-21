import React from 'react'
import TextInputFormContainer from '../components/TextInputForm/TextInputFormContainer'
import { Link } from 'react-router-dom'

const StartGame = () => {
  return (
   <>
   <h1>Start Game</h1>
   <TextInputFormContainer/>
   <Link to='/play' className='text-blue-400'>Play Game Link</Link>
   </>
  )
}

export default StartGame;
