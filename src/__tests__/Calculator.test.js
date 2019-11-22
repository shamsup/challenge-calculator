import React from 'react';
import { shallow, mount } from 'enzyme';
import Calculator from '../Calculator';

const submitEventWithValue = (value) => ({
  preventDefault: jest.fn(),
  target: {
    elements: {
      numbers: { value },
    }
  },
});

it('should render without error', () => {
  const wrapper = mount(<Calculator />);
  wrapper.unmount();
});

it('should render a form with a single input and a submit button', () => {
  const wrapper = shallow(<Calculator />);
  const form = wrapper.find('form');
  expect(form).toExist();

  const input = form.find('input');
  expect(input).toExist();
  expect(input.prop('name')).toBe('numbers');

  const submitButton = form.find('button');
  expect(submitButton).toExist();
  expect(submitButton.prop('type')).toBe('submit');
})

it('should not render an error before a calculation', () => {
  const wrapper = shallow(<Calculator />);

  const error = wrapper.find('.calculator-error');
  expect(error).not.toExist();
});

it('should not render an error after a successful calculation', () => {
  const wrapper = shallow(<Calculator />);

  const event = submitEventWithValue('1,1');
  wrapper.find('form').simulate('submit', event);

  const error = wrapper.find('.calculator-error');
  expect(error).not.toExist();
});

it('should render the error message of failed a calculation', () => {
  const wrapper = shallow(<Calculator />);

  const event = submitEventWithValue('1,1,1');
  wrapper.find('form').simulate('submit', event);

  const error = wrapper.find('.calculator-error');
  expect(error).toExist();
  expect(error.text()).toBe('Only 2 numbers are allowed')
});

it('should clear not display an error after a successful calculation after an error', () => {
  const wrapper = shallow(<Calculator />);
  let event = submitEventWithValue('1,1,1');

  wrapper.find('form').simulate('submit', event);

  let error = wrapper.find('.calculator-error');
  expect(error).toExist();

  event = submitEventWithValue('1,1');

  wrapper.find('form').simulate('submit', event);

  error = wrapper.find('.calculator-error');
  expect(error).not.toExist();
});

it('should not render the result before a calculation', () => {
  const wrapper = shallow(<Calculator />);

  const result = wrapper.find('.calculator-result');
  expect(result).not.toExist();
});

it('should not render the result after a failed calculation', () => {
  const wrapper = shallow(<Calculator />);

  const event = submitEventWithValue('1,1,1');
  wrapper.find('form').simulate('submit', event);

  const result = wrapper.find('.calculator-result');
  expect(result).not.toExist();
});

it('should render the result after a successful calculation', () => {
  const wrapper = shallow(<Calculator />);

  const event = submitEventWithValue('1,1');
  wrapper.find('form').simulate('submit', event);

  const result = wrapper.find('.calculator-result');
  expect(result).toExist();
  expect(result.text()).toBe('2')
});

it('should not render the result after a failed calculation after a successful calculation', () => {
  const wrapper = shallow(<Calculator />);

  let event = submitEventWithValue('1,1');
  wrapper.find('form').simulate('submit', event);

  let result = wrapper.find('.calculator-result');
  expect(result).toExist();

  event = submitEventWithValue('1,1,1');
  wrapper.find('form').simulate('submit', event);

  result = wrapper.find('.calculator-result');
  expect(result).not.toExist();
});
