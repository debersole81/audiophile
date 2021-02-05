import React from 'react';

function Pagination (props) {

    /**Build page links*/
    const pageLinks = []

    for(let i = 1; i <= props.totalPages + 1; i++){
        let active = (props.currentPage === i) ? 'active' : '';
        
        pageLinks.push(<li key={i} className={`page item ${active}`} onClick={props.handleNextPage}><a href='#'>{i}</a></li>)
    };

    console.log(pageLinks);

    if(props.totalPages > 1){
        return(
        <div className='container'>
            <div className='row'>
                <ul className='pagination'>
                    { pageLinks }
                </ul>
            </div>
        </div>
        )
    };

    return(null);

}


export default Pagination;
