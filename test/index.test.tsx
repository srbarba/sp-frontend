import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App } from 'app/App';
import { MemoryRouter, Router, Route } from 'react-router-dom';
import { Product, NotFound } from 'src/app/pages';

configure({ adapter: new Adapter() });

describe('App', () => {

  it('home path should redirect to Product Page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
    );

    const history = wrapper.find(Router).getElements().map(r => r.props.history);

    expect(history).toHaveLength(2);
    expect(history[0].action).toBe("POP");
    expect(history[0].location.pathname).toBe("/");
    expect(history[1].action).toBe("REPLACE");
    expect(history[1].location.pathname).toBe("/product/0176944");
    expect(wrapper.find(Product)).toHaveLength(1);
  });

  it('404 path should redirect to Product Page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/404' ]}>
        <Route exact={true} path="/product/:id" component={Product} />
        <Route exact={true} path="/404" component={NotFound} />
      </MemoryRouter>
    );

    const history = wrapper.find(Router).getElements().map(r => r.props.history);

    expect(history).toHaveLength(1);
    expect(history[0].action).toBe("REPLACE");
    expect(history[0].location.pathname).toBe("/product/0176944");
    expect(wrapper.find(Product)).toHaveLength(1);
  });

  it('invalid product id should redirect to Product Page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/product/1']}>
        <Route exact={true} path="/product/:id" component={Product} />
        <Route exact={true} path="/404" component={NotFound} />
      </MemoryRouter>
    );

    const history = wrapper.find(Router).getElements().map(r => r.props.history);

    expect(history).toHaveLength(1);
    expect(history[0].action).toBe("REPLACE");
    expect(history[0].location.pathname).toBe("/product/0176944");
    expect(wrapper.find(Product)).toHaveLength(1);
  });

  it('valid product should load Product Page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/product/0176944' ]}>
        <Route exact={true} path="/product/:id" component={Product} />
      </MemoryRouter>
    );

    const history = wrapper.find(Router).getElements().map(r => r.props.history);

    expect(history).toHaveLength(1);
    expect(history[0].action).toBe("POP");
    expect(history[0].location.pathname).toBe("/product/0176944");
    expect(wrapper.find(Product)).toHaveLength(1);
  });
});
