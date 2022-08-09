import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Introduction from './components/Introduction';
import ControlPanel from './components/ControlPanel';
import Calculator from './components/Calculator';
import Weather from './components/Weather';
import Trivia from './components/Trivia';
import NavigationItems  from './components/NavigationItems';
const App:React.FC=()=> {
  
  const [componentName,SetComponentName] =useState<string>("home")
  const updateName = (name: string): void => {
    SetComponentName(name)
  }
  const Greet=()=>{
    return <div className='greet'><p>
      Hi! Welcome to my page. You can navigate through 
      the site via side buttons or
      you can use navigation buttons to learn more!</p>
    </div>
  }
  return (
    <div className="App">
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
