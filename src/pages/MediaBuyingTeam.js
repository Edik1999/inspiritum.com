import useAnimationState from '../hooks/useAnimationState';
import { CSSTransition } from 'react-transition-group';
import '../styles/pages/mediaBuyingTeam.sass';
import { useRef } from 'react';


const MediaBuyingTeam = () => {

    let animationState = useAnimationState();

    const nodeRef1 = useRef(null),
    nodeRef2 = useRef(null);

    return (
        <div className='MediaBuyingTeam content'>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef1}>

                <h1 className='MediaBuyingTeam__title content__mainTitle sidesPadding' ref={nodeRef1}>About Media Buying Team</h1>

            </CSSTransition>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef2}>

                <div className="MediaBuyingTeam__wrapper content__wrapper" ref={nodeRef2}>
                    <div className="MediaBuyingTeam__bigText content__bigText sidesPadding">
                        From the very beginning, in&nbsp;2007, we&nbsp;have started as&nbsp;a&nbsp;media buying team. After more than 10&nbsp;years, media buying is&nbsp;still a&nbsp;core of&nbsp;our business.
                    </div>
                    <div className="MediaBuyingTeam__text content__text sidesPadding">
                        We&nbsp;have assembled the excellent team, including graduates of&nbsp;the best tech universities; have automatized routine processes of&nbsp;buying and interacting with ad&nbsp;networks; we&nbsp;widely use statistic models and machine learning. In&nbsp;total it&nbsp;allows&nbsp;us to&nbsp;achieve corresponding results.
                    </div>
                    <div className="MediaBuyingTeam__columns content__columns">
                        <div className="MediaBuyingTeam__column content__column sidesPadding count">
                            1 500 000
                        </div>
                        <div className="MediaBuyingTeam__column content__column MediaBuyingTeam__bigText content__bigText sidesPadding">
                            subscriptions are generated monthly by our media buying team.
                        </div>
                    </div>
                </div>

            </CSSTransition>

        </div>
    );
}

export default MediaBuyingTeam;
