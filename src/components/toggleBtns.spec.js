import React from 'react';
import { shallow } from 'enzyme';

import TogleBtns from './toggleBtns.jsx';

describe('toggleBtns', () => {
    it('Should switch state.className to left', () => {
      const wrapper = shallow(<TogleBtns changeActive={() => {}}/>);
      const btnLeft = wrapper.find('button').at(0);
      btnLeft.simulate('click');
      expect(wrapper.state().className).toEqual('left');
    });

    it('Should switch state.className to right', () => {
      const wrapper = shallow(<TogleBtns changeActive={() => {}}/>);
      const btnRight = wrapper.find('button').at(1);
      btnRight.simulate('click');
      expect(wrapper.state().className).toEqual('right');
    });
  });