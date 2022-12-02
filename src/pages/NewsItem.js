import { CSSTransition } from 'react-transition-group';
import '../styles/pages/newsItem.sass';
import { useRef, useState, useEffect } from 'react';
import moment from 'moment';
import Slider from "react-slick";
import uuid from 'react-uuid';
import {useLocation} from 'react-router-dom';

import Loader from '../components/Loader';

const NewsItem = ({loading, loadingFunc}) => {

    const [content, setContent] = useState([]);
    const [hasImages, setHasImages] = useState(false);
    const [slideInfo, setSlideInfo] = useState({
        activeSlide: 0,
        slidesCount: 0,
    });
    const [startAnimation, setStartAnimation] = useState(false);


    const nodeRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: current => setSlideInfo({ ...slideInfo, activeSlide: current }),
    };

    let location = useLocation(),
        pathname = location.pathname,
        id = pathname.match(/\d+/)[0];

    useEffect(() => {

        fetch(`https://63877b80e399d2e473007a2a.mockapi.io/news/${id}`)
        .then( response => response.json())
        .then( result => {
            setContent(result);
            loadingFunc(false);
        })

        return () => {
            loadingFunc(true);
        };
    }, [id, loadingFunc]);

    useEffect(() => {

        if (content.images){
            setHasImages(true);
            setSlideInfo(slideInfo => ({ ...slideInfo, slidesCount: content.images.length}));
        }

        if (content.title){
            setStartAnimation(true);
        }
    }, [content]);

    return (
        <div className='newsItem content'>
            { !loading 
                ?
                    <CSSTransition
                        classNames="animation"
                        in={startAnimation}
                        timeout={900}
                        mountOnEnter
                        unmountOnExit
                        nodeRef={nodeRef}>

                        <div className="newsItem__wrapper content__wrapper" ref={nodeRef}>
                            <div className="newsItem__bigText content__bigText sidesPadding">
                                {content.title}
                            </div>
                            <div className="newsItem__text newsItem__text--date content__text sidesPadding">
                                {moment(content.date).format('DD MMMM YYYY')}
                            </div>
                            { hasImages
                                ?
                                    <div className="newsItem__sliderWrapper sidesPadding">
                                        <Slider {...settings}>
                                            {content.images.map(img => {
                                                // eslint-disable-next-line
                                                {/* !!!!!! img для fake api, раскоментить нижний для прода !!!!!!*/}
                                                return <img src={img.src} alt="" key={uuid()} />
                                                // eslint-disable-next-line
                                                {/* return <img src={process.env.PUBLIC_URL + img.src} alt="" key={uuid()} /> */}
                                            })}
                                        </Slider>
                                        <p className="newsItem__sliderCounter sidesPadding">{slideInfo.activeSlide + 1} / {slideInfo.slidesCount}</p>
                                    </div>
                                :
                                    null
                            }
                            <div 
                                className="newsItem__text content__text sidesPadding"
                                dangerouslySetInnerHTML={{__html: content.content}}>
                            </div>
                        </div>

                    </CSSTransition>
                :
                    <Loader/>
            }

        </div>
    );
}

export default NewsItem;
