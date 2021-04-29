/**Custom hook to render components based upon viewport size */

import { useState, useEffect } from 'react';


function useViewPort() {
    /** State variable to hold viewport width */
    const [width, setWidth] = useState(window.innerWidth);

    /** Listen for viewport width changes when the component mounts */
    useEffect(() => {
        //Handle window resize
        const handleWindowResize = () => setWidth(window.innerWidth);       
        //Listen to viewport width changes and fire window resize callback
        window.addEventListener('resize', handleWindowResize);
        //Remove event listener when component unmounts
        return () => window.addEventListener('resize', handleWindowResize);
    }, []);

    /** Return width for use in component */
    return { width };
};

export { useViewPort };