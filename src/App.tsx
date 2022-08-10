import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Introduction from './components/Introduction';
import ControlPanel from './components/ControlPanel';
import Calculator from './components/Calculator';
import Weather from './components/Weather';
import Trivia from './components/Trivia';
import NavigationItems from './components/NavigationItems';
import retro from '../src/assets/retro.jpg'

const App:React.FC=()=> {
  
  const [componentName, SetComponentName] = useState<string>("home")
  
  const updateName = (name: string): void => {
    SetComponentName(name)
  }
  const Greet=()=>{
    return <div className='greet'><p>
      Oh hi!
      <br />
      Erdi here. Navigate through my website to learn more about me, calculate something, check the weather, and random trivia!</p>
    </div>
  }
  return (
    <div className="App">
       <img id='retro-img' src={retro} alt="" />
    <div id="header" > <Header 
        name={ componentName }
        updateName={updateName} /></div>
      <div id='control-wrapper'><ControlPanel
        name={componentName}
        updateName={updateName} /></div>
      <div id='main-card'>
       
        {componentName === "home" && <Greet/>}
        {componentName === "intro" && <Introduction />}
        {componentName === "calculator" && <Calculator />}
        {componentName === "weather" && <Weather />}
        {componentName === "trivia" && <Trivia/>}
        {<NavigationItems name={componentName} />}
      </div>
      <div id="footer-wrapper"> <Footer /> </div>
    </div>
    
  );
}

export default App;
