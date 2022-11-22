import { useRef, useEffect, useCallback } from 'react';

/**
 * @param {Function} onIntersect Function to call once intersected
 * @param {Object} optionsData Options object used to initialize IntersectionObserver
 * @param {boolean} onlyOnce Whether to stop observing after onIntersect is fired once
 * 
 * @returns {Object} A ref object created by useRef. Use this to assign to the element you want to observe.
 *
 * Usage:
 * const Component = () => {
 *   const targetRef = useIntersect(() => console.log('impressed!'));
 *
 *   return <div ref={targetRef}>Something here</div>
 * }
 */

const initialOptions = {
    root: null,
    rootMargin: '0px',
    threshold: [0],
};

const useIntersect = (onIntersect, optionsData, onlyOnce = false) => {

    const targets = () => {
        let menu = document.querySelector('.menu__linksList'),
        subtitle = document.querySelector('.menu__title ')

        return [menu, subtitle];
    }

    const hideMenu = (menu, subtitle) => {
        menu.style.opacity = '0';
        subtitle.style.opacity = '0';
        setTimeout(() => {
            menu.style.visibility = 'hidden';
        }, 210);
    }

    const showMenu = (menu, subtitle) => {
        menu.style.visibility = 'visible';
        menu.style.opacity = '1';
        subtitle.style.opacity = '0.4';
    }

    const intersected = useRef(false);
    const targetRef = useRef();
    const observer = useRef(null);

    const options = optionsData || initialOptions;

    const handleIntersect = useCallback(
        entries => {
            const isIntersecting = (entries[0] && entries[0].isIntersecting) || false;
            const menuTargets = targets();

            if (isIntersecting) {
                onIntersect();
                hideMenu(menuTargets[0], menuTargets[1]);

                if (!intersected.current && observer.current && onlyOnce) {
                    observer.current.disconnect();
                    observer.current = null;
                    intersected.current = true;
                }
            } else {
                onIntersect();
                showMenu(menuTargets[0], menuTargets[1]);
            }
        },
        [onIntersect, observer, intersected, onlyOnce],
    );

    useEffect(() => {
        setTimeout(() => {
            if (!intersected.current && !observer.current) {
                observer.current = new IntersectionObserver(handleIntersect, options);
                observer.current.observe(targetRef.current);
            }

            return () => {
                if (observer.current) {
                    observer.current.disconnect();
                    observer.current = null;
                }
            };
        }, 920);
    }, [handleIntersect, options, targetRef]);

    return targetRef;
};

export default useIntersect;