import useAnimationState from '../hooks/useAnimationState';
import { CSSTransition } from 'react-transition-group';
import '../styles/pages/feedback.sass';
import { useRef, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import TextareaAutoheight from '../helpers/textareaAutoheight';
import submit from '../img/sprite/submit.svg'

const Feedback = ({bp}) => {

    const [isVisibleForm, setIsVisibleForm] = useState(true);
    const [isDisabled, setIsDisabled] = useState(true);
    const [hasErrors, setHasErrors] = useState(false);

    let animationState = useAnimationState();

    useEffect(() => {
        setTimeout(() => {
            TextareaAutoheight();
        }, 910)
    }, []);
    
    const nodeRef1 = useRef(null),
        nodeRef2 = useRef(null);

    const { register, watch, formState: { errors }, handleSubmit } = useForm();

    const watchAllFields = watch();

    useEffect(() => {
        if(watchAllFields.name){
            if (watchAllFields.name !== '' && watchAllFields.phone !== '' && watchAllFields.email !== '' && watchAllFields.message !== '') {
                setIsDisabled(false)
            } else {
                setIsDisabled(true)
            }
        }
        if(errors.name || errors.phone || errors.email || errors.message){
            setHasErrors(true)
        } else {
            setHasErrors(false)
        }
    }, [watchAllFields, errors.name, errors.phone, errors.email, errors.message]);
    

    const onSubmit = (data) => {
        console.log(data)
        fetch('https://63877b80e399d2e473007a2a.mockapi.io/feedback', {
            method: 'POST',
            // headers: {'Content-Type': 'application/json'},
            // body: data
        })
        .then(response => {
            if (response.ok) {
                setIsVisibleForm(false)
            } else {
                alert('Something went wrong')
            }
        })
    };

    return (
        <div className='feedback content'>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef1}>

                <h1 className='feedback__mainTitle content__mainTitle sidesPadding' ref={nodeRef1}>Feedback</h1>

            </CSSTransition>

            <CSSTransition
                classNames="animation"
                in={animationState}
                timeout={900}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef2}>

                <div className="feedback__wrapper content__wrapper" ref={nodeRef2}>
                    { isVisibleForm
                        ?
                            <form onSubmit={handleSubmit(onSubmit)} className={`feedback__form form ${bp === 'mobile' ? 'sidesPadding' : ''}`} action="/" autoComplete="off">

                                <div className="form__inputBox">
                                    <label htmlFor="title" className="form__label sidesPadding">Title</label>

                                    <input
                                        id="title"
                                        type="text"
                                        className="form__input"
                                        placeholder={bp === 'mobile' ? "Title" : null}
                                        aria-invalid={errors.title ? "true" : "false"}
                                        {...register('title', {})}
                                    />
                                </div>

                                <div className="form__inputBox">
                                    <label htmlFor="name" className="form__label sidesPadding">Name</label>

                                    <input
                                        id="name"
                                        type="text"
                                        className="form__input"
                                        placeholder={bp === 'mobile' ? "Name" : null}
                                        aria-invalid={errors.name ? "true" : "false"}
                                        {...register('name', { required: true, maxLength: 30 })}
                                    />

                                    {errors.name && errors.name.type === "required" && (
                                        <p className="form__error sidesPadding" role="alert">The name field is required.</p>
                                    )}
                                    {errors.name && errors.name.type === "maxLength" && (
                                        <p className="form__error sidesPadding" role="alert">The name field may not be greater than 30 characters.</p>
                                    )}
                                </div>

                                <div className="form__inputBox">

                                    <label htmlFor="phone" className="form__label sidesPadding">Phone number</label>

                                    <input
                                        id="phone"
                                        type="tel"
                                        className="form__input"
                                        placeholder={bp === 'mobile' ? "Phone number" : null}
                                        aria-invalid={errors.phone ? "true" : "false"}
                                        {...register('phone', { required: true, maxLength: 20 })}
                                    />

                                    {errors.phone && errors.phone.type === "required" && (
                                        <p className="form__error sidesPadding" role="alert">The phone field is required.</p>
                                    )}
                                    {errors.phone && errors.phone.type === "maxLength" && (
                                        <p className="form__error sidesPadding" role="alert">The phone field may not be greater than 20 characters.</p>
                                    )}
                                    
                                </div>

                                <div className="form__inputBox">

                                    <label htmlFor="email" className="form__label sidesPadding">Email</label>

                                    <input
                                        id="email"
                                        type="text"
                                        className="form__input"
                                        placeholder={bp === 'mobile' ? "Email" : null}
                                        aria-invalid={errors.email ? "true" : "false"}
                                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                                    />

                                    {errors.email && errors.email.type === "required" && (
                                        <p className="form__error sidesPadding" role="alert">The email field is required.</p>
                                    )}
                                    {errors.email && errors.email.type === "pattern" && (
                                        <p className="form__error sidesPadding" role="alert">The email field must be a valid email.</p>
                                    )}
                                    
                                </div>

                                <div className="form__inputBox">

                                    <label htmlFor="message" className="form__label sidesPadding">Message</label>

                                    <div className="form__lines">
                                        <div className="form__line"></div>
                                        <div className="form__line"></div>
                                        <div className="form__line"></div>
                                        <div className="form__line"></div>
                                        <div className="form__line"></div>
                                        <div className="form__line"></div>
                                    </div>

                                    <textarea
                                        id="message"
                                        className="form__textarea"
                                        maxLength="410"
                                        placeholder={bp === 'mobile' ? "Message" : null}
                                        aria-invalid={errors.message ? "true" : "false"}
                                        {...register('message', { required: true, maxLength: 400 })}
                                    />                                    

                                    {errors.message && errors.message.type === "required" && (
                                        <p className="form__error sidesPadding" role="alert">The message field is required.</p>
                                    )}
                                    {errors.message && errors.message.type === "maxLength" && (
                                        <p className="form__error sidesPadding" role="alert">The message field may not be greater than 400 characters.</p>
                                    )}
                                    
                                </div>

                                <div className={`form__submitWrapper ${bp !== 'mobile' ? 'leftSidePadding' : ''}`}>

                                    <button type="submit" className="form__submit" disabled={(hasErrors || isDisabled) && "disabled"}>
                                        <img src={submit} alt="" className="form__icon"/>
                                    </button>
                                    
                                </div>

                            </form>
                        :
                            <div className="feedback__bigText content__bigText sidesPadding">Thanks for your feedback!</div>
                    }
                </div>

            </CSSTransition>

        </div>
    );
}

export default Feedback;
