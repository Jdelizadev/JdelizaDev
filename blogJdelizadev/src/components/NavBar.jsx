import { Link } from "react-router-dom"
import './NavBar.css'
import tars from '../assets/tars.png'

import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

const NavBar = () => {
    return (
        <>
            <nav className="nav">
                <div className="left-nav-items">
                    <Link className="main-logo">Jdelizadev</Link>
                    
                    <div className="tars-container">
                        <img src={tars} alt="" />
                    </div>
                </div>

                <div  className="main-social-container">

                    <div className="second-social-container fbin">
                        <div  className="social-container">
                            <FaInstagram className="item"/>
                        </div>
                            <Link className="social">
                            Insta
                            </Link>
                    </div>

                    <div className="second-social-container fbin">
                            <div  className="social-container">
                            <FaFacebook className="item"/>
                            </div>
                        <Link className="social">Facebook</Link>
                    </div>
                    
                    <div className="second-social-container">
                            <div  className="social-container">
                            <FaGithub className="item"/>
                            </div>
                        <Link className="social">Github</Link>
                    </div>

                </div>
            </nav>
        </>
    )
}

export { NavBar }