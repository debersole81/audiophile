import React from 'react';
import { useViewPort } from '../custom-hooks/useViewPort'

function SeaarchResultsPaginationWrapper() {
    console.log('Render: SearchResultsPaginationWrapper Component');

    /** Destructure width variable from useViewPort hook */
    const { width } = useViewPort();

    /** Declare variable for minimum breakpoint value */
    const breakpoint = 381;

    return (
        <h1>This is a wrapper</h1>
    );
};

export default SeaarchResultsPaginationWrapper;