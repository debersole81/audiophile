import React from 'react';
import { useViewPort } from '../custom-hooks/useViewPort';
import SearchResultsPaginationDesktop from './SearchResultsPaginationDesktop';


function SeaarchResultsPaginationWrapper(props) {
    console.log('Render: SearchResultsPaginationWrapper Component');
    console.log(props);

    /** Destructure width variable from useViewPort hook */
    const { width } = useViewPort();

    /** Declare variable for minimum breakpoint value */
    const breakpoint = 381;

    return ( <SearchResultsPaginationDesktop /> );
};

export default SeaarchResultsPaginationWrapper;