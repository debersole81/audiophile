/**Wrapper for Discogs API calls*/

/**Build query object*/
const buildQuery = {
    q: '',
    format: 'vinyl',
    key: 'KNMVnsceTtAqbvAVbsPX',
    secret: 'YjfVFNTeaEqVblcDGkanBBRSWPAeIXBO',
    type: '',
    page: '',
    per_page: ''
};

/**Build URL*/
const baseURL = 'https://api.discogs.com';
const searchURL = '/database/search?';

const callDiscogsSearchEP = (q, page, per_page = 25, type) => {
    
    buildQuery.q = q;
    buildQuery.page = page;
    buildQuery.per_page = per_page;
    buildQuery.type = type;

    let url = baseURL + searchURL;

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

// const callDiscogsMasterEP
// const callDiscogsReleaseEP

const callDiscogsSearchEPMaster = (q, page, per_page) => {
    return callDiscogsSearchEP(q, page, per_page, 'master')
}; 

export { callDiscogsSearchEP };