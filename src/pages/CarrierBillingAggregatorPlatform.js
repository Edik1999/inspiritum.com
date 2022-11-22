import useAnimationState from '../hooks/useAnimationState';
import { CSSTransition } from 'react-transition-group';
import '../styles/pages/carrierBillingAggregatorPlatform.sass';
import { useRef } from 'react';
import MobileTechnologyMenu from '../components/menu/mobileTechnologyMenu'


const CarrierBillingAggregatorPlatform = ({bp}) => {

    let animationState = useAnimationState();

    const nodeRef1 = useRef(null),
        nodeRef2 = useRef(null);

    return (
        <div className='carrierBillingAggregatorPlatform content'>

            { bp === 'mobile' &&
                <MobileTechnologyMenu element="carrierBillingAggregatorPlatform"/>
            }

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef1}>

                <h1 className='carrierBillingAggregatorPlatform__title content__mainTitle sidesPadding' ref={nodeRef1}>Carrier Billing Aggregator platform</h1>

            </CSSTransition>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef2}>

                <div className="carrierBillingAggregatorPlatform__wrapper content__wrapper" ref={nodeRef2}>
                    <div className="carrierBillingAggregatorPlatform__bigText content__bigText sidesPadding">
                        The functionality of&nbsp;the platform is&nbsp;divided on&nbsp;2&nbsp;modules: «MNO» and «Provider», interaction between them is&nbsp;going on&nbsp;common basis.
                    </div>
                    <div className="carrierBillingAggregatorPlatform__text content__text sidesPadding">
                        <b>Platform supports:</b>
                        <ul className="listWithDots content__listWithDots">
                            <li className="listWithDots__item">One-time and recurrent payments with any cost, including even variable ones</li>
                            <li className="listWithDots__item">Writing-off mechanics: DCB, MT, MO</li>
                            <li className="listWithDots__item">User flows: 1/2click, pin-submit, SMS, IVR</li>
                        </ul>
                        <span>The module «MNO» having access to&nbsp;writing-off mechanic gives all necessary infrastructures on&nbsp;MNO’s side to&nbsp;provide content services. Provides all control, analytics, handling, financial statistics mechanisms etc.</span>
                    </div>
                    <div className="carrierBillingAggregatorPlatform__text content__text sidesPadding">
                        <b>«MNO» module’s features:</b>
                        <ul className="listWithDots content__listWithDots">
                            <li className="listWithDots__item">Hosting of&nbsp;Landing Page (Confirmation Page, Payment Page), including the protection from go-round methods and the influence of&nbsp;external scripts.</li>
                            <li className="listWithDots__item">Flexible writing-off schemes, including mechanisms of&nbsp;deferred charges and charges with lower price (discounts) in&nbsp;a&nbsp;case of&nbsp;a&nbsp;lack of&nbsp;account balance.</li>
                            <li className="listWithDots__item">Solution of&nbsp;the problem of&nbsp;MSISDN determination in&nbsp;a&nbsp;case of&nbsp;using special browser&rsquo;s mode (Opera Turbo, Chrome Turbo etc.)</li>
                            <li className="listWithDots__item">Auto-creating of&nbsp;Black- and Stop-lists.</li>
                        </ul>
                        <span>Module «Provider» delivers interactions with different MNO, providing unified WEB and Program Interface to the partners.</span>
                    </div>
                    <div className="carrierBillingAggregatorPlatform__text content__text sidesPadding">
                        <b>«Provider» module’s features:</b>
                        <ul className="listWithDots content__listWithDots">
                            <li className="listWithDots__item">Flexible interaction options. We&nbsp;already established the connections and we&nbsp;are working using protocols: HTTP(S), SOAP, SMPP, IMAP.</li>
                            <li className="listWithDots__item">Different traffic direction schemes, including «cascade» and «traffback».</li>
                            <li className="listWithDots__item">Hosting of&nbsp;PreLanding Page (Landing Page), including the protection from go-round methods and the influence of&nbsp;external scripts.</li>
                        </ul>
                    </div>
                    <div className="carrierBillingAggregatorPlatform__text content__text sidesPadding">
                        <b>Both of&nbsp;the modules support the accumulation of&nbsp;subscribers data:</b>
                        <ul className="listWithDots content__listWithDots">
                            <li className="listWithDots__item">Active and Disabled services</li>
                            <li className="listWithDots__item">Its activation and cancelation date and time</li>
                            <li className="listWithDots__item">
                                Subscription’s data:
                                <ul className="listWithDots listWithDots--grey content__listWithDots">
                                    <li className="listWithDots__item listWithDots--grey__item">Source</li>
                                    <li className="listWithDots__item listWithDots--grey__item">Device</li>
                                    <li className="listWithDots__item listWithDots--grey__item">Some extra data</li>
                                </ul>
                            </li>
                            <li className="listWithDots__item">Transaction history: date and time, amount, status</li>
                            <li className="listWithDots__item">History of&nbsp;support queries</li>
                        </ul>
                        <span>Such data could be&nbsp;provided in&nbsp;web-interface and by&nbsp;API. Both of&nbsp;interfaces allow to&nbsp;cancel subscription and to&nbsp;initiate a&nbsp;refund.</span>
                    </div>
                </div>

            </CSSTransition>

        </div>
    );
}

export default CarrierBillingAggregatorPlatform;
