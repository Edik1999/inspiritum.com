import React from 'react';

const Mailto = ({ email, classesNames, ...props }) => {
    return (
        <a href={`mailto:${email}`} className={classesNames}>
            {props.children}
        </a>
    );
}

export default Mailto;
