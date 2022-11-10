import {NavLink, Link} from 'react-router-dom';
import '../styles/menuLayer.sass';


const MenuLayer = ({menuState, closeMenu}) => {
    return (
        <div className={`menuLayer ${menuState ? 'active' : ''}`}>
            <div className="menuLayer__nav nav sidesPadding">
                <span className="nav__title">
                    Solutions for
                </span>
                <ul className="nav__list list">
                    <li className="list__item">
                        <NavLink 
                            onClick={() => closeMenu()}
                            className={({ isActive }) => 
                                isActive ? "item item--active" : "item" 
                            }
                            to="/for-publishers-and-affiliate-networks"
                        >
                            Publishers & Affiliate Networks
                        </NavLink>
                    </li>
                    <li className="list__item">
                        <NavLink 
                            onClick={() => closeMenu()}
                            className={({ isActive }) => 
                                isActive ? "item item--active" : "item" 
                            }
                            to="/for-ad-networks"
                        >
                            Ad Networks
                        </NavLink>
                    </li>
                    <li className="list__item">
                        <NavLink 
                            onClick={() => closeMenu()}
                            className={({ isActive }) => 
                                isActive ? "item item--active" : "item" 
                            }
                            to="/for-mobile-network-operators"
                        >
                            Mobile Network Operators
                        </NavLink>
                    </li>
                    <li className="list__item">
                        <NavLink 
                            onClick={() => closeMenu()}
                            className={({ isActive }) => 
                                isActive ? "item item--active" : "item" 
                            }
                            to="/for-carrier-billing-aggregators"
                        >
                            Carrier Billing Aggregators
                        </NavLink>
                    </li>
                    <li className="list__item">
                        <NavLink 
                            onClick={() => closeMenu()}
                            className={({ isActive }) => 
                                isActive ? "item item--active" : "item" 
                            }
                            to="/for-content-and-offer-owners"
                        >
                            Content & Offer owners
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="menuLayer__nav nav sidesPadding">
                <span className="nav__title">
                    About us
                </span>
                <ul className="nav__list list">
                    <li className="list__item">
                        <NavLink 
                            onClick={() => closeMenu()}
                            className={({ isActive }) => 
                                isActive ? "item item--active" : "item" 
                            }
                            to="/mobile-offers"
                        >
                            Mobile Offers
                        </NavLink>
                    </li>
                    <li className="list__item">
                        <NavLink 
                            onClick={() => closeMenu()}
                            className={({ isActive }) => 
                                isActive ? "item item--active" : "item" 
                            }
                            to="/carrier-billing-aggregator"
                        >
                            Carrier Billing Aggregator
                        </NavLink>
                    </li>
                    <li className="list__item">
                        <NavLink 
                            onClick={() => closeMenu()}
                            className={({ isActive }) => 
                                isActive ? "item item--active" : "item" 
                            }
                            to="/media-buying-team"
                        >
                            Media Buying Team
                        </NavLink>
                    </li>
                </ul>
                <ul className="nav__list list list--small-mt">
                    <li className="list__item">
                        <NavLink 
                            onClick={() => closeMenu()}
                            className={({ isActive }) => 
                                isActive ? "item item--active" : "item" 
                            }
                            to="/technology"
                        >
                            Technology
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="menuLayer__nav nav sidesPadding">
                <ul className="nav__list list list--large-mt">
                    <li className="list__item">
                        <NavLink 
                            onClick={() => closeMenu()}
                            className={({ isActive }) => 
                                isActive ? "item item--active" : "item" 
                            }
                            to="/news"
                        >
                            News
                        </NavLink>
                    </li>
                    <li className="list__item">
                        <NavLink 
                            onClick={() => closeMenu()}
                            className={({ isActive }) => 
                                isActive ? "item item--active" : "item" 
                            }
                            to="/contacts"
                        >
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="menuLayer__footer sidesPadding">
                <Link onClick={() => closeMenu()} to="/feedback">Feedback</Link>
            </div>
        </div>
    );
}

export default MenuLayer;
