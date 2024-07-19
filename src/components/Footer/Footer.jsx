import './Footer.css';

import { contactOptions, footer } from '../../sources';

import footerImage from "../../assets/realist-footer.png";
import Logo from '../Logo/Logo';
import Socials from '../Socials/Socials';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer id="footer" data-aos="zoom-out" data-aos-delay="500">
            <div className="wrapper">
                <div className="contact-options">
                    {contactOptions.map((option, index) => (
                        <div key={index} className='flex-center option'>
                            <div className="flex-center icon-wrapper">{option.icon}</div>
                            <h4 className="muted title">{option.title}</h4>
                            <h3 className="value">{option.value}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bottom-row">
                <div className="wrapper">
                    <div className="column">
                        <Logo />

                        <div className="footer-image">
                            <img src={footerImage} alt="footer" />
                        </div>

                        <Socials />
                    </div>

                    {footer.map((list, index) => (
                        <div className="column" key={index}>
                            <h3 className="muted title">{list.title}</h3>
                            {list.routes.map((route, i) => (
                                <Link key={i} to={route.id || ""} smooth={true} className='route'>
                                    {route.name}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="flex-center copyright">
                    <h4>&copy; Freetime 2024. All Rights Reserved.</h4>
                    <p className="muted">Have a nice day!</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
