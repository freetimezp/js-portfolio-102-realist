import React, { useRef } from "react";
import './Agents.css';

import Slider from "react-slick";

import { agents } from "../../sources";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const Agents = () => {
    const ref = useRef(null);

    const settings = {
        Infinity: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        pauseOnHover: true,
        autoplay: true,
        autoplayspeed: 3000,
        centerPadding: 0,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <section id="agents">
            <div className="wrapper">
                <h1 className="heading-1">
                    <span className="gradient-text">Agents</span>
                </h1>

                <Slider {...settings} className='agent__container' ref={ref}>
                    {agents.map((agent, index) => (
                        <React.Fragment key={index}>
                            <div className="profile">
                                <img src={agent.profile} alt="agent" />
                            </div>
                            <h3 className="name">{agent.name}</h3>
                            <div className="flex-center social-container">
                                {agent.socialHandles.map((list, i) => (
                                    <a key={i} href={list.url} className="flex-center icon-wrapper">
                                        {list.icon}
                                    </a>
                                ))}
                            </div>
                        </React.Fragment>
                    ))}
                </Slider>

                <div className="flex-center buttons-container">
                    <button className="btn flex-center" onClick={() => ref.current.slickPrev()}>
                        <FaLongArrowAltLeft />
                    </button>
                    <button className="btn flex-center" onClick={() => ref.current.slickNext()}>
                        <FaLongArrowAltRight />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Agents;
