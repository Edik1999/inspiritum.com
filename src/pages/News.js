import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import '../styles/pages/news.sass';
import { useEffect, useState, useRef } from 'react';
import moment from 'moment';
import uuid from 'react-uuid';

import Loader from '../components/Loader';

const News = ({loading, loadingFunc}) => {

    const [newsItems, setNewsItems] = useState([]);
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {

        fetch('https://63877b80e399d2e473007a2a.mockapi.io/news')
        .then( response => response.json())
        .then( result => {
            setNewsItems(result.sort((a,b) => moment(b.date).format('YYYY') - moment(a.date).format('YYYY')));
            loadingFunc(false);
            setTimeout(() => {
                setStartAnimation(true);
            }, 20);
        })

        return () => {
            loadingFunc(true);
        };
    }, []);

    const nodeRef1 = useRef(null),
        nodeRef2 = useRef(null);

    let withYear = false,
        year,
        month,
        newMonth = false;


    return (
        <div className='news content'>
            { !loading 
                ?
                    <>
                        <CSSTransition
                            classNames="animation"
                            in={startAnimation}
                            timeout={900}
                            mountOnEnter
                            unmountOnExit
                            nodeRef={nodeRef1}>

                            <h1 className='news__title content__mainTitle sidesPadding' ref={nodeRef1}>News</h1>

                        </CSSTransition>
                
                        <CSSTransition
                            classNames="animation"
                            in={startAnimation}
                            timeout={900}
                            mountOnEnter
                            unmountOnExit
                            nodeRef={nodeRef2}>

                            <div className="news__wrapper content__wrapper" ref={nodeRef2}>

                                {newsItems.map((item) => {

                                    withYear = false;
                                    newMonth = false;

                                    if (year !== moment(item.date).format('YYYY')){
                                        year = moment(item.date).format('YYYY');
                                        withYear = true;
                                    }

                                    if (month !== moment(item.date).format('MMMM')){
                                        month = moment(item.date).format('MMMM');
                                        newMonth = true;
                                    }

                                    return (
                                        <div className={`news__item item sidesPadding ${!newMonth && 'secondItem'}`} key={uuid()}>
                                            { newMonth 
                                                ?
                                                    <div className="news__month sidesPadding">
                                                        {moment(item.date).format(`MMMM ${withYear ? ' YYYY' : ''}`)}
                                                    </div>
                                                :
                                                    null
                                            }
                                            <p className="item__month">{moment(item.date).format('DD MMMM')}</p>
                                            <Link to={`/news/${item.id}`} className='item__link'>

                                                {/* !!!!!! img для fake api, раскоментить нижний для прода !!!!!!*/}
                                                <img src={item.image} alt="" className='item__img' />
                                                {/* <img src={process.env.PUBLIC_URL + item.image} alt="" className='item__img' /> */}
                                                <p className="item__title">{item.title}</p>
                                            </Link>
                                        </div>
                                    )
                                })}

                            </div>

                        </CSSTransition>
                    </>
                :
                    <Loader/>
                            
            }

        </div>
    );
}

export default News;