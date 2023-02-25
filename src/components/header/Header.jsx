import React from 'react'
import "./header.css";
import logo from "../../assets/play-button.png";
import { BsFillCaretDownFill } from "react-icons/bs";
import ellipsis from "../../assets/ellipsis.png";
const Header = () => {




    return (
        <header className="header">
            <nav className="nav max-width">
                <div>

                    <div className="left__division">
                        <div className="left">
                            <img src={logo} alt="logo" width="35" />
                        </div>
                        <div className="right">
                            <ul className="nav__list grid">
                                <li className="nav__item">
                                    <a href="#home" className="nav__link">
                                        Product <BsFillCaretDownFill />
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a href="#about" className="nav__link">
                                        Key Features
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a href="#skills" className="nav__link">
                                        Why Wetrack <BsFillCaretDownFill />
                                    </a>
                                </li>

                                <li className="nav__item">
                                    <a href="#projects" className="nav__link">
                                        Applications <BsFillCaretDownFill />
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a href="#qualification" className="nav__link">
                                        Careers
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a href="#contact" className="nav__link">
                                        Pricing
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className='nav__last'>
                    <div className="img__ellipsis">
                        <img src={ellipsis} alt="dot" />
                    </div>
                    <div className='nav__last1'>
                        <a href="#">Login</a>
                    </div>
                    <div className='nav__last2'>
                        <a href="#">Try For Free</a>
                    </div>
                </div>


            </nav>
        </header>
    )
}

export default Header

