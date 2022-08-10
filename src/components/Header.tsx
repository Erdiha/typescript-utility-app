import React from 'react'
 interface ButtonNames{
   name: string;
   updateName:(arg:string)=>void
}
const Header:React.FC<ButtonNames>=({name,updateName})=> {
    const handleClick = (e: any) => {
        e.preventDefault();
        updateName(e.target.id)
        //console.log(e.target.id)
  }
    return (
        <div className='nav-wrapper'>
            <span id='home'  onClick={handleClick} className='icon'>Erdi Haciogullari</span>
            <nav>
                <ul id='nav-items'>
                    <li className='list-item'>
                        <a id='work'  onClick={handleClick} >Work</a>
                    </li>
                    <li className='list-item'>
                        <a id='contact'  onClick={handleClick} >Contact</a>
                    </li>
                    <li className='list-item'>
                        <a id='about' onClick={handleClick} >About</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header