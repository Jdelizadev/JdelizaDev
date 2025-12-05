import { Link } from "react-router-dom"
import './NavBar.css'
import tars from '../assets/tars.png'

import { FaEnvelope,  FaGithub, FaHome, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
    return (
        <>
            <nav className="nav">
                <div className="left-nav-items">
                    <Link to={''} className="main-logo">Jdelizadev</Link>
                    
                    <div className="tars-container">
                        <img src={tars} alt="" />
                    </div>
                </div>

                <div  className="main-social-container">

                    <div className="second-social-container fbin">
                            <div  className="social-container">
                            <FaHome className="item"/>
                            </div>
                        <Link to={'/'} className="social">Home</Link>
                    </div>

                    <div className="second-social-container fbin">
                        <div  className="social-container">
                            <FaEnvelope className="item"/>
                        </div>
                            <a href="mailto:jaimedelizaola@gmail.com"
                            className="social">
                            Gmail
                            </a>
                    </div>

                    <div className="second-social-container fbin">
                            <div  className="social-container">
                            <FaLinkedin className="item"/>
                            </div>
                        <a href="https://www.linkedin.com/in/jaime-luis-de-lizaola-b63b26279/"
                        target="blank"
                        rel="noopener noreferrer"
                        className="social">Linkedin</a>
                    </div>
                    
                    <div className="second-social-container">
                            <div  className="social-container">
                            <FaGithub className="item"/>
                            </div>
                        <a href="https://github.com/Jdelizadev"
                        target="blank" 
                        rel="noopener noreferrer"
                        className="social">Github</a>
                    </div>

                </div>
            </nav>
        </>
 )
}

export { NavBar }