import React from 'react'
import './stylings/introduction.css'
import erdi from './images/erdi.jpg'
 
 function Introduction() {
   return (
       <div className='intro-section'>
          <img className='erdi-img' src={erdi} alt="profile-image" />   
          <h4>Dear Hiring Manager,</h4>
          <p className='cover-letter'>      
    Please accept this cover letter and attached resume as formal you will see from my
resume, I have just completed my BS in Computer Science from UCLA, and I have a
huge interest in frontend development. I am proficient in C++, Python, Lisp, C#,
OCaml, GIT, and Javascript.
I am originally from a small village in Turkey and the first person in my family to
graduate from college. I worked for several years as a top-rated Airbnb host in
Istanbul and put myself through school upon moving to the United States. As a
result, I have developed a strong work ethic, customer-service mindset, and work
well in multi-cultural and multi-lingual environments. I am also a world-traveler with a
broad perspective and a wide range of capabilities, and I will be an asset to the team.
Thank you for your consideration.
Kindest regards,</p></div>
   )
 }
 
 export default Introduction
