import React from "react";
import AlbumVersionsPaginationDesktop from '../components/AlbumVersionsPaginationDesktop';
import { useViewPort } from '../custom-hooks/useViewPort';

function AlbumVersionsPaginationWrapper(props) {

    console.log('Render: AlbumVersionsPaginationWrapper Component');

    /** Destructure width variable from useViewPort hook */
    const { width } = useViewPort();

    /** Declare value for minimum breakpoint value  */
    const breakpoint = 381; 

    return (
        <AlbumVersionsPaginationDesktop {...props} />
    );
};

export default AlbumVersionsPaginationWrapper;