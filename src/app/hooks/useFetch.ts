import { useState } from 'react';
import axios from 'app/api';
import { AxiosError, AxiosRequestConfig } from 'axios';

export const useFetch = (
  url: string,
  requestConfig: AxiosRequestConfig,
  errorCallback?: (error: AxiosError) => any
) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { method, ...config } = requestConfig;

  const getData = (options: any) => {
    axios({
      url,
      method: method || 'get',
      ...config,
      ...options
    })
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => errorCallback && errorCallback(error));
  };

  return [data, loading, getData];
};
