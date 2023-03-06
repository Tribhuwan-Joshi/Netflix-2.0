import React , {useEffect, useState} from 'react';
import "./Nav.css"
function Nav() {
    const [show,handleShow] = useState(false);
    const transistionNavBar  = () => {
        if(window.scrollY > 100) handleShow(true);
        else handleShow(false);
    }

    useEffect(()=>{
        window.addEventListener("scroll",transistionNavBar);
        return () => window.addEventListener("scroll",transistionNavBar);
    } ,[] );

  return (
    <div className={`nav  ${show?`nav_black`:""} `}>
        <div className="nav_contents">

 <img className='nav_logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix" />
         <img className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix" />

        </div>
       
      
    </div>
  );
}

export default Nav;