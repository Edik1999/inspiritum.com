import useAnimationState from '../hooks/useAnimationState';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import '../styles/pages/forCarrierBillingAggregators.sass';
import { useRef } from 'react';

const ForCarrierBillingAggregators = () => {

    let animationState = useAnimationState();

    const nodeRef1 = useRef(null),
    nodeRef2 = useRef(null);

    return (
        <div className='forCarrierBillingAggregators content'>
            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef1}>

                <h1 className='forCarrierBillingAggregators__title content__mainTitle sidesPadding' ref={nodeRef1}>for Carrier Billing<br/>Aggregators</h1>

            </CSSTransition>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef2}>

                <div className="forCarrierBillingAggregators__wrapper content__wrapper" ref={nodeRef2}>
                    <div className="forCarrierBillingAggregators__bigText content__bigText sidesPadding">
                        Once following the market trends, we&nbsp;permanently create new <Link className="forCarrierBillingAggregators__link content__link" to="/mobile-offers">Mobile services</Link> and we&nbsp;are keen to&nbsp;expand our coverage. Services promotion is&nbsp;provided by&nbsp;both: the wide affiliate network and by&nbsp;our own <Link className="forCarrierBillingAggregators__link content__link" to="/media-buying-team">Media Buying Team.</Link>
                    </div>
                    <div className="forCarrierBillingAggregators__text content__text sidesPadding">
                        We&nbsp;can also offer to&nbsp;aggregators to&nbsp;use our direct connections. In&nbsp;the countries of&nbsp;our presence we&nbsp;do&nbsp;provide:
                        <ul className="listWithDots content__listWithDots">
                            <li className="listWithDots__item">Support in&nbsp;native language 24/7</li>
                            <li className="listWithDots__item">Transparent cooperation</li>
                            <li className="listWithDots__item">Fast services alignment process</li>
                        </ul>
                    </div>
                    <div className="forCarrierBillingAggregators__text content__text sidesPadding">
                        Please don’t hesitate to&nbsp;contact&nbsp;us for all kind of&nbsp;mutual fruitful cooperation.
                    </div>
                </div>

            </CSSTransition>

        </div>
    );
}

export default ForCarrierBillingAggregators;

