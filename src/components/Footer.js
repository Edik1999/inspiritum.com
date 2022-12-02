import '../styles/footer.sass';
import {Link} from 'react-router-dom';
import privacy from '../docs/privacy_policy.pdf';
import privacy_RTB from '../docs/privacy_policy_rtb.pdf';
import { useNavigate } from 'react-router-dom';

const Footer = ({disabled, menuState, bp, location}) => {

    const navigate = useNavigate();

    return (
        <footer className={`footer sidesPadding ${(disabled && bp === 'mobile') || menuState ? "d-none" : "" }`}>
            <div className={`footer__links links ${disabled || menuState ? "hidden" : "" }`}>
                <Link to={privacy} target="_blank" className='links__item'>Privacy policy</Link>
                <Link to={privacy_RTB} target="_blank" className='links__item'>Privacy policy RTB</Link>
            </div>
            <div className={`footer__subtitle leftSidePadding ${disabled || menuState ? "hidden" : "" }`}>
                <Link to="/news" className='subtitle'>News</Link>
            </div>
            <div className="footer__social">
                <a href="https://ru.linkedin.com/company/inspiritum-ltd" target="_blank" rel="noopener noreferrer" className='social__link'>
                    <svg>
                        <g>
                            <path xmlns="http://www.w3.org/2000/svg" d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z" fill="#fff" data-original="#fff000" />
                            <path xmlns="http://www.w3.org/2000/svg" d="m.396 7.977h4.976v16.023h-4.976z" fill="#fff" data-original="#fff000"/>
                            <path xmlns="http://www.w3.org/2000/svg" d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z" fill="#fff" data-original="#fff000"/>
                        </g>
                    </svg>
                </a>
            </div>
            { location === '/feedback' 
                ?
                    <button className="sidesPadding footer__closeFeedback" onClick={() => navigate(-1)}>Close Feedback</button>
                :
                    null
            }
        </footer>
    );
}

export default Footer;
