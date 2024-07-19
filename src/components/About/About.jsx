import './About.css';

import aboutImage from "../../assets/about-image.jpeg";

import { whyChooseUs } from "../../sources";

const About = () => {
    return (
        <section id="about">
            <div className="wrapper">
                <div className="column">
                    <div className="picture" data-aos="fade-right">
                        <img src={aboutImage} alt="about" />
                    </div>
                </div>
                <div className="column">
                    <h1 className="heading-1" data-aos="fade-left">
                        <span className="gradient-text">About Us</span>
                    </h1>
                    <p className='muted' data-aos="fade-left">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                        atque eligendi quos molestias perspiciatis repellendus iusto quia
                        repellat saepe laudantium nostrum doloremque quod minima non natus
                        incidunt totam veritatis nisi officiis ratione aliquam, deserunt pariatur.
                    </p>

                    <div className="group">
                        {whyChooseUs.map((list, index) => (
                            <div className="flex-center group-item" key={index} data-aos="fade-right">
                                <div className="flex-center icon-wrapper">
                                    {list.icon}
                                </div>

                                <h4 className="title">{list.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
