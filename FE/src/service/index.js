const axios = require('axios').default;

const baseUrl = 'http://localhost:9000/api/';
let helper = {};

helper.getApi = async (params={}, url) => {
    return await axios.get(url, { params })
}

export {
    helper,
    baseUrl
}