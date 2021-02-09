import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

function paginationFunc (props) {

    console.log(props);
    console.log(props.pagination);
    console.log(props.pagination.page);

    /**Build array to store each page as a number*/
    const pages = []

    for(let i = 1; i <= props.pagination.pages + 1; i++){    
        pages.push(i)
    };

    console.log(pages);

    if(props.pagination.pages > 1){
        return(
        <React.Fragment>
            <Pagination className='mt-3 justify-content-md-center'>
                <Pagination.First className={props.pagination.page === 1 ? 'disabled' : ''}>First</Pagination.First>
                <Pagination.Prev className={props.pagination.page === 1 ? 'disable' : ''}>Previous</Pagination.Prev>
                <Pagination.Item>{pages}</Pagination.Item>
                <Pagination.Next className={props.pagination.page === props.pagination.pages ? 'disabled' : ''} onClick={() => props.handlePagination(props.pagination.page + 2)}>Next</Pagination.Next>
                <Pagination.Last className={props.pagination.page === props.pagination.pages ? 'disabled' : ''}>Last</Pagination.Last>
            </Pagination>
        </React.Fragment>
        )
    };

    return(null);

}


export default paginationFunc;
