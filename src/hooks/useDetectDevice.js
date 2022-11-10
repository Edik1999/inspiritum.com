import { useState, useEffect } from 'react';

const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

function useDetectDevice() {
    // save current window width in the state object
    let [width, setWidth] = useState(getWidth());

    // in this case useEffect will execute only once because
    // it does not have any dependencies.
    useEffect(() => {
        // timeoutId for debounce mechanism
        let timeoutId = null;
        const resizeListener = () => {
            // prevent execution of previous setTimeout
            clearTimeout(timeoutId);
            // change width from the state object after 150 milliseconds
            timeoutId = setTimeout(() =>
                setWidth(getWidth()), 150);
        };
        // set resize listener
        window.addEventListener('resize', resizeListener);

        // clean up function
        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    }, [])

    let bp;

    if (width <= 640) {
        bp = 'mobile';
    } else if (width <= 1200) {
        bp = 'tablet';
    } else if (width > 1200) {
        bp = 'desktop';
    }

    return bp;
}

export default useDetectDevice;
