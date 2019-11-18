import React from 'react';
import { App } from 'app/App';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { NotFound, Product } from 'src/app/pages';

describe('App', () => {
  it('home path should redirect to Product Page', async () => {
    const { container, finishLoading } = renderWithRouter(<App />, {
      route: '/'
    });
    await finishLoading();

    expect(container.textContent).toContain('Nike Arrow');
    expect(container).toBeDefined();
  });

  it('invalid path should redirect to Product Page', async () => {
    const { container, finishLoading } = renderWithRouter(<App />, {
      route: '/404'
    });
    await finishLoading();

    expect(container.textContent).toContain('Nike Arrow');
    expect(container).toBeDefined();
  });

  it('invalid product id should redirect to Product Page', async () => {
    const { container, finishLoading } = renderWithRouter(
      <React.Fragment>
        <Route exact={true} path="/product/:id" component={Product} />
        <Route exact={true} path="/404" component={NotFound} />
      </React.Fragment>,
      { route: '/product/1' }
    );
    await finishLoading();

    expect(container.textContent).toContain('Nike Arrow');
    expect(container).toBeDefined();
  });

  it('valid product id should redirect to Product Page', async () => {
    const { container, finishLoading } = renderWithRouter(<App />, {
      route: '/product/0176944'
    });
    await finishLoading();

    expect(container.textContent).toContain('Nike Arrow');
    expect(container).toBeDefined();
  });
});

function renderWithRouter(
  ui: React.ReactElement,
  { route = '/', ...renderOptions } = {}
) {
  const history = createMemoryHistory({ initialEntries: [route] });
  const utils = render(<Router history={history}>{ui}</Router>, renderOptions);
  const finishLoading = async () =>
    await wait(() => expect(utils.queryByText('Loading')).toBeNull());
  return {
    ...utils,
    finishLoading,
    history
  };
}
