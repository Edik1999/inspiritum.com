import '../styles/pages/home.sass';
import '../styles/helpers/animation.sass';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import useAnimationState from '../hooks/useAnimationState';
import { useRef, useEffect, useState } from 'react';
import moment from 'moment';

const Home = () => {

    const [content, setContent] = useState();
    const [loading, setLoading] = useState(true);

    let animationState = useAnimationState();
    const nodeRef = useRef(null);

    useEffect(() => {
        
        fetch(`https://63877b80e399d2e473007a2a.mockapi.io/home`)
        .then( response => response.json())
        .then( result => {
            setContent(result);
            setLoading(false);
        })

        return () => {
            setLoading(true); 
        };
    }, []);

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

            { !loading &&
                <div className="home__news news">
                    <div className="news__date">{moment(content[0].date).format('DD MMMM')}</div>
                    <Link className="news__link" to={`/news/${content[0].id}`}>{content[0].title}</Link>
                </div>
            }
        </div>

    );
}

export default Home;
