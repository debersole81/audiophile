/**Helper function for Discogs API Master Release endpoint call*/

const discogsAPIMasterRelease = (masterId) => {

    /**Build URL*/
    const baseURL = 'https://api.discogs.com/masters/';
    
    let url = baseURL + masterId;
    
    /**Build HTTP request method + headers*/
    const requestOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Discogs key=KNMVnsceTtAqbvAVbsPX, secret=YjfVFNTeaEqVblcDGkanBBRSWPAeIXBO',
            'User-Agent': 'vinylrecordscatalogue/1.0+localhost:3000'
        }
    };

    return fetch(url, requestOptions);

};

export default discogsAPIMasterRelease;

