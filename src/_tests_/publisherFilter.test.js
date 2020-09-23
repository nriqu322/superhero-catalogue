/* global React, shallow, sinon, render, mount */
import PublisherFilter from '../components/publisherFilter';

it('publisher renders ok', () => {
  const wrapper = render(<PublisherFilter publisherList={['Marvel Comics', 'DC Comics']} filterPublisher={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

it('publisher representation ok', () => {
  const wrapper = shallow(<PublisherFilter publisherList={['Marvel Comics', 'DC Comics']} filterPublisher={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

it('select filter should trigger an action', () => {
  const spy = sinon.spy();
  const wrapper = mount(<PublisherFilter publisherList={['Marvel Comics', 'DC Comics']} filterPublisher={spy} />);
  wrapper.find('select').simulate('change');
  expect(spy.calledOnce).toBe(true);
});
