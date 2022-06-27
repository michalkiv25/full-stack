import { useState, useCallback } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;

// option two
// import axiosClient from '../config/axios';
// const useAxios = () => {
//   const [response, setResponse] = useState(undefined);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const operation = async (params) => {
//     const options = {
//       method: 'GET',
//       ...params,
//     };

//     try {
//       setLoading(true)
//       const result = await axiosClient.request(options);
//       setResponse(result.data);
//     } catch (e) {
//       setError(e);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     response,
//     error,
//     loading,
//     operation,
//   };
// };

// export default useAxios;
