import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../components/App';
import Header from '../components/header';

it('renders app', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

it('contains a Router', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Router)).not.toBe(undefined);
});

it('contains Routes', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Route).length).toBe(2);
});

it('display header component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Header)).not.toBe(undefined);
});
