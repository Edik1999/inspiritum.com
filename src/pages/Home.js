import '../styles/pages/home.sass';
import '../styles/animation.sass';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import useAnimationState from '../hooks/useAnimationState';
import { useRef } from 'react';

const Home = () => {

    let animationState = useAnimationState();
    const nodeRef = useRef(null);

    return (
        
        <div className='home content sidesPadding'>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef}>

                <h1 className='home__title content__mainTitle' ref={nodeRef}>Inspiration<br />creates<br />awesome mobile<br />solutions</h1>

            </CSSTransition>

            <div className="home__news news">
                <div className="news__date">10 February</div>
                <Link className="news__link" to="/">Inspiritum in Serbia</Link>
            </div>
        </div>

    );
}

export default Home;
