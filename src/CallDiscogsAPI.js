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
    

}

export default callDiscogsAPI;