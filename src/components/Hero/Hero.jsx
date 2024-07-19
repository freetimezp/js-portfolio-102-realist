import { Link } from 'react-scroll';
import './Hero.css';

import heroImage from "../../assets/realist-hero.png";
import Achievements from '../Achievements/Achievements';

const Hero = () => {
    return (
        <header id="hero">
            <div className="wrapper">
                <div className="column">
                    <h1 className="heading-1" data-aos="fade-up">
                        <span className='gradient-text'>
                            Find Your Dream Home with Realist Realty
                        </span>
                    </h1>

                    <p className="muted" data-aos="fade-up" data-aos-delay="200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        impedit beatae minima consequatur provident excepturi sed quo nobis
                        sunt nostrum, at reprehenderit culpa? Cupiditate fuga praesentium
                        architecto iusto debitis dolorum.
                    </p>

                    <Achievements />

                    <div className="flex-center buttons-wrapper">
                        <Link
                            to="contact"
                            smooth={true}
                            className='btn'
                            data-aos="fade-left"
                            data-aos-delay="1200"
                            data-aos-offset="50"
                        >
                            Learn More
                        </Link>
                        <Link
                            to="properties"
                            smooth={true}
                            className='btn primary'
                            data-aos="fade-left"
                            data-aos-delay="1500"
                            data-aos-offset="50"
                        >
                            Explore Properties
                        </Link>
                    </div>
                </div>

                <div className="column hero-image" data-aos="zoom-in" data-aos-delay="1200">
                    <img src={heroImage} alt="hero" />
                </div>
            </div>
        </header>
    );
}

export default Hero;
