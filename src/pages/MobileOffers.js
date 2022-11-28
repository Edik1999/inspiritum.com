import { CSSTransition } from 'react-transition-group';
import '../styles/pages/mobileOffers.sass';
import useAnimationState from '../hooks/useAnimationState';
import useIntersect from '../hooks/useIntersect';
import { useRef } from 'react';
import Slider from "react-slick";


// images
import antivirus from '../img/sprite/antivirus.svg';
import GamePortal from '../img/sprite/game.svg';
import Anonymizer from '../img/sprite/anonymizer.svg';
import AppLocker from '../img/sprite/applocker.svg';
import Messengers from '../img/sprite/messengers.svg';
import Battery from '../img/sprite/battery.svg';
import share from '../img/sprite/share.svg';
import streaming from '../img/sprite/streaming.svg';
import News from '../img/sprite/news.svg';
import footerMap from '../img/bg_map.png';
import footerMapMobile from '../img/bg_map_mob.png';
import RF from '../img/rf_hover.png';
import Hungary from '../img/vng_hover.png';
import SouthAfrica from '../img/ya_hover.png';
import Switzerland from '../img/sv_hover.png';
import Serbia from '../img/srb_hover.png';
import Myanmar from '../img/mym_hover.png';
import Egypt from '../img/eg_hover.png';
import Malaysia from '../img/Malaysia.png';
import SriLanka from '../img/shr_hover.png';
import Cambodia from '../img/Cambodia.png';
import Portugal from '../img/Portugal.png';
import Thailand from '../img/Thailand.png';


const MobileOffers = ({ bp }) => {

    let animationState = useAnimationState();

    // const targetRef = useIntersect(() => { }, { rootMargin: '-300px' });
    const targetRef = useIntersect(() => { document.querySelector('.map').classList.toggle('translated') }, { rootMargin: '0px' });

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const nodeRef1 = useRef(null),
        nodeRef2 = useRef(null);

    const mouseOver = (e) => {
        if (bp !== 'mobile') document.querySelector(`.${e.target.dataset.country}`).classList.add('active');
    }

    const mouseLeave = (e) => {
        if (bp !== 'mobile') document.querySelector(`.${e.target.dataset.country}`).classList.remove('active');
    }


    return (
        <div className='mobileOffers content'>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef1}>

                <h1 className='mobileOffers__title content__mainTitle sidesPadding' ref={nodeRef1}>Mobile Offers</h1>

            </CSSTransition>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef2}>

                <div className="mobileOffers__wrapper content__wrapper" ref={nodeRef2}>
                    <div className="mobileOffers__bigText content__bigText sidesPadding">
                        We&nbsp;follow the market trends and we&nbsp;provide mobile offers having a&nbsp;high conversion rates. Together with that we&nbsp;can offer the best conditions to&nbsp;our affiliates in&nbsp;a&nbsp;way of&nbsp;using a&nbsp;direct connection to&nbsp;MNO.
                    </div>
                    {bp !== 'mobile' ?
                        <>
                            <div className="mobileOffers__columns content__columns infoList">
                                <div className="mobileOffers__column content__column infoList__item sidesPadding">
                                    <img src={antivirus} alt="antivirus" className="mobileOffers__icon content__icon" />
                                    <h2 className="mobileOffers__bigText content__bigText">Antivirus</h2>
                                    Mobile Antivirus for Android smartphones and tablets. Permanently updated and supported.
                                </div>
                                <div className="mobileOffers__column content__column infoList__item sidesPadding">
                                    <img src={GamePortal} alt="antivirus" className="mobileOffers__icon content__icon" />
                                    <h2 className="mobileOffers__bigText content__bigText">Game portal</h2>
                                    More then 70&nbsp;games working on&nbsp;any smartphone. Supports: Android, iOs, Windows.
                                </div>
                                <div className="mobileOffers__column content__column infoList__item sidesPadding">
                                    <img src={Anonymizer} alt="antivirus" className="mobileOffers__icon content__icon" />
                                    <h2 className="mobileOffers__bigText content__bigText">Anonymizer</h2>
                                    VPN service and anonym web surfing for mobile users.
                                </div>
                            </div>
                            <div className="mobileOffers__columns content__columns infoList">
                                <div className="mobileOffers__column content__column infoList__item sidesPadding">
                                    <img src={AppLocker} alt="antivirus" className="mobileOffers__icon content__icon" />
                                    <h2 className="mobileOffers__bigText content__bigText">AppLocker</h2>
                                    Privacy protection for messengers and other apps, preopening password authentication.
                                </div>
                                <div className="mobileOffers__column content__column infoList__item sidesPadding">
                                    <img src={Messengers} alt="antivirus" className="mobileOffers__icon content__icon" />
                                    <h2 className="mobileOffers__bigText content__bigText">Messengers updates</h2>
                                    Updates for mobile messengers: Viber, WhatsApp, Telegram to&nbsp;chat with pleasure.
                                </div>
                                <div className="mobileOffers__column content__column infoList__item sidesPadding">
                                    <img src={Battery} alt="antivirus" className="mobileOffers__icon content__icon" />
                                    <h2 className="mobileOffers__bigText content__bigText">Battery optimizer</h2>
                                    Battery optimization tool for smartphones to&nbsp;increase working time on&nbsp;one charge.
                                </div>
                            </div>
                            <div className="mobileOffers__columns content__columns infoList">
                                <div className="mobileOffers__column content__column infoList__item sidesPadding">
                                    <img src={share} alt="antivirus" className="mobileOffers__icon content__icon" />
                                    <h2 className="mobileOffers__bigText content__bigText">File-share service</h2>
                                    File-share service optimized especially for mobile devices.
                                </div>
                                <div className="mobileOffers__column content__column infoList__item sidesPadding">
                                    <img src={streaming} alt="antivirus" className="mobileOffers__icon content__icon" />
                                    <h2 className="mobileOffers__bigText content__bigText">Video-streaming portals</h2>
                                    Different portals with entertaining and thematic video content.
                                </div>
                                <div className="mobileOffers__column content__column infoList__item sidesPadding">
                                    <img src={News} alt="antivirus" className="mobileOffers__icon content__icon" />
                                    <h2 className="mobileOffers__bigText content__bigText">News portal</h2>
                                    Aggregator of&nbsp;news.
                                </div>
                            </div>
                        </>
                        :
                        <Slider {...settings}>
                            <div className="mobileOffers__column content__column infoList__item sidesPadding">
                                <img src={antivirus} alt="antivirus" className="mobileOffers__icon content__icon" />
                                <h2 className="mobileOffers__bigText content__bigText">Antivirus</h2>
                                    Mobile Antivirus for Android smartphones and tablets. Permanently updated and supported.
                            </div>
                            <div className="mobileOffers__column content__column infoList__item sidesPadding">
                                <img src={GamePortal} alt="antivirus" className="mobileOffers__icon content__icon" />
                                <h2 className="mobileOffers__bigText content__bigText">Game portal</h2>
                                    More then 70&nbsp;games working on&nbsp;any smartphone. Supports: Android, iOs, Windows.
                            </div>
                            <div className="mobileOffers__column content__column infoList__item sidesPadding">
                                <img src={Anonymizer} alt="antivirus" className="mobileOffers__icon content__icon" />
                                <h2 className="mobileOffers__bigText content__bigText">Anonymizer</h2>
                                    VPN service and anonym web surfing for mobile users.
                            </div>
                            <div className="mobileOffers__column content__column infoList__item sidesPadding">
                                <img src={AppLocker} alt="antivirus" className="mobileOffers__icon content__icon" />
                                <h2 className="mobileOffers__bigText content__bigText">AppLocker</h2>
                                    Privacy protection for messengers and other apps, preopening password authentication.
                            </div>
                            <div className="mobileOffers__column content__column infoList__item sidesPadding">
                                <img src={Messengers} alt="antivirus" className="mobileOffers__icon content__icon" />
                                <h2 className="mobileOffers__bigText content__bigText">Messengers updates</h2>
                                    Updates for mobile messengers: Viber, WhatsApp, Telegram to&nbsp;chat with pleasure.
                            </div>
                            <div className="mobileOffers__column content__column infoList__item sidesPadding">
                                <img src={Battery} alt="antivirus" className="mobileOffers__icon content__icon" />
                                <h2 className="mobileOffers__bigText content__bigText">Battery optimizer</h2>
                                    Battery optimization tool for smartphones to&nbsp;increase working time on&nbsp;one charge.
                            </div>
                            <div className="mobileOffers__column content__column infoList__item sidesPadding">
                                <img src={share} alt="antivirus" className="mobileOffers__icon content__icon" />
                                <h2 className="mobileOffers__bigText content__bigText">File-share service</h2>
                                    File-share service optimized especially for mobile devices.
                            </div>
                            <div className="mobileOffers__column content__column infoList__item sidesPadding">
                                <img src={streaming} alt="antivirus" className="mobileOffers__icon content__icon" />
                                <h2 className="mobileOffers__bigText content__bigText">Video-streaming portals</h2>
                                    Different portals with entertaining and thematic video content.
                            </div>
                            <div className="mobileOffers__column content__column infoList__item sidesPadding">
                                <img src={News} alt="antivirus" className="mobileOffers__icon content__icon" />
                                <h2 className="mobileOffers__bigText content__bigText">News portal</h2>
                                    Aggregator of&nbsp;news.
                            </div>
                        </Slider>
                    }
                </div>

            </CSSTransition>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={targetRef}>

                <div className="mobileOffers__footer content__footer">
                    <img src={bp !== 'mobile' ? footerMap : footerMapMobile} alt="map" className={`map ${bp === 'mobile' && 'translated' }`} ref={targetRef}/>
                    <img src={RF} alt="Russia" className="hoverImg RF" />
                    <img src={Hungary} alt="Hungary" className="hoverImg Hungary" />
                    <img src={SouthAfrica} alt="South Africa" className="hoverImg SouthAfrica" />
                    <img src={Switzerland} alt="Switzerland" className="hoverImg Switzerland" />
                    <img src={Serbia} alt="Serbia" className="hoverImg Serbia" />
                    <img src={Myanmar} alt="Myanmar" className="hoverImg Myanmar" />
                    <img src={Egypt} alt="Egypt" className="hoverImg Egypt" />
                    <img src={Malaysia} alt="Malaysia" className="hoverImg Malaysia" />
                    <img src={SriLanka} alt="Sri Lanka" className="hoverImg SriLanka" />
                    <img src={Cambodia} alt="Cambodia" className="hoverImg Cambodia" />
                    <img src={Portugal} alt="Portugal" className="hoverImg Portugal" />
                    <img src={Thailand} alt="Thailand" className="hoverImg Thailand" />

                    <div className="mobileOffers__countries countries">
                        <h2 className="countries__title">Our offers are avaible in 12 countries</h2>
                        <div className="countries__wrapper">
                            <div className="countries__leftBlock">
                                <p className="countries__countryName" data-country="RF" onMouseEnter={(e) => mouseOver(e)} onMouseLeave={(e) => mouseLeave(e)}>Russia</p>
                                <p className="countries__countryName" data-country="Switzerland" onMouseEnter={(e) => mouseOver(e)} onMouseLeave={(e) => mouseLeave(e)}>Switzerland</p>
                                <p className="countries__countryName" data-country="SouthAfrica" onMouseEnter={(e) => mouseOver(e)} onMouseLeave={(e) => mouseLeave(e)}>South Africa</p>
                                <p className="countries__countryName" data-country="Hungary" onMouseEnter={(e) => mouseOver(e)} onMouseLeave={(e) => mouseLeave(e)}>Hungary</p>
                                <p className="countries__countryName" data-country="Serbia" onMouseEnter={(e) => mouseOver(e)} onMouseLeave={(e) => mouseLeave(e)}>Serbia</p>
                                <p className="countries__countryName" data-country="Myanmar" onMouseEnter={(e) => mouseOver(e)} onMouseLeave={(e) => mouseLeave(e)}>Myanmar</p>
                            </div>
                            <div className="countries__rightBlock">
                                <p className="countries__countryName" data-country="Egypt" onMouseEnter={(e) => mouseOver(e)} onMouseLeave={(e) => mouseLeave(e)}>Egypt</p>
                                <p className="countries__countryName" data-country="Malaysia" onMouseEnter={(e) => mouseOver(e)} onMouseLeave={(e) => mouseLeave(e)}>Malaysia</p>
                                <p className="countries__countryName" data-country="SriLanka" onMouseEnter={(e) => mouseOver(e)} onMouseLeave={(e) => mouseLeave(e)}>Sri Lanka</p>
                                <p className="countries__countryName" data-country="Cambodia" onMouseEnter={(e) => mouseOver(e)} onMouseLeave={(e) => mouseLeave(e)}>Cambodia</p>
                                <p className="countries__countryName" data-country="Portugal" onMouseEnter={(e) => mouseOver(e)} onMouseLeave={(e) => mouseLeave(e)}>Portugal</p>
                                <p className="countries__countryName" data-country="Thailand" onMouseEnter={(e) => mouseOver(e)} onMouseLeave={(e) => mouseLeave(e)}>Thailand</p>
                            </div>
                        </div>
                    </div>
                </div>

            </CSSTransition>

        </div>
    );
}

export default MobileOffers;

