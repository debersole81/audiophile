import React from 'react';

function AlbumVersionsPaginationDesktop(props) {

    console.log('Render: AlbumVersionsPaginationDesktop Component');

    /**Destructure props*/
    const { albumVersionsPagination } = props.albumVersionsPaginationProps;
    const { albumVersionsMinPages } = props.albumVersionsPaginationProps;
    const { albumVersionsMaxPages } = props.albumVersionsPaginationProps;
    const { handleCurrentAlbumVersionsPage } = props.albumVersionsPaginationProps;
    const { handleFirstAlbumVersionsPage } = props.albumVersionsPaginationProps;
    const { handlePreviousAlbumVersionsPage } = props.albumVersionsPaginationProps;
    const { handleNextAlbumVersionsPage } = props.albumVersionsPaginationProps;
    const { handleLastAlbumVersionsPage } = props.albumVersionsPaginationProps;

    

    return(
        <h1>Desktop version</h1>
    );
};

export default AlbumVersionsPaginationDesktop;