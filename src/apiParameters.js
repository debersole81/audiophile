/**Buld HTTP query*/
const baseURL = 'https://api.discogs.com/database/search?'; //q=Nirvana&key=KNMVnsceTtAqbvAVbsPX&secret=YjfVFNTeaEqVblcDGkanBBRSWPAeIXBO'

const buildQuery = (q, page, per_page) => {
    return{
        format: 'vinyl',
        key: 'KNMVnsceTtAqbvAVbsPX',
        secret: 'YjfVFNTeaEqVblcDGkanBBRSWPAeIXBO', 
        q,
        page,
        per_page, //how would i default this to 25 if there was no argument (default arguments for JS functions)
    }
}


const defaultQuery = {
    q: '',
    page: 1,
    per_page: 25,
} 



const buildURL = (q) => {
    let url = baseURL;        
    
    for (let [key, value] of Object.entries(q)) {
        url = url + key + '=' + value + '&';
    }
    url = url.slice(0, -1);
};   

/**Build request method and headers*/
const defaultGETOptions = {
    method: 'GET',
    headers: {
        'Accept' : 'application/json',
        'User-Agent' : 'vinylrecordscatalogue/1.0+localhost:3000'
    }
};

export { defaultQuery, defaultGETOptions, buildURL };

/**build Discogs API function*/
//will this by async?
//buildquery
//buildURL
//buildGEToptions+headers
//return(fetch call + parameters)
    //return .json promise
        //pass .json to the promises
        //.then (promises) //it might make sense to not abstract this, unless there is a way to  
