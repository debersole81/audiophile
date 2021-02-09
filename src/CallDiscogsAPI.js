/**Abstraction for Discogs API call*/

const callDiscogsAPI = (q, page, per_page = 25) => {

    /**Build Query*/
    const buildQuery = {
        q,
        format: 'vinyl',
        key: 'KNMVnsceTtAqbvAVbsPX',
        secret: 'YjfVFNTeaEqVblcDGkanBBRSWPAeIXBO',
        page,
        per_page,
    };
    
    /**Build URL*/
    const baseURL = 'https://api.discogs.com/database/search?';
    
    let url = baseURL;

    for (let [key, value] of Object.entries(buildQuery)) {
        url = url + key + '=' + value + '&';
    }
    url = url.slice(0, -1);

    /**Build HTTP request method + headers*/
    const requestOptions = {
        method: 'GET',
        headers: {
            'Accept' : 'application/json',
            'User-Agent' : 'vinylrecordscatalogue/1.0+localhost:3000'
        }
    };

    return fetch(url, requestOptions);
}

export default callDiscogsAPI;