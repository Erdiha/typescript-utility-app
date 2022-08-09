import React,{useState} from 'react'
import './stylings/controlpanel.css'
import { SetStateAction } from 'react';

export interface ButtonNames{
   name: string;
   updateName:(arg:string)=>void
}
const ControlPanel:React.FC<ButtonNames> = ({name,updateName})=> {
  const handleClick = (e: any) => {
    updateName(e.target.value) 
  }
  return (
      <div  className='control-section'>
      <button
        onClick={handleClick}
        value="intro"
        className='btn btn-intro'>Intro
      </button>
      <button
        onClick={handleClick}
        value="calculator"
        className='btn btn-calculator'>Calculator
      </button>
      <button
        onClick={handleClick}
        value="weather"
        className='btn btn-weather'>Weather
      </button>
      <button
        onClick={handleClick}
        value="trivia"
        className='btn btn-trivia'>Trivia
      </button>
      </div>
  )
}
export default ControlPanel
