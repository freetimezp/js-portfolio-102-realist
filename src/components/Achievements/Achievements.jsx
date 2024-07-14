import { useState, useEffect } from "react";
import Odometer from "react-odometerjs";
import "./Achievements.css";

import { FaUsersLine, FaBuilding, FaAward } from "react-icons/fa6";

const Achievements = () => {
    const [clients, setClients] = useState(0);
    const [properties, setProperties] = useState(0);
    const [awards, setAwards] = useState(0);

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setClients(350);
            setProperties(25);
            setAwards(89);
        }, 3000);

        return () => clearTimeout(timeOutId);
    }, []);

    return (
        <div className="achievements-container">
            <div className="card">
                <div className="flex details">
                    <div className="flex-center icon-wrapper">
                        <FaUsersLine />
                    </div>

                    <div className="flex-center">
                        <Odometer value={clients} className="title" />
                        <h1 className="title">+</h1>
                    </div>
                </div>

                <small className="muted">Happy Customers</small>
            </div>

            <div className="card">
                <div className="flex details">
                    <div className="flex-center icon-wrapper">
                        <FaBuilding />
                    </div>

                    <div className="flex-center">
                        <Odometer value={properties} className="title" />
                        <h1 className="title">k+</h1>
                    </div>
                </div>

                <small className="muted">Properties</small>
            </div>

            <div className="card">
                <div className="flex details">
                    <div className="flex-center icon-wrapper">
                        <FaAward />
                    </div>

                    <div className="flex-center">
                        <Odometer value={awards} className="title" />
                        <h1 className="title">+</h1>
                    </div>
                </div>

                <small className="muted">Awards Winnings</small>
            </div>
        </div>
    );
}

export default Achievements;
