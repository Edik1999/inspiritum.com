import React, { useState, useEffect } from 'react';
import '../styles/pages/home.sass';
import '../styles/animation.sass';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const Home = () => {

    const [animationState, setAnimationState] = useState();

    useEffect(() => {
        setAnimationState(true)
        return () => {
            setAnimationState(false)
        };
    }, []);

    return (
        
        <div className='home content sidesPadding'>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit>

                <h1 className='home__title content__mainTitle'>Inspiration<br />creates<br />awesome mobile<br />solutions</h1>

            </CSSTransition>

            <div className="home__news news">
                <div className="news__date">10 February</div>
                <Link className="news__link" to="/">Inspiritum in Serbia</Link>
            </div>
        </div>

    );
}

export default Home;
