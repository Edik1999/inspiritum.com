import { CSSTransition } from 'react-transition-group';
import '../styles/pages/forPublishers.sass';
import { Link } from 'react-router-dom';
import useAnimationState from '../hooks/useAnimationState';
import { useRef } from 'react';

const ForPublishersAndAffilateNetworks = () => {

    let animationState = useAnimationState();
    
    const nodeRef1 = useRef(null),
        nodeRef2 = useRef(null);

    return (
        <div className='forPublishers content'>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef1}>

                <h1 className='forPublishers__title content__mainTitle sidesPadding' ref={nodeRef1}>for Publishers &&nbsp;Affiliate Networks</h1>

            </CSSTransition>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef2}>

                <div className="forPublishers__wrapper content__wrapper" ref={nodeRef2}>
                    <div className="forPublishers__bigText content__bigText sidesPadding">
                        Once following the market trends, we&nbsp;permanently create a&nbsp;new highly demanded <Link className="forPublishers__link content__link" to="/mobile-offers">Mobile Offers</Link>, achieving the best conversion rates and maximize its total revenue.
                    </div>
                    <div className="forPublishers__columns content__columns">
                        <div className="forPublishers__column content__column sidesPadding">
                            Each of&nbsp;our offers is&nbsp;tested by&nbsp;in-house <Link className="forPublishers__link content__link" to="/media-buying-team">Media Buying Team</Link>, and we&nbsp;are working to&nbsp;improve all components of&nbsp;the conversion, finding the best solutions at&nbsp;the every single stage.
                        </div>
                        <div className="forPublishers__column content__column sidesPadding">
                            We&nbsp;are using the direct connection to&nbsp;MNOs, hence we&nbsp;don’t lose money in&nbsp;a&nbsp;big chain of&nbsp;aggregators, also decreasing tech losses that could unintentionally appear on&nbsp;each link of&nbsp;the chain.
                        </div>
                        <div className="forPublishers__column content__column sidesPadding">
                            For affiliate networks we&nbsp;can offer convenient integration using API on&nbsp;the basis of&nbsp;our <Link className="forPublishers__link content__link" to="/carrier-billing-aggregator">Carrier Billing Aggregator</Link>, which will let our partners to&nbsp;create new Mobile offers and to&nbsp;provide publishers with ours that are currently available.
                        </div>
                    </div>
                </div>

            </CSSTransition>
        </div>
    );
}

export default ForPublishersAndAffilateNetworks;
