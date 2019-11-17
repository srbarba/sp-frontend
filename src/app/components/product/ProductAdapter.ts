import { useFetch } from 'app/hooks';
import { useHistory } from 'react-router-dom';
import { AxiosError } from 'axios';

export const getProductById = (id: string) => {
  const history = useHistory();
  const [product, loading] = useFetch(
    `/product/${id}`,
    {},
    (error: AxiosError) => {
      return (
        error.response &&
        error.response.status.toString() === '404' &&
        history.push('/404')
      );
    }
  );

  return { product, loading};
};