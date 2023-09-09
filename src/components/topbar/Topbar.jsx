import React, { useState, useContext, useEffect } from 'react';
import { PiCardsFill } from "react-icons/pi"
import { BiSolidCarousel } from "react-icons/bi"
import { RxSection } from "react-icons/rx"
import { AiFillHome } from "react-icons/Ai"
import { Link, useLocation } from 'react-router-dom';
import { ModeContext } from '../../Context/ModeContext';

import './Topbar.css';
const Topbar = () => {

    const {dayMode, setDayMode} = useContext(ModeContext)
  
    const modeHandler=(e)=>{
        setDayMode(e.target.checked)
        
        
        document.body.style.backgroundColor =  dayMode?'white': '#232020';
        document.body.style.color =  !dayMode && '#232020';


    }

  
    useEffect(() => {
        console.log(dayMode); // This will log the updated dayMode value
    }, [dayMode]);


    const location = useLocation();

    const isActiveLink = (pathname) => {
        return location.pathname === pathname;
      };

    return (
        <div className={!dayMode?'topbar':'topbar darkMode'}>

            <div className="left">
                <Link to='/talenq-task' className='link'>
                    Dashboard
                </Link>
            </div>
            <div className="right">

                <Link to='/talenq-task' className='link'>
                    <div className="navItem"  id={isActiveLink('/talenq-task')?'active':'noid'}>
                        <PiCardsFill /> 
                        <span className='navTitle'>Cards</span>
                    </div>
                </Link>

                <Link to='/talenq-task/banner'  className='link'>
                    <div className="navItem" id={isActiveLink('/talenq-task/banner')?'active':'noid'}>
                        <BiSolidCarousel />
                        <span className='navTitle'>Banners</span>
                        
                    </div>
                </Link>

                <Link to='/talenq-task/section' className='link'>
                    <div className="navItem" id={isActiveLink('/talenq-task/section')?'active':'noid'}>
                        <RxSection />
                        <span className='navTitle'  >Sections</span>
                         
                    </div>
                </Link>

                <label className="ui-switch">
                    <input type="checkbox" onChange={modeHandler}  />
                    <div className="slider">
                        <div className="circle"></div>
                    </div>
                </label>
               

            </div>
        </div>
    )
}

export default Topbar