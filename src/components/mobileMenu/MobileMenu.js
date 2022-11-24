import React from 'react';
import { NavLink } from 'react-router-dom';

const mobileTechnologyMenu = ({elements, activeClass}) => {
    
    return (
        <div className={`${activeClass}__menu menu`}>
            <div className="menu__item item sidesPadding">
                <NavLink
                    to={elements.item1.link}
                    className={({ isActive }) =>
                        isActive ? "item__link item__link--active" : "item__link"
                    }
                >
                    {elements.item1.title}
                </NavLink>
            </div>
            <div className="menu__item item sidesPadding">
                <NavLink
                    to={elements.item2.link}
                    className={({ isActive }) =>
                        isActive ? "item__link item__link--active" : "item__link"
                    }
                >
                    {elements.item2.title}
                </NavLink>
            </div>
        </div>
    );
}

export default mobileTechnologyMenu;
