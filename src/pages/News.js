import useAnimationState from '../hooks/useAnimationState';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import '../styles/pages/news.sass';
import { useEffect, useState, useRef } from 'react';
import { news } from '../mocks/news.js';
import moment from 'moment';
import uuid from 'react-uuid';

const News = () => {

    const [newsItems, setNewsItems] = useState([]);
    const [Loading, setLoading] = useState(true);

    let animationState = useAnimationState();

    useEffect(() => {
        // setTimeout(() => {
            setLoading(false);
            setNewsItems(news.sort((a,b) => b.date - a.date));
        // }, 1000)
    }, [newsItems]);

    const nodeRef1 = useRef(null),
        nodeRef2 = useRef(null);

    let twoColumns = false,
        withYear = false,
        year;


    return (
        <div className='news content'>
            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef1}>

                <h1 className='news__title content__mainTitle sidesPadding' ref={nodeRef1}>News</h1>

            </CSSTransition>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef2}>

                <div className="news__wrapper content__wrapper" ref={nodeRef2}>

                    {
                        !Loading ?
                            newsItems.map((item) => {

                                withYear = false;

                                if (year !== moment.unix(item.date).format('YYYY')){
                                    year = moment.unix(item.date).format('YYYY');
                                    withYear = true;
                                }
                                
                                return (
                                    <div className="news__monthWrapper" key={uuid()}>
                                        <div className="news__month sidesPadding">
                                            {moment.unix(item.date).format(`MMMM ${withYear ? ' YYYY' : ''}`)}
                                        </div>
                                        <div className="news__list sidesPadding">
                                            {   
                                                item.items.map((el, index) => {
                                                    if (item.items.length > 2) {
                                                       twoColumns = true;
                                                    }
                                                    return (
                                                        <div className={`news__item item ${twoColumns && index === 1 ? 'secondItem' : ''} ${twoColumns && index === 2 ? 'thirdItem' : ''}`} key={uuid()}>
                                                            {twoColumns = false}
                                                            <p className="item__month">{moment.unix(el.date).format('DD MMMM')}</p>
                                                            <Link to={`/news/${el.newsId}`} className='item__link'>
                                                                <img src={process.env.PUBLIC_URL + el.img} alt="" className='item__img' />
                                                                <p className="item__title">{el.title}</p>
                                                            </Link>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        :
                            null
                    }

                </div>

            </CSSTransition>

        </div>
    );
}

export default News;

