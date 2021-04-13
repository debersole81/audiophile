import React from "react";
import AlbumReleasesPaginationDesktop from '../components/AlbumReleasesPaginationDesktop';
import AlbumReleasesPaginationMobile from '../components/AlbumReleasesPaginationMobile';
import { useViewPort } from '../custom-hooks/useViewPort';

function AlbumReleasesPaginationWrapper(props) {

    console.log('Render: AlbumVersionsPaginationWrapper Component');

    /** Destructure width variable from useViewPort hook */
    const { width } = useViewPort();
  
    /** Declare variable for minimum breakpoint value  */
    const breakpoint = 381;

    return (width < breakpoint ?  <AlbumReleasesPaginationMobile {...props} /> : <AlbumReleasesPaginationDesktop {...props} />);
};

export default AlbumReleasesPaginationWrapper;