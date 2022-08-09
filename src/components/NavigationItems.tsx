import React from 'react';
import "./stylings/navigationitems.css"
export interface ButtonNames{
   name: string;
};

const NavigationItems:React.FC<ButtonNames> = ({name}) => {
    return (
        <>
        {name ==="work" && <div className='navi-items work-wrapper'>
            <a  target="_blank"  href="https://www.linkedin.com/in/erdi-haciogullari-919246222/"> LinkedIn</a>
            <a  target="_blank" href="https://github.com/Erdiha">GitHub</a>
            <a  target="_blank" href="https://app.joinhandshake.com/stu/users/18554836">HandShake</a>
        </div>  }
        {name ==="contact" && <div className='navi-items contact-wrapper'>
        <p>For any feedback or get in touch please send an email!</p>
        <a href = "mailto: erdihaci@g.ucla.edu">Send An Email</a>
        </div>  }
        {name ==="about" && <div className='navi-items about-wrapper'>
            <p> Welcome to my quirky retro website! I tried to create a site that is fun,
                and informative. The technologies I used in this website are:
                    <br />
                <b>React, Typescript, vanilla CSS, react hooks, HTML.</b>
                 </p>
            </div>}
        </>
    )
};
export default NavigationItems