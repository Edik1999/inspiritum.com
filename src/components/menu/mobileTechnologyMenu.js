import React from 'react';
import { NavLink } from 'react-router-dom';

const mobileTechnologyMenu = ({element}) => {
    
    return (
        <div className={`${element}__menu menu`}>
            <div className="menu__item item sidesPadding">
                <NavLink
                    to="/technology/carrier-billing-aggregator-platform"
                    className={({ isActive }) =>
                        isActive ? "item__link item__link--active" : "item__link"
                    }
                >
                    Carrier Billing Aggregator platform
                </NavLink>
            </div>
            <div className="menu__item item sidesPadding">
                <NavLink
                    to="/technology/ad-platform"
                    className={({ isActive }) =>
                        isActive ? "item__link item__link--active" : "item__link"
                    }
                >
                    Ad Platform
                </NavLink>
            </div>
        </div>
    );
}

export default mobileTechnologyMenu;
