import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuContacts = () => {
    return (
        <>
            <li className="linksList__item">
                <NavLink
                    to="/contacts/cyprus"
                    className={({ isActive }) =>
                        isActive ? "linksList__link linksList__link--active" : "linksList__link"
                    }
                >
                    Cyprus
                </NavLink>
            </li>
            <li className="linksList__item">
                <NavLink
                    to="/contacts/singapore"
                    className={({ isActive }) =>
                        isActive ? "linksList__link linksList__link--active" : "linksList__link"
                    }
                >
                    Singapore
                </NavLink>
            </li>
        </>
    );
}

export default MenuContacts;
