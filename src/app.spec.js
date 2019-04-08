import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from './App';

describe('Snapshot', () => {
it('App matches the snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

  describe('App', () => {
    it('Should change state.selectedMovie to 2', () => {
      const wrapper = shallow(<App />);
      wrapper.instance().onChangeSelected('2')
      expect(wrapper.state().selectedMovie).toEqual('2');
    });

    it('Should change state.searchParam Title and Genre', () => {
      const wrapper = shallow(<App />);
      wrapper.instance().onChangeSearchParam('left')
      expect(wrapper.state().searchParam).toEqual('Title');
      wrapper.instance().onChangeSearchParam('new')
      expect(wrapper.state().searchParam).toEqual('Genre');
    });

  });



  