const axiosClient = require('axios');

const client = axiosClient.create({
    baseURL: axios.baseUrl,
    timeout: axios.timeout,
    headers: {
      'Content-Type': 'text/xml;charset=utf-8',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
      Accept: '*/*',
    },
  });



  module.exports = client;
