import useAnimationState from '../hooks/useAnimationState';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';


const ForAdNetworks = () => {

    let animationState = useAnimationState();

    const nodeRef1 = useRef(null),
    nodeRef2 = useRef(null);

    return (
        <div className='forAdNetworks content'>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef1}>

                <h1 className='forAdNetworks__title content__mainTitle sidesPadding' ref={nodeRef1}>for Ad Networks</h1>

            </CSSTransition>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef2}>

                <div className="forAdNetworks__wrapper content__wrapper" ref={nodeRef2}>
                    <div className="forAdNetworks__bigText content__bigText sidesPadding">
                        In-house <Link className="forAdNetworks__link content__link" to="/media-buying-team">Media Buying Team</Link> always was the core of&nbsp;our business. We&nbsp;are successfully cooperating with many different Ad&nbsp;Networks for quite a&nbsp;while, and we&nbsp;would gladly make this list wider.
                    </div>
                    <div className="forAdNetworks__columns content__columns">
                        <div className="forAdNetworks__column content__column sidesPadding">
                            Working with our own <Link className="forAdNetworks__link content__link" to="/mobile-offers">Mobile Offers</Link> without spending any extras on&nbsp;mediators, we&nbsp;could offer the best conditions as&nbsp;advertisers.
                        </div>
                        <div className="forAdNetworks__column content__column sidesPadding">
                            Based on&nbsp;our own <Link className="forAdNetworks__link content__link" to="/technology/ad-platform">Ad&nbsp;Platform</Link>, we&nbsp;are also ready to&nbsp;integrate and to&nbsp;buy traffic using RTB (Open&nbsp;RTB&nbsp;2.5).
                        </div>
                    </div>
                    <div className="forAdNetworks__text content__text sidesPadding">
                        Please don’t hesitate to&nbsp;contact&nbsp;us for all kind of&nbsp;mutual fruitful cooperation.
                    </div>
                </div>

            </CSSTransition>

        </div>
    );
}

export default ForAdNetworks;
