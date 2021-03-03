/**Helper function for Discogs API Search endpoint call*/

const discogsAPIMaster = (masterId) => {

    /**Build URL*/
    const baseURL = 'https://api.discogs.com/masters/';

    const url = baseURL + masterId;

    /**Build HTTP request method + headers*/
    const requestOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'User-Agent': 'vinylrecordscatalogue/1.0+localhost:3000'
        }
    };

    return fetch(url, requestOptions);

};

export default discogsAPIMaster;

