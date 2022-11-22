import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuTechnology = () => {
    return (
        <>
            <li className="linksList__item">
                <NavLink
                    to="/technology/carrier-billing-aggregator-platform"
                    className={({ isActive }) =>
                        isActive ? "linksList__link linksList__link--active" : "linksList__link"
                    }
                >
                    Carrier Billing Aggregator platform
                </NavLink>
            </li>
            <li className="linksList__item">
                <NavLink
                    to="/technology/ad-platform"
                    className={({ isActive }) =>
                        isActive ? "linksList__link linksList__link--active" : "linksList__link"
                    }
                >
                    Ad Platform
                </NavLink>
            </li>
        </>
    );
}

export default MenuTechnology;
