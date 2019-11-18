import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import productMock from 'src/mock/product.json';

// mock getProduct with axios-mock-adapter
new MockAdapter(axios)
  .onGet('/product/0176944')
  .reply(200, productMock)
  .onGet(/\/product\/.*/)
  .reply(404)
  .onAny()
  .passThrough();

export default axios.create({
  baseURL: 'http://www.mocky.io/v2/'
});
