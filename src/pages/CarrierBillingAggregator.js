import { CSSTransition } from 'react-transition-group';
import '../styles/pages/carrierBillingAggregator.sass';
import useIntersect from '../hooks/useIntersect';
import { Link } from 'react-router-dom';
import useAnimationState from '../hooks/useAnimationState';
import { useRef } from 'react';

import Subscribe from '../img/sprite/phone-subscribe.svg';
import Submit from '../img/sprite/phone-submit.svg';
import Sms from '../img/sprite/phone-sms.svg';
import User from '../img/sprite/user.svg';
import swisscom from '../img/swisscom.png';
import sunrise from '../img/sunrise.png';
import telenor from '../img/telenor.svg';
import meo from '../img/MEO.png';
import xl from '../img/XL.png';
import Truemove from '../img/Truemove.png';
import ais from '../img/AIS.png';
import Orange from '../img/Orange.png';
import Vodacom from '../img/Vodacom.png';
import Telekom from '../img/Telekom.png';
import TelekomSRB from '../img/Telekom-Srbija.png';
import vip from '../img/Vip-Mobile.png';
import Celcom from '../img/Celcom.png';
import Dialog from '../img/Dialog.png';
import Smart from '../img/Smart.png';


const CarrierBillingAggregator = () => {

    let animationState = useAnimationState();
    
    const targetRef = useIntersect(() => {},{rootMargin: '-300px'});

    const nodeRef1 = useRef(null),
        nodeRef2 = useRef(null);

    return (
        <div className='carrierBillingAggregator content'>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef1}>

                <h1 className='carrierBillingAggregator__title content__mainTitle sidesPadding' ref={nodeRef1}>Carrier Billing Aggregator</h1>

            </CSSTransition>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef2}>

                <div className="carrierBillingAggregator__wrapper content__wrapper" ref={nodeRef2}>
                    <div className="carrierBillingAggregator__bigText content__bigText sidesPadding">
                        Our team started working with mobile payments based on&nbsp;MO in&nbsp;2007. Having accumulated the experience, we&nbsp;started working as&nbsp;aggregator in&nbsp;2010. And we&nbsp;are still steadily improving this branch of&nbsp;our business.
                    </div>
                    <div className="carrierBillingAggregator__text content__text sidesPadding">
                        Tech core of&nbsp;the aggregator is&nbsp;our <Link className="carrierBillingAggregator__link content__link" to="/technology/carrier-billing-aggregator-platform">platform</Link>, which supports different kind of&nbsp;writing-off mechanisms on&nbsp;recurrent and one-time base. And the platform also lets&nbsp;us to&nbsp;use popular activation flows:
                    </div>
                    <div className="carrierBillingAggregator__columns content__columns">
                        <div className="carrierBillingAggregator__column content__column sidesPadding">
                            <div className="carrierBillingAggregator__bigText content__bigText">1 Click</div>
                            <img src={Subscribe} alt="1 click subscribe" className="carrierBillingAggregator__phoneImg"/>
                        </div>
                        <div className="carrierBillingAggregator__column content__column sidesPadding">
                            <div className="carrierBillingAggregator__bigText content__bigText">Pin-Submit</div>
                            <img src={Submit} alt="Pin-Submit" className="carrierBillingAggregator__phoneImg"/>
                        </div>
                        <div className="carrierBillingAggregator__column content__column sidesPadding">
                            <div className="carrierBillingAggregator__bigText content__bigText">SMS</div>
                            <img src={Sms} alt="SMS" className="carrierBillingAggregator__phoneImg"/>
                        </div>
                    </div>
                    <div className="carrierBillingAggregator__bigText content__bigText sidesPadding">
                        Coverage area:
                    </div>
                </div>

            </CSSTransition>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={targetRef}>

                <div className="carrierBillingAggregator__rows rows" ref={targetRef}>
                    <div className="rows__item">
                        <div className="rows__name item sidesPadding carrierBillingAggregator__bigText content__bigText">
                            Switzerland
                        </div>
                        <div className="rows__operator item sidesPadding">
                            <img src={swisscom} alt="swisscom" className="rows__logo"/>
                            <div className="rows__wrap">
                                <p className="rows__title">
                                    Swisscom
                                </p>
                                <p className="rows__count">
                                    <img src={User} alt="User" className="rows__icon"/>
                                    6 623 000
                                </p>
                            </div>
                        </div>
                        <div className="rows__operator item sidesPadding">
                            <img src={sunrise} alt="sunrise" className="rows__logo"/>
                            <div className="rows__wrap">
                                <p className="rows__title">
                                    Sunrise
                                </p>
                                <p className="rows__count">
                                    <img src={User} alt="User" className="rows__icon"/>
                                    2 491 000
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rows__item">
                        <div className="rows__name item sidesPadding carrierBillingAggregator__bigText content__bigText">
                            Myanmar
                        </div>
                        <div className="rows__operator item sidesPadding">
                            <img src={telenor} alt="swisscom" className="rows__logo"/>
                            <div className="rows__wrap">
                                <p className="rows__title">
                                    Telenor
                                </p>
                                <p className="rows__count">
                                    <img src={User} alt="User" className="rows__icon"/>
                                    11 000 000
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rows__item">
                        <div className="rows__name item sidesPadding carrierBillingAggregator__bigText content__bigText">
                            Portugal
                        </div>
                        <div className="rows__operator item sidesPadding">
                            <img src={meo} alt="swisscom" className="rows__logo"/>
                            <div className="rows__wrap">
                                <p className="rows__title">
                                    MEO
                                </p>
                                <p className="rows__count">
                                    <img src={User} alt="User" className="rows__icon"/>
                                    8 000 000
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rows__item">
                        <div className="rows__name item sidesPadding carrierBillingAggregator__bigText content__bigText">
                            Indonesia
                        </div>
                        <div className="rows__operator item sidesPadding">
                            <img src={xl} alt="swisscom" className="rows__logo"/>
                            <div className="rows__wrap">
                                <p className="rows__title">
                                    XL
                                </p>
                                <p className="rows__count">
                                    <img src={User} alt="User" className="rows__icon"/>
                                    56 000 000
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rows__item">
                        <div className="rows__name item sidesPadding carrierBillingAggregator__bigText content__bigText">
                            Thailand
                        </div>
                        <div className="rows__operator item sidesPadding">
                            <img src={Truemove} alt="swisscom" className="rows__logo"/>
                            <div className="rows__wrap">
                                <p className="rows__title">
                                    Truemove
                                </p>
                                <p className="rows__count">
                                    <img src={User} alt="User" className="rows__icon"/>
                                    26 000 000
                                </p>
                            </div>
                        </div>
                        <div className="rows__operator item sidesPadding">
                            <img src={ais} alt="sunrise" className="rows__logo"/>
                            <div className="rows__wrap">
                                <p className="rows__title">
                                    AIS
                                </p>
                                <p className="rows__count">
                                    <img src={User} alt="User" className="rows__icon"/>
                                    40 000 000
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rows__item">
                        <div className="rows__name item sidesPadding carrierBillingAggregator__bigText content__bigText">
                            Poland
                        </div>
                        <div className="rows__operator item sidesPadding">
                            <img src={Orange} alt="swisscom" className="rows__logo"/>
                            <div className="rows__wrap">
                                <p className="rows__title">
                                    Orange
                                </p>
                                <p className="rows__count">
                                    <img src={User} alt="User" className="rows__icon"/>
                                    15 000 000
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rows__item">
                        <div className="rows__name item sidesPadding carrierBillingAggregator__bigText content__bigText">
                            Botswana
                        </div>
                        <div className="rows__operator item sidesPadding">
                            <img src={Orange} alt="swisscom" className="rows__logo"/>
                            <div className="rows__wrap">
                                <p className="rows__title">
                                    Orange
                                </p>
                                <p className="rows__count">
                                    <img src={User} alt="User" className="rows__icon"/>
                                    1 000 000
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rows__item">
                        <div className="rows__name item sidesPadding carrierBillingAggregator__bigText content__bigText">
                            South Africa
                        </div>
                        <div className="rows__operator item sidesPadding">
                            <img src={Vodacom} alt="swisscom" className="rows__logo"/>
                            <div className="rows__wrap">
                                <p className="rows__title">
                                    Vodacom
                                </p>
                                <p className="rows__count">
                                    <img src={User} alt="User" className="rows__icon"/>
                                    45 000 000
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rows__item">
                        <div className="rows__name item sidesPadding carrierBillingAggregator__bigText content__bigText">
                            Hungary
                        </div>
                        <div className="rows__operator item sidesPadding">
                            <img src={Telekom} alt="swisscom" className="rows__logo"/>
                            <div className="rows__wrap">
                                <p className="rows__title">
                                    Telekom
                                </p>
                                <p className="rows__count">
                                    <img src={User} alt="User" className="rows__icon"/>
                                    5 000 000
                                </p>
                            </div>
                        </div>
                        <div className="rows__operator item sidesPadding">
                            <img src={telenor} alt="sunrise" className="rows__logo"/>
                            <div className="rows__wrap">
                                <p className="rows__title">
                                    Telenor
                                </p>
                                <p className="rows__count">
                                    <img src={User} alt="User" className="rows__icon"/>
                                    3.5 000 000
                                </p>
                            </div>
                        </div>
                        <div className="rows__operator item sidesPadding">
                            <img src={Vodacom} alt="sunrise" className="rows__logo"/>
                            <div className="rows__wrap">
                                <p className="rows__title">
                                    Vodafone
                                </p>
                                <p className="rows__count">
                                    <img src={User} alt="User" className="rows__icon"/>
                                    3 000 000
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rows__item">
                        <div className="rows__name item sidesPadding carrierBillingAggregator__bigText content__bigText">
                            Serbia
                        </div>
                        <div className="rows__operator item sidesPadding">
                            <img src={TelekomSRB} alt="swisscom" className="rows__logo"/>
                            <div className="rows__wrap">
                                <p className="rows__title">
                                    Telekom
                                </p>
                                <p className="rows__count">
                                    <img src={User} alt="User" className="rows__icon"/>
                                    3 000 000
                                </p>
                            </div>
                        </div>
                        <div className="rows__operator item sidesPadding">
                            <img src={telenor} alt="sunrise" className="rows__logo"/>
                            <div className="rows__wrap">
                                <p className="rows__title">
                                    Telenor
                                </p>
                                <p className="rows__count">
                                    <img src={User} alt="User" className="rows__icon"/>
                                    3 000 000
                                </p>
                            </div>
                        </div>
                        <div className="rows__operator item sidesPadding">
                            <img src={vip} alt="sunrise" className="rows__logo"/>
                            <div className="rows__wrap">
                                <p className="rows__title">
                                    Vip-Mobile
                                </p>
                                <p className="rows__count">
                                    <img src={User} alt="User" className="rows__icon"/>
                                    3 000 000
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rows__item">
                        <div className="rows__name item sidesPadding carrierBillingAggregator__bigText content__bigText">
                            Egypt
                        </div>
                        <div className="rows__operator item sidesPadding">
                            <img src={Vodacom} alt="swisscom" className="rows__logo"/>
                            <div className="rows__wrap">
                                <p className="rows__title">
                                    Vodafone
                                </p>
                                <p className="rows__count">
                                    <img src={User} alt="User" className="rows__icon"/>
                                    40 000 000
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rows__item">
                        <div className="rows__name item sidesPadding carrierBillingAggregator__bigText content__bigText">
                            Malaysia
                        </div>
                        <div className="rows__operator item sidesPadding">
                            <img src={Celcom} alt="swisscom" className="rows__logo"/>
                            <div className="rows__wrap">
                                <p className="rows__title">
                                    Celcom
                                </p>
                                <p className="rows__count">
                                    <img src={User} alt="User" className="rows__icon"/>
                                    13 000 000
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rows__item">
                        <div className="rows__name item sidesPadding carrierBillingAggregator__bigText content__bigText">
                            Sri Lanka
                        </div>
                        <div className="rows__operator item sidesPadding">
                            <img src={Dialog} alt="swisscom" className="rows__logo"/>
                            <div className="rows__wrap">
                                <p className="rows__title">
                                    Dialog
                                </p>
                                <p className="rows__count">
                                    <img src={User} alt="User" className="rows__icon"/>
                                    13 000 000
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rows__item">
                        <div className="rows__name item sidesPadding carrierBillingAggregator__bigText content__bigText">
                            Cambodia
                        </div>
                        <div className="rows__operator item sidesPadding">
                            <img src={Smart} alt="swisscom" className="rows__logo"/>
                            <div className="rows__wrap">
                                <p className="rows__title">
                                    Smart
                                </p>
                                <p className="rows__count">
                                    <img src={User} alt="User" className="rows__icon"/>
                                    8 000 000
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </CSSTransition>

        </div>
    );
}

export default CarrierBillingAggregator;
