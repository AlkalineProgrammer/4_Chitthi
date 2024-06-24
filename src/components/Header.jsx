import React from 'react'
import { IoMdHelpCircle } from "react-icons/io";
import { PiDiamondsFourBold } from "react-icons/pi";
import "./css/Header.css"
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
            <div className='left_side'>
                <PiDiamondsFourBold size={70}/>
                <Link to={"/"} className='logo_text'>4 Chitthi</Link>
            </div>
            <div className='right_side'>
                <span className='text'>About</span>
                <div><IoMdHelpCircle size={40} /></div>
            </div>
        </div>
    )
}

export default Header