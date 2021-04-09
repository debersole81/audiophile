import React from 'react';
import { useViewPort } from '../custom-hooks/useViewPort';
import SearchResultsPaginationDesktop from './SearchResultsPaginationDesktop';
import SearchResultsPaginationMobile from './SearchResultsPaginationMobile';


function SeaarchResultsPaginationWrapper(props) {
    console.log('Render: SearchResultsPaginationWrapper Component');

    /** Destructure width variable from useViewPort hook */
    const { width } = useViewPort();

    /** Declare variable for minimum breakpoint value */
    const breakpoint = 381;

    return ( width > breakpoint ? <SearchResultsPaginationDesktop {...props} /> : <SearchResultsPaginationMobile {...props} />  );
};

export default SeaarchResultsPaginationWrapper;