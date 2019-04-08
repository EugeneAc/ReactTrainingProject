import React from 'react';
import { shallow } from 'enzyme';

import SearchContainer from './searchContainer';

describe('SearchContainer', () => {
    it('Should change state.searchValue to newValue', () => {
      const wrapper = shallow(<SearchContainer onChangeSearchParam={() => {}} onSearch={() => {}}/>);
      var e = {
        target:{
          value: "newValue"
      }}
      wrapper.instance().onTextChanged(e)
      expect(wrapper.state().searchValue).toEqual('newValue');
    });
  });