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
        <p>Get in touch!</p>
        <a href = "mailto: erdihaci@g.ucla.edu">Send an Email</a>
        </div>  }
        {name ==="about" && <div className='navi-items about-wrapper'>
            <p> Welcome to my website! I hope you find it fun and informative. The technologies I have used on this site are:
                    <br />
                <b>React, NodeJS, Express, Axios, Typescript, Vanilla CSS, react hooks, HTML.</b>
                 </p>
            </div>}
        </>
    )
};
export default NavigationItems