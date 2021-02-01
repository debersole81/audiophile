/**Abstraction for Discogs API call*/

const callDiscogsAPI = (q, page, per_page) => {

    /**Build Query*/
    const buildQuery = {
        format: 'vinyl',
        key: 'KNMVnsceTtAqbvAVbsPX',
        secret: 'YjfVFNTeaEqVblcDGkanBBRSWPAeIXBO',
        q,
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

    

}

export default callDiscogsAPI;