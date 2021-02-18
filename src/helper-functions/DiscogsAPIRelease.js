/**Abstraction for call to Discogs API release endpoint*/

const discogsAPIRelease = (release_id = 62129) => {

    /**Build URL*/
    const baseURL = 'https://api.discogs.com/database/releases/';

    const url = baseURL + release_id;

    /**Build HTTP request method + headers*/
    const requestOptions = {
        method: 'GET',
        headers: {
            'Accept' : 'application/json',
            'User-Agent' : 'vinylrecordscatalogue/1.0+localhost:3000'
        }
    };

    return fetch(url, requestOptions);

};

export default discogsAPIRelease; 

