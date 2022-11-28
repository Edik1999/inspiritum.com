import { CSSTransition } from 'react-transition-group';
import '../styles/pages/contacts.sass';
import useAnimationState from '../hooks/useAnimationState';
import { useRef } from 'react';
import Mailto from '../components/Mailto';
import Maps from '../components/Maps';
import MobileMenu from '../components/mobileMenu/MobileMenu';
import {contactsMenuItems} from '../components/mobileMenu/mobileMenuItems';
import useIntersect from '../hooks/useIntersect';


const ContactsCyprus = ({bp, mainTitle, tel, address, initialMapCenter, mapCenter}) => {

    let animationState = useAnimationState();

    const targetRef = useIntersect(() => { }, { rootMargin: '-350px' });

    const nodeRef1 = useRef(null),
        nodeRef2 = useRef(null);

    
    return (
        <div className='contacts content'>

            { bp === 'mobile' &&
                <MobileMenu elements={contactsMenuItems} activeClass="contacts"/>
            }


            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef1}>

                <h1 className='contacts__title content__mainTitle sidesPadding' ref={nodeRef1}>{mainTitle}</h1>

            </CSSTransition>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef2}>

                <div className="contacts__wrapper content__wrapper" ref={nodeRef2}>
                    <div className="contacts__columns content__columns">
                        <div className="contacts__column content__column sidesPadding">
                            {tel}
                        </div>
                        <div className="contacts__column content__column sidesPadding">
                            <Mailto email="mail@inspiritum.com" classesNames="contacts__link content__link content__link--email">mail@inspiritum.com</Mailto>
                        </div>
                        <div className="contacts__column content__column sidesPadding">
                            {address}
                        </div>
                    </div>
                    <div ref={targetRef} style={{height: `calc(50vh + 7.69231rem)`}}>
                        <Maps initialCenter={initialMapCenter} center={mapCenter}/>
                    </div>
                </div>

            </CSSTransition>

        </div>
    );
}

export default ContactsCyprus;
