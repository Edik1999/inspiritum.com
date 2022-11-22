import React from 'react';
import { NavLink } from 'react-router-dom';


const MenuDefault = () => {
    return (
        <>
            <li className="linksList__item">
                <NavLink
                    to="/for-publishers-and-affiliate-networks"
                    className={({ isActive }) =>
                        isActive ? "linksList__link linksList__link--active" : "linksList__link"
                    }
                >
                    Publishers & Affiliate Networks
                </NavLink>
            </li>
            <li className="linksList__item">
                <NavLink
                    to="/for-ad-networks"
                    className={({ isActive }) =>
                        isActive ? "linksList__link linksList__link--active" : "linksList__link"
                    }
                >
                    Ad Networks
                </NavLink>
            </li>
            <li className="linksList__item">
                <NavLink
                    to="/for-mobile-network-operators"
                    className={({ isActive }) =>
                        isActive ? "linksList__link linksList__link--active" : "linksList__link"
                    }
                >
                    Mobile Network Operators
                </NavLink>
            </li>
            <li className="linksList__item">
                <NavLink
                    to="/for-carrier-billing-aggregators"
                    className={({ isActive }) =>
                        isActive ? "linksList__link linksList__link--active" : "linksList__link"
                    }
                >
                    Carrier Billing Aggregators
                </NavLink>
            </li>
            <li className="linksList__item">
                <NavLink
                    to="/for-content-and-offer-owners"
                    className={({ isActive }) =>
                        isActive ? "linksList__link linksList__link--active" : "linksList__link"
                    }
                >
                    Content & Offer owners
                </NavLink>
            </li>
        </>
    );
}

export default MenuDefault;
