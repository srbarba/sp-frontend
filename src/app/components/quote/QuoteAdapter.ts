import { useFetch } from 'app/hooks';
import { AxiosError } from 'axios';

export const addProduct = () => {
  const [response, loading, addProductToQuote] = useFetch(
    '5dc002a83100009173be3d54',
    {
      method: 'post'
    },
    (error: AxiosError) => {
      return error.response;
    }
  );

  return { response, loading, addProductToQuote };
};
