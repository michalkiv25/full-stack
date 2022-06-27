module.exports = {
    env: process.env.NODE_ENV,
    axios: {
      baseUrl: process.env.REACT_APP_AXIOS_BASEURL,
      timeout: process.env.REACT_APP_AXIOS_TIMEOUT,
    },
  };
  