import React from "react";
import AlbumVersionsPaginationDesktop from '../components/AlbumVersionsPaginationDesktop';
import AlbumVersionsPaginationMobile from '../components/AlbumVersionsPaginationMobile';
import { useViewPort } from '../custom-hooks/useViewPort';

function AlbumVersionsPaginationWrapper(props) {

    console.log('Render: AlbumVersionsPaginationWrapper Component');

    /** Destructure width variable from useViewPort hook */
    const { width } = useViewPort();
  
    /** Declare variable for minimum breakpoint value  */
    const breakpoint = 381;

    return (width < breakpoint ?  <AlbumVersionsPaginationMobile {...props} /> : <AlbumVersionsPaginationDesktop {...props} />);
};

export default AlbumVersionsPaginationWrapper;