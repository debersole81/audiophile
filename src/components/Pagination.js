import React from 'react';

function Pagination (props) {

    console.log(props.pagination);
    console.log(props.pagination.page);

    /**Build page links*/
    const pageLinks = []

    for(let i = 1; i <= props.pagination.pages + 1; i++){
        let active = (props.pagination.page === i) ? 'active' : '';
        
        pageLinks.push(<li key={i} className={`page-item ${active}`}><button onClick={props.handleNextPage}>{i}</button></li>)
    };

    console.log(pageLinks);

    if(props.pagination.pages > 1){
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
