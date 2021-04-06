import React from "react";
import AlbumVersionsPaginationDesktop from '../components/AlbumVersionsPaginationDesktop';

function AlbumVersionsPaginationWrapper(props) {

    console.log('Render: AlbumVersionsPaginationWrapper Component');

    return (
        <AlbumVersionsPaginationDesktop {...props}/>
    );
};

export default AlbumVersionsPaginationWrapper;