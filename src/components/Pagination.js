import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

function paginationFunc (props) {

    console.log(props);
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
        <React.Fragment>
            <Pagination className='mt-3'>
                <Pagination.First>First</Pagination.First>
                <Pagination.Prev>Previous</Pagination.Prev>
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Next>Next</Pagination.Next>
                <Pagination.Last>Last</Pagination.Last>
            </Pagination>
        </React.Fragment>
        )
    };

    return(null);

}


export default paginationFunc;
