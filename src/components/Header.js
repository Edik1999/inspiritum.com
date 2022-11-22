import '../styles/header.sass'
import { NavLink } from 'react-router-dom';
import MenuLayer from './MenuLayer';
import MenuAbout from './menu/MenuAbout';
import MenuDefault from './menu/MenuDefault';
import MenuTechnology from './menu/MenuTechnology';
import MenuContacts from './menu/MenuContacts';


const Header = ({ uiTheme, closeMenu, menuState, subtitle = 'Solutions for', clickHandler, bp, location }) => {

    let activeMenu = <MenuDefault />;
    let locationString = location.split('/', 2);

    if (location === '/mobile-offers' || location === '/carrier-billing-aggregator' || location === '/media-buying-team') {
        subtitle = 'About us';
        activeMenu = <MenuAbout />;
    } else if (location === '/technology/carrier-billing-aggregator-platform' || location === '/technology/ad-platform'){
        subtitle = 'Technology';
        activeMenu = <MenuTechnology />;
    } else if (location === '/news'){
        subtitle = 'News';
        activeMenu = <></>;
    } else if (locationString[1] === 'news' || location === '/feedback'){
        subtitle = '';
        activeMenu = <></>;
    } else if (location === '/contacts/cyprus' || location === '/contacts/singapore'){
        subtitle = 'Contacts';
        activeMenu = <MenuContacts />;
    }

    return (
        <header className={`header sidesPadding ${uiTheme} ${menuState ? "bg-transparent" : ""}`}>
            <div className={`lines ${!uiTheme || menuState ? "hidden" : ""}`}></div>
            <div className={`logo ${bp === 'mobile' && menuState ? 'hidden' : ''}`}>
                <NavLink to="/" onClick={() => closeMenu()}>
                    <svg><path className={menuState ? 'white' : 'dark'} fill="#ffffff" d="M114.385 23.5v-6.814c0-.278-.005-.56-.014-.848-.008-.287-.012-.57-.012-.848-.02-.167-.037-.348-.055-.543a3.624 3.624 0 0 0-.082-.514 4.76 4.76 0 0 0-.162-.417 1.64 1.64 0 0 0-.34-.487 1.855 1.855 0 0 0-.572-.39c-.228-.102-.513-.153-.858-.153-.11 0-.277.014-.504.042-.227.027-.468.134-.722.32-.436.314-.7.745-.79 1.292-.09.547-.127 1.293-.108 2.238v7.12h-4.085v-8.12c-.02-.464-.065-.92-.137-1.364-.074-.444-.31-.824-.713-1.14a2.206 2.206 0 0 0-.453-.25c-.21-.092-.47-.14-.78-.14-.458 0-.878.122-1.262.363a1.937 1.937 0 0 0-.59.666c-.136.26-.232.56-.287.904a8.71 8.71 0 0 0-.096 1.195c-.01.455-.013.96-.013 1.516v6.37h-4.003V9.094h4.002v1.918c.145-.26.38-.593.7-1 .32-.408.83-.742 1.525-1.002.13-.036.344-.087.647-.152a4.775 4.775 0 0 1 1.003-.097c.128 0 .325.015.59.043a4.9 4.9 0 0 1 .867.18c.31.093.632.242.962.445a3.507 3.507 0 0 1 1.252 1.391c.082.165.142.295.18.388.09-.148.167-.27.23-.362.065-.092.15-.212.26-.36.13-.15.3-.32.52-.515.22-.194.488-.38.807-.556.32-.176.683-.324 1.093-.444.41-.12.88-.18 1.41-.18.254 0 .513.013.778.04.264.028.524.09.78.18.182.057.41.15.683.28.273.13.556.31.847.542.29.232.56.533.807.903.246.37.423.825.533 1.363.055.24.09.477.11.71.017.23.03.49.04.777.01.288.018.612.028.974.01.36.015.782.015 1.264V23.5h-4.03zm-19.928-2.19a6.62 6.62 0 0 1-.7.827c-.282.29-.634.56-1.054.813-.42.252-.92.457-1.494.617a7.427 7.427 0 0 1-1.96.238c-.622 0-1.24-.07-1.85-.21a6.414 6.414 0 0 1-1.7-.645c-.52-.29-.987-.66-1.4-1.107-.41-.45-.725-.99-.944-1.626a4.51 4.51 0 0 1-.247-.903 11.759 11.759 0 0 1-.124-.932l-.07-.765a7.19 7.19 0 0 1-.026-.403V9.067h4.002v8.48c0 .075.004.228.013.46.01.232.05.468.124.71.145.518.4.92.766 1.21.366.286.813.43 1.343.43.475-.02.85-.102 1.123-.25.274-.15.475-.297.603-.446.165-.184.288-.402.37-.652.083-.25.142-.487.18-.71.035-.222.053-.416.053-.583v-8.65h4.002v7.925c0 .816-.055 1.567-.165 2.252-.11.686-.393 1.375-.85 2.066zM78.915 23.5h-4.03V12.21H72.83V9.094h2.056V4.812h4.03v4.283h2.028v3.114h-2.03V23.5zM66.937 9.094h4.002V23.5h-4.003V9.094zm-2.398 3.448a4.859 4.859 0 0 0-.59-.028h-.26c-.157 0-.307.01-.454.028a8.16 8.16 0 0 0-.41.097 3.07 3.07 0 0 0-.59.223c-.21.102-.416.245-.617.43a2.081 2.081 0 0 0-.494.723c-.092.205-.16.404-.206.598a4.358 4.358 0 0 0-.096.654c-.018.24-.032.51-.04.806-.01.297-.015.65-.015 1.057-.02.28-.028.557-.028.835V23.5h-4.14V9.094h3.948v2.363c.055-.148.146-.357.274-.625.128-.27.32-.56.576-.876a2.966 2.966 0 0 1 .713-.612c.182-.13.387-.232.616-.306.228-.075.442-.126.644-.154a6.548 6.548 0 0 1 .878-.068c.31 0 .537.018.684.055l-.027 3.726a5.214 5.214 0 0 0-.37-.055zM50.38 9.095h4.003V23.5H50.38V9.094zm-2.014 9.857a8.957 8.957 0 0 1-.726 1.863c-.33.64-.795 1.22-1.398 1.738l-.535.404c-.21.157-.466.3-.767.43-.302.13-.645.24-1.028.334-.384.094-.814.14-1.29.14-.108 0-.273-.004-.492-.014-.22-.01-.475-.04-.768-.097-.584-.13-1.04-.307-1.37-.53-.33-.222-.695-.546-1.096-.972v5.755h-4.03V9.095h3.92v1.696c.09-.11.192-.24.3-.388.11-.15.22-.27.33-.362.256-.26.658-.542 1.206-.848.548-.306 1.28-.46 2.193-.46.676 0 1.275.094 1.796.28.522.185.974.412 1.358.68.383.27.694.552.932.85.237.295.43.546.575.75.292.482.52.986.685 1.515.165.528.283 1.024.357 1.488.073.463.12.875.137 1.237.018.362.027.617.027.765 0 .204-.013.547-.04 1.03a8.61 8.61 0 0 1-.274 1.625zm-3.92-4.463c-.1-.5-.306-.965-.616-1.39-.476-.687-1.143-1.03-2.002-1.03-.164 0-.402.028-.712.083-.31.056-.63.214-.96.473-.42.316-.744.756-.973 1.32-.23.567-.333 1.368-.315 2.406 0 .594.06 1.205.178 1.835.12.63.416 1.16.89 1.586.257.24.535.412.837.514a3.011 3.011 0 0 0 1.371.125c.192-.018.397-.074.616-.167.512-.24.946-.704 1.302-1.39.357-.686.535-1.63.535-2.836 0-.52-.05-1.03-.15-1.53zm-11.608 6.806c-.147.28-.307.51-.48.697a7.198 7.198 0 0 1-.48.473 4.957 4.957 0 0 1-1.398.85 8.55 8.55 0 0 1-1.425.433 7.294 7.294 0 0 1-1.22.152c-.356.01-.6.014-.726.014-.148 0-.436-.01-.865-.028a8.722 8.722 0 0 1-1.48-.21 7.795 7.795 0 0 1-1.713-.596 4.683 4.683 0 0 1-1.563-1.224 7.482 7.482 0 0 1-.467-.653c-.2-.306-.365-.69-.493-1.154a3.834 3.834 0 0 1-.15-.89c-.01-.26-.015-.453-.015-.583l3.838-.14c.055.316.1.562.137.738.037.176.1.338.192.486.184.354.482.64.896.863.413.223 1.015.334 1.806.334.717 0 1.236-.125 1.557-.375.323-.25.484-.58.484-.987 0-.074-.018-.18-.055-.32a1.11 1.11 0 0 0-.248-.43c-.202-.205-.505-.358-.908-.46-.404-.102-.733-.19-.99-.264-.477-.11-.944-.222-1.402-.333-.46-.11-.926-.232-1.403-.36-.24-.075-.55-.182-.936-.32a4.103 4.103 0 0 1-1.14-.655c-.377-.296-.703-.695-.977-1.195-.276-.5-.413-1.14-.413-1.92 0-.166.023-.444.07-.833.044-.39.187-.797.425-1.224.182-.334.42-.65.714-.945.293-.297.665-.56 1.114-.793.45-.23.976-.417 1.58-.556.606-.14 1.303-.21 2.092-.21.164 0 .435.01.81.03.376.018.798.082 1.265.192.467.11.952.285 1.455.523.502.24.963.58 1.384 1.02.146.147.333.382.562.703.228.322.415.75.562 1.29a5.666 5.666 0 0 1 .137 1.11l-3.783.168c-.02-.036-.046-.17-.083-.403-.038-.23-.11-.45-.22-.653-.15-.24-.4-.468-.76-.68-.36-.214-.85-.32-1.475-.32-1.306 0-1.958.4-1.958 1.197 0 .057.01.145.027.266.018.12.082.228.192.32.11.112.26.21.452.293.192.083.397.157.617.222.22.065.43.12.63.167.2.046.374.08.52.097 1.207.26 2.176.506 2.907.738.73.233 1.334.535 1.81.906.346.28.625.573.835.88.21.306.36.603.452.89.09.29.15.558.177.81.028.25.04.45.04.6 0 .482-.05.91-.15 1.28-.1.373-.223.697-.37.976zM14.91 15.963c0-.278.005-.574.015-.89.01-.315-.01-.62-.055-.918a2.845 2.845 0 0 0-.26-.834 1.731 1.731 0 0 0-.598-.666c-.11-.074-.264-.157-.464-.25s-.454-.14-.762-.14c-.6.02-1.06.18-1.377.487-.318.307-.532.553-.64.738a3.41 3.41 0 0 0-.218.57 3.325 3.325 0 0 0-.11.654c-.018.24-.03.51-.04.806-.01.297-.014.64-.014 1.03v6.95H6.304V9.096h3.974v1.64c.127-.148.282-.324.464-.528.182-.204.464-.435.847-.695a5.03 5.03 0 0 1 1.243-.57c.41-.12.86-.18 1.352-.18.182 0 .437.018.765.055a4.69 4.69 0 0 1 2.214.89c.382.278.728.66 1.04 1.14.235.37.413.756.532 1.154.118.4.2.803.245 1.21.047.408.07.82.07 1.237V23.5h-4.14v-7.537zM0 9.095h4V23.5H0V9.094zm125.886 10.143c1.167 0 2.114.95 2.114 2.122s-.947 2.122-2.114 2.122c-1.168 0-2.115-.95-2.115-2.122s.948-2.122 2.116-2.122zM2.115 0C3.282 0 4.23.95 4.23 2.122s-.95 2.122-2.116 2.122C.947 4.244 0 3.294 0 2.122S.947 0 2.115 0z"></path></svg>
                </NavLink>
            </div>
            <div className='menu leftSidePadding'>
                <span className={`menu__title ${menuState ? 'hidden' : ''}`}>{subtitle}</span>
                <button
                    className={`menu__button ${menuState ? 'active' : ''}`}
                    onClick={() => clickHandler()}>
                </button>
                <ul className={`menu__linksList linksList rightSidePadding ${menuState ? 'd-none' : ''}`}>
                    {activeMenu}
                </ul>
            </div>
            <MenuLayer menuState={menuState} closeMenu={closeMenu} />
        </header>
    );
}

export default Header;