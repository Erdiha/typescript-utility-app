import React,{useState} from 'react'
import './stylings/controlpanel.css'
import { SetStateAction } from 'react';

export interface ButtonNames{
   name: string;
   updateName:(arg:string)=>void
}
const ControlPanel: React.FC<ButtonNames> = ({ name, updateName }) => {
  const btnNames: string[] = ['intro', 'calculator', 'weather', 'trivia'];
  const allButtons: any = document.querySelectorAll(".btn")!;
 
  const handleClick = (e: any) => {
    const item: any = e.target;
    updateName(item.value) 
   
    document.body.addEventListener("click", (ev: any) => {
      //const getAttr:any = this.getAttribute
      console.log(name, ev.target.value)
      for (let i = 0; i < allButtons.length; i++) {
      //console.log(item.value)
        if (ev.target.value !== undefined) {
           if (item.value === allButtons[i].value) {allButtons[i].classList.add("focus");}
          else {allButtons[i].classList.remove("focus")}
        }
        else {allButtons[i].classList.remove("focus")}
      };
    });
    
  };
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
