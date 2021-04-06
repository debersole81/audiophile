import React from "react";
import AlbumVersionsPaginationDesktop from '../components/AlbumVersionsPaginationDesktop';
import { useViewPort } from '../custom-hooks/useViewPort';

function AlbumVersionsPaginationWrapper(props) {

    console.log('Render: AlbumVersionsPaginationWrapper Component');

    return (
        <AlbumVersionsPaginationDesktop {...props} />
    );
};

export default AlbumVersionsPaginationWrapper;