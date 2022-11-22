import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuAbout = () => {
    return (
        <>
            <li className="linksList__item">
                <NavLink
                    to="/mobile-offers"
                    className={({ isActive }) =>
                        isActive ? "linksList__link linksList__link--active" : "linksList__link"
                    }
                >
                    Mobile Offers
                </NavLink>
            </li>
            <li className="linksList__item">
                <NavLink
                    to="/carrier-billing-aggregator"
                    className={({ isActive }) =>
                        isActive ? "linksList__link linksList__link--active" : "linksList__link"
                    }
                >
                    Carrier Billing Aggregator
                </NavLink>
            </li>
            <li className="linksList__item">
                <NavLink
                    to="/media-buying-team"
                    className={({ isActive }) =>
                        isActive ? "linksList__link linksList__link--active" : "linksList__link"
                    }
                >
                    Media Buying Team
                </NavLink>
            </li>
        </>
    );
}

export default MenuAbout;
