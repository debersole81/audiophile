import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

function paginationFunc (props) {

    console.log(props);
    console.log(props.pagination);
    console.log(props.pagination.page);

    /**Build array to store each page as a number*/
    const activePage = props.pagination.page
    const pages = []

    for(let i = 1; i <= props.pagination.pages; i++){    
        pages.push(
            <Pagination.Item key={i} id={i} className={(i === activePage ? 'active' : null)} onClick={props.handleCurrentPage}>
                {i}
            </Pagination.Item>
        )
    };

    console.log(pages);

    if(props.pagination.pages > 1){
        return(
        <React.Fragment>
            <Pagination className='mt-3 justify-content-md-center'>
                <Pagination.First className={props.pagination.page === 1 ? 'disabled' : ''} onClick={props.handleFirstPage}>First</Pagination.First>
                <Pagination.Prev className={props.pagination.page === 1 ? 'disable' : ''}>Previous</Pagination.Prev>
                {pages}
                <Pagination.Next className={props.pagination.page === props.pagination.pages ? 'disabled' : ''} onClick={() => props.handlePagination(props.pagination.page + 2)}>Next</Pagination.Next>
                <Pagination.Last className={props.pagination.page === props.pagination.pages ? 'disabled' : ''}>Last</Pagination.Last>
            </Pagination>
        </React.Fragment>
        )
    };

    return(null);

}


export default paginationFunc;
