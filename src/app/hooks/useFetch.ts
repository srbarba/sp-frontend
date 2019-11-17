import { useState, useEffect } from 'react';
import axios from 'app/api';
import { AxiosError } from 'axios';

export const useFetch = (
  url: string,
  options?: {},
  errorCallback?: (error: AxiosError) => any
) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url, options)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => errorCallback && errorCallback(error));
  }, []);

  return [data, loading];
};
