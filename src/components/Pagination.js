import React from 'react';

function Pagination (props) {

    if(props.totalPages > 1){
        return(
        <h1>Pagination links</h1>
        )
    };

    return(null);

}


export default Pagination;
