import React from 'react';


function SearchResults (state) {

    console.log(state.items);

    if(state.items !== undefined) {
        return(
            <div>
                {state.items.map((results) =>
                    <h1>{results.title}</h1>
                )};
            </div>
        );
    }

    return(
        <div>
            <h1>Search for something!</h1>
        </div>
    );
};


export default SearchResults;