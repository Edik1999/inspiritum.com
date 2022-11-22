import useAnimationState from '../hooks/useAnimationState';
import { CSSTransition } from 'react-transition-group';
import '../styles/pages/adPlatform.sass';
import { useRef } from 'react';
import MobileTechnologyMenu from '../components/menu/mobileTechnologyMenu'


const AdPlatform = ({bp}) => {

    let animationState = useAnimationState();

    const nodeRef1 = useRef(null),
        nodeRef2 = useRef(null);

    return (
        <div className='adPlatform content'>

            { bp === 'mobile' &&
                <MobileTechnologyMenu element="adPlatform"/>
            }

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef1}>

                <h1 className='adPlatform__title content__mainTitle sidesPadding' ref={nodeRef1}>Ad Platform</h1>

            </CSSTransition>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef2}>

                <div className="adPlatform__wrapper content__wrapper" ref={nodeRef2}>
                    <div className="adPlatform__bigText content__bigText sidesPadding">
                        The functionality of&nbsp;the platform allows to&nbsp;deploy a&nbsp;full-fledged ad&nbsp;network, providing broad opportunities for each role:
                    </div>
                    <div className="adPlatform__text content__text sidesPadding">
                        <b>To&nbsp;publishers:</b>
                        <ul className="listWithDots content__listWithDots">
                            <li className="listWithDots__item">Convenient detailed statistics</li>
                            <li className="listWithDots__item">Flexible restriction settings</li>
                        </ul>
                    </div>
                    <div className="adPlatform__text content__text sidesPadding">
                        <b>To&nbsp;advertisers:</b>
                        <ul className="listWithDots content__listWithDots">
                            <li className="listWithDots__item">Broad settings of&nbsp;ad&nbsp;campaign</li>
                            <li className="listWithDots__item">Convenient detailed statistics</li>
                            <li className="listWithDots__item">Auto-optimization</li>
                        </ul>
                    </div>
                    <div className="adPlatform__text content__text sidesPadding">
                        <b>Supported pricing models:</b>
                        <ul className="listWithDots content__listWithDots">
                            <li className="listWithDots__item">CPC (cost per click)</li>
                            <li className="listWithDots__item">CPM (cost per motion)</li>
                            <li className="listWithDots__item">CPA (cost per action)</li>
                        </ul>
                    </div>
                    <div className="adPlatform__text content__text sidesPadding">
                        <b>Supported ad&nbsp;formats:</b>
                        <ul className="listWithDots content__listWithDots">
                            <li className="listWithDots__item">ClickUnder</li>
                            <li className="listWithDots__item">Banner</li>
                            <li className="listWithDots__item">Teaser (Image + Text)</li>
                            <li className="listWithDots__item">AdSpot (Slide Banner)</li>
                            <li className="listWithDots__item">Mobile Alert</li>
                        </ul>
                        <span>It&nbsp;is&nbsp;possible to&nbsp;add a&nbsp;new ad&nbsp;format in&nbsp;short time period.</span>
                    </div>
                    <div className="adPlatform__text content__text sidesPadding">
                        <b>The platform could work either as&nbsp;SSP or&nbsp;DSP, supporting easy integration under Open RTB 2.5&nbsp;protocol.</b>
                    </div>
                    <div className="adPlatform__text content__text sidesPadding">
                        On&nbsp;the basis of&nbsp;the platform our own commercial ad&nbsp;networks are working already, and the project with MNO was developed also.
                    </div>
                </div>

            </CSSTransition>

        </div>
    );
}

export default AdPlatform;
