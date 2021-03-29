/**Helper function for Discogs API Master Release Versions endpoint call*/

const discogsAPIMasterReleaseVersions = (masterId, page, per_page) => {

    /**Build Query*/
    const buildQuery = {
        page,
        per_page,
    };
    
    /**Build URL*/
    const baseURL = 'https://api.discogs.com/masters/';
    const urlAppend = '/versions?';
    
    let url = baseURL + masterId + urlAppend;

    for (let [key, value] of Object.entries(buildQuery)) {
        url = url + key + '=' + value + '&';
    }
    url = url.slice(0, -1);

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

export default discogsAPIMasterReleaseVersions;
