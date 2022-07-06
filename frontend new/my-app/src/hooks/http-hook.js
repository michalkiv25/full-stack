import { useState, useCallback } from 'react';

export const useHttp = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method,
        body,
        headers,
      });
      const responseBackendMes = await response.json();

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      setIsLoading(false);
      return responseBackendMes;

    } catch (err) {
      setError(err.message || 'Something went wrong!');
      setIsLoading(false);
      throw err
    }

  }, []);

  const clearError = () => {
    setError(null);
  };

  return {
    isLoading,
    error,
    sendRequest,
    clearError
  };
};


// option two axios
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
