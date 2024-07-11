import { useState } from "react";

import { Link } from "react-scroll";
import './Navbar.css';

import { tabs } from "../../sources";
import { HiMenu } from "react-icons/hi";

import Logo from "../Logo/Logo";
import Socials from "../Socials/Socials";

const Navbar = () => {
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <nav className='navbar flex'>
            {openSidebar ? (
                <div className="overlay" onClick={() => setOpenSidebar(!openSidebar)} />
            ) : ''}

            <Logo />

            <div className={`box flex-center tabs-group sidebar ${openSidebar ? 'visible' : ''}`}>
                {tabs.map((tab, index) => (
                    <Link
                        key={index}
                        to={tab.id}
                        smooth={true}
                        offset={-70}
                        spy={true}
                        className="tab"
                        activeClass="active"
                        onClick={() => setOpenSidebar(false)}
                    >
                        {tab.name}
                    </Link>
                ))}
            </div>

            <Socials />

            <div className="box flex-center buttons">
                <Link to="services" smooth={true} className="btn services-btn">
                    Services
                </Link>

                <Link to="contact" smooth={true} className="btn primary contact-btn">
                    Contact Us
                </Link>

                <div className="flex-center icon-wrapper menu-btn" onClick={() => setOpenSidebar(!openSidebar)}>
                    <HiMenu />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
