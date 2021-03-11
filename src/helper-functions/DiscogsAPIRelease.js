/**Helper function for Discgos API Release endpoint call*/

const discogsAPIRelease = (main_release) => {
    
    /*Build URL*/
    const baseURL = 'https://api.discogs.com/releases/';

    let url = baseURL + main_release;

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

export default discogsAPIRelease;

