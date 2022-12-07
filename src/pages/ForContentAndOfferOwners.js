import useAnimationState from '../hooks/useAnimationState';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

const ForContentAndOfferOwners = () => {

    let animationState = useAnimationState();

    const nodeRef1 = useRef(null),
        nodeRef2 = useRef(null);

    return (
        <div className='forContentAndOfferOwners content'>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef1}>

                <h1 className='forContentAndOfferOwners__title content__mainTitle sidesPadding' ref={nodeRef1}>for Content<br/>&&nbsp;Offer owners</h1>

            </CSSTransition>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef2}>

                <div className="forContentAndOfferOwners__wrapper content__wrapper" ref={nodeRef2}>
                    <div className="forContentAndOfferOwners__bigText content__bigText sidesPadding">
                        Working on&nbsp;all levels of&nbsp;the mobile services market, we&nbsp;always have something to&nbsp;offer at&nbsp;any single one.
                    </div>
                    <div className="forContentAndOfferOwners__text content__text sidesPadding">
                        <b>You do&nbsp;have your own mobile offers, have you?</b>
                        <br/>
                        - As&nbsp;<Link className="forAdNetworks__link content__link" to="/carrier-billing-aggregator">Carrier Billing Aggregator</Link> we&nbsp;can provide a&nbsp;new GEO for you.
                    </div>
                    <div className="forContentAndOfferOwners__text content__text sidesPadding">
                        <b>You are presented worldwide, are you?</b>
                        <br/>
                        - We&nbsp;can provide a&nbsp;promotion thanks to&nbsp;the wide affiliate network and to&nbsp;in-house <Link className="forAdNetworks__link content__link" to="/media-buying-team">Media Buying Team.</Link>
                    </div>
                    <div className="forContentAndOfferOwners__text content__text sidesPadding">
                        <b>You could offer some content, could you?</b>
                        <br/>
                        - We&nbsp;will gladly purchase it&nbsp;for development of&nbsp;mobile service on&nbsp;its base.
                    </div>
                </div>

            </CSSTransition>

        </div>

    );
}

export default ForContentAndOfferOwners;
