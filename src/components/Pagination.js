import React from 'react';

function Pagination (props) {

    /**Build page links*/
    const pageLinks = []

    for(let i = 1; i <= props.totalPages + 1; i++){
        let active = (props.currentPage === i) ? 'active' : '';
        
        pageLinks.push(<li key={i} className={`page item ${active}`} >{i}</li>)
    };

    if(props.totalPages > 1){
        return(
        <h1>Pagination links</h1>
        )
    };

    return(null);

}


export default Pagination;
