import React from 'react';
import { NavLink } from 'react-router-dom';
const Header=()=>{
    return(
        <>

        <div className="nav grid grid-cols-3 w-screen overflow-x-hidden bg-black border-[2px] border-white border-l-0 border-t-0 border-r-0 h-[6.2rem]">
            <div className="logo w-[14rem] h-[6rem]">
                <img src={process.env.PUBLIC_URL+ 'images/logo2.png'} className='w-[120px] relative bottom-[19%]' alt="not found" />
            </div>
            <div className="menu  w-[50rem] h-[6.2rem] relative right-[12.5rem] text-white">
                <ul style={{'color':'#4C7584'}}className='navbar flex space-x-16 mt-9'>
                <li>
                    <NavLink to="/" exact activeClassName="active-link">Home</NavLink></li>
                    <li>
                    <NavLink to="/academic"  activeClassName="active-link">Academics</NavLink></li>
                    <li>
                    <NavLink to="/event"  activeClassName="active-link">Events and Gallery</NavLink></li>
                    <li>
                    <NavLink to="/alumni" activeClassName="active-link">Alumni</NavLink></li>
                    <li>
                    <NavLink to="/team" activeClassName="active-link">Team</NavLink></li>
                    <li>
                    <NavLink to="/achieve"  activeClassName="active-link">Achievement</NavLink></li></ul>
            </div>
            <div className="icons flex justify-center space-x-7  border-[2px] border-white relative left-[11rem] h-[4rem] border-t-0 border-r-0 mt-[1rem] mb-[1.5rem]  border-b-0  w-[12rem]">
            <img src={process.env.PUBLIC_URL+"images/icon1.png"} alt="not found" className='w-[22px] h-[25px] relative top-[40%]'/>
            <img src={process.env.PUBLIC_URL+ "images/icon2.png"} alt="not found" className='w-[22px] h-[25px] relative top-[40%] ' />

            </div>
        </div>

        </>
    )
}
export default Header;