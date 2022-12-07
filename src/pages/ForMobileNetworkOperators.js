import useAnimationState from '../hooks/useAnimationState';
import useIntersect from '../hooks/useIntersect';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Slider from "react-slick";
import { useRef } from 'react';


const ForMobileNetworkOperators = () => {

    let animationState = useAnimationState();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const targetRef = useIntersect(() => {},{rootMargin: '-300px'});

    const nodeRef1 = useRef(null),
        nodeRef2 = useRef(null);

    return (
        <div className='forMobileNetworkOperators content'>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef1}>

                <h1 className='forMobileNetworkOperators__title content__mainTitle sidesPadding' ref={nodeRef1}>for Mobile Network Operators</h1>

            </CSSTransition>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef2}>

                <div className="forMobileNetworkOperators__wrapper content__wrapper" ref={nodeRef2}>
                    <div className="forMobileNetworkOperators__bigText content__bigText sidesPadding">
                        Using already existing and newly introduced connections, we&nbsp;offer both services developed by&nbsp;our partners and our own <Link className="forMobileNetworkOperators__link content__link" to="/mobile-offers">Mobile services.</Link> Its promotion is&nbsp;provided by&nbsp;the wide affiliate network and by&nbsp;in-house <Link className="forMobileNetworkOperators__link content__link" to="/media-buying-team">Media Buying Team.</Link>
                    </div>
                    <div className="forMobileNetworkOperators__columns content__columns">
                        <div className="forMobileNetworkOperators__column content__column sidesPadding">
                            <b>Each of&nbsp;our mobile services is&nbsp;provided within:</b>
                        </div>
                        <div className="forMobileNetworkOperators__column content__column sidesPadding">
                            <ul className="listWithDots content__listWithDots">
                                <li className="listWithDots__item">Support in&nbsp;native language 24/7</li>
                                <li className="listWithDots__item">Negativity level control</li>
                                <li className="listWithDots__item">Traffic quality control</li>
                            </ul>
                        </div>
                    </div>
                    <div className="forMobileNetworkOperators__columns content__columns">
                        <div className="forMobileNetworkOperators__column content__column sidesPadding">
                            <b>As&nbsp;a&nbsp;<Link className="forMobileNetworkOperators__link content__link" to="/carrier-billing-aggregator">Carrier Billing Aggregator</Link> we&nbsp;are using our own <Link className="forMobileNetworkOperators__link content__link" to="/technology/carrier-billing-aggregator-platform">platform</Link>, which might be&nbsp;integrated into MNO on&nbsp;any tech level and might support:</b>
                        </div>
                        <div className="forMobileNetworkOperators__column content__column sidesPadding">
                            <ul className="listWithDots content__listWithDots">
                                <li className="listWithDots__item">Any kind of&nbsp;writing-off mechanism: DCB, MT, MO</li>
                                <li className="listWithDots__item">Recurrent and one-time payments</li>
                                <li className="listWithDots__item">Any kind of&nbsp;flow: 1/2click, pin-submit, SMS, IVR</li>
                            </ul>
                        </div>
                    </div>
                    <div className="forMobileNetworkOperators__bigText content__bigText sidesPadding">
                        Deep knowledge of&nbsp;the market allows&nbsp;us to&nbsp;create unique projects for MNO:
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

                <div className="forMobileNetworkOperators__footer content__footer" ref={targetRef}>

                    <Slider {...settings}>

                        <div className="slide1 slide">
                            <div className="forMobileNetworkOperators__bigText content__bigText sidesPadding">
                                The improvement of global indexes of VAS
                            </div>
                            <div className="forMobileNetworkOperators__columns content__columns">
                                <div className="forMobileNetworkOperators__column content__column sidesPadding">
                                    <div className="forMobileNetworkOperators__subtitle content__subtitle">
                                        Description
                                    </div>
                                    After certain carried out analysis and tests, we&nbsp;suggested the list of&nbsp;recommendations.
                                    <br />
                                    Their implementation didn’t demand any extra development on&nbsp;MNO’s and partner’s side.
                                </div>
                                <div className="forMobileNetworkOperators__column content__column leftSidePadding">
                                    <div className="forMobileNetworkOperators__subtitle content__subtitle">
                                        Results
                                    </div>
                                    <ul className="listWithDots content__listWithDots">
                                        <li className="listWithDots__item">Increase of&nbsp;the gross revenue</li>
                                        <li className="listWithDots__item">Decrease of&nbsp;the total amount of&nbsp;complains</li>
                                    </ul>
                                    <Link className="forMobileNetworkOperators__link content__link content__link--requset" to="/feedback">Request presentation</Link>
                                </div>
                            </div>
                        </div>

                        <div className="slide2 slide">
                            <div className="forMobileNetworkOperators__bigText content__bigText sidesPadding">
                                IVR upgrade
                            </div>
                            <div className="forMobileNetworkOperators__columns content__columns">
                                <div className="forMobileNetworkOperators__column content__column sidesPadding">
                                    <div className="forMobileNetworkOperators__subtitle content__subtitle">
                                        Description
                                    </div>
                                    We&nbsp;have developed IVR’s model and the schema of&nbsp;work for MNO’s call-center for VAS cases.
                                </div>
                                <div className="forMobileNetworkOperators__column content__column leftSidePadding">
                                    <div className="forMobileNetworkOperators__subtitle content__subtitle">
                                        Results
                                    </div>
                                    <ul className="listWithDots content__listWithDots">
                                        <li className="listWithDots__item">Decrease of&nbsp;the call-center’s costs</li>
                                        <li className="listWithDots__item">Decrease of&nbsp;the negativity level</li>
                                        <li className="listWithDots__item">Decrease of&nbsp;the refunds amount</li>
                                    </ul>
                                    <Link className="forMobileNetworkOperators__link content__link content__link--requset" to="/feedback">Request presentation</Link>
                                </div>
                            </div>
                        </div>

                        <div className="slide3 slide">
                            <div className="forMobileNetworkOperators__bigText content__bigText sidesPadding">
                                Ad Platform
                            </div>
                            <div className="forMobileNetworkOperators__columns content__columns">
                                <div className="forMobileNetworkOperators__column content__column sidesPadding">
                                    <div className="forMobileNetworkOperators__subtitle content__subtitle">
                                        Description
                                    </div>
                                    With our <Link className="forMobileNetworkOperators__link content__link" to="/technology/ad-platform">Ad&nbsp;Platform</Link> we&nbsp;have succeeded to&nbsp;develop and to&nbsp;integrate an&nbsp;advertising system to&nbsp;show ads on&nbsp;spare inventory of&nbsp;MNO.
                                    <br />
                                    The system allows to&nbsp;widely control and to&nbsp;show both: ads of&nbsp;own MNO’s services and OFF DECK services of&nbsp;partners.
                                </div>
                                <div className="forMobileNetworkOperators__column content__column leftSidePadding">
                                    <div className="forMobileNetworkOperators__subtitle content__subtitle">
                                        Results
                                    </div>
                                    <ul className="listWithDots content__listWithDots">
                                        <li className="listWithDots__item">Increase of&nbsp;the gross revenue of&nbsp;VAS.</li>
                                    </ul>
                                    <Link className="forMobileNetworkOperators__link content__link content__link--requset" to="/feedback">Request presentation</Link>
                                </div>
                            </div>
                        </div>

                    </Slider>
                </div>

            </CSSTransition>

        </div>
    );
}

export default ForMobileNetworkOperators;
