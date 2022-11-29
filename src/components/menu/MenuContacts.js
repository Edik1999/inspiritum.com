import React from 'react';
import { NavLink } from 'react-router-dom';
import linkedIn from '../../img/sprite/linkedin-logo.svg';
import facebook from '../../img/sprite/facebook.svg'


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
            <li className="linksList__item">
                <a href="https://www.facebook.com/inspiritum.ltd" target="_blank" rel="noopener noreferrer" className="linksList__link linksList__link--social">
                    <img src={facebook} alt="facebook"/>
                </a>
                <a href="https://www.linkedin.com/company/inspiritum-ltd" target="_blank" rel="noopener noreferrer" className="linksList__link linksList__link--social">
                    <img src={linkedIn} alt="Linked In"/>
                </a>
            </li>
        </>
    );
}

export default MenuContacts;
