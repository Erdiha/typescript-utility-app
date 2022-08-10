import React from 'react'
import './stylings/introduction.css'
import erdi from '../assets/erdi.jpg'
 
 function Introduction() {
   return (
       <div className='intro-section'>
          <img className='erdi-img' src={erdi} alt="profile-image" />   
       <h4></h4>
     
          <p className='cover-letter'>      
    My name is Erdi Haciogullari. I recently graduated from UCLA with a BS in Computer Science,
and am now seeking employment opportunities in frontend development. I am proficient in C++, Python, Lisp, C#,
            OCaml, GIT, and Javascript.<br>
            </br><br>
            </br>
I am originally from a small village in Turkey and the first person in my family to
graduate from college. I worked for several years as a top-rated Airbnb host in
Istanbul and put myself through school upon moving to the United States. As a
result, I have developed a strong work ethic, customer-service mindset, and work
well in multi-cultural and multi-lingual environments. I am also a world-traveler with a
            broad perspective and a wide range of capabilities. I am ready to both learn and prove myself an asset to any team.<br>
            </br><br>
            </br>
 Besides creating digital experiences and traveling, I enjoy watching movies with my husband, discovering new music, and running around the house with my beautiful Basenji pup, Brenda. </p></div>
   )
 }
 
 export default Introduction
