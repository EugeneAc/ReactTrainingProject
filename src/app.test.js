import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

import SearchResults from './components/searchResultString.jsx';
import SearchContainer from './components/searchContainer';
import App from './App';
import TogleBtns from './components/toggleBtns.jsx';

configure({ adapter: new Adapter() });

describe('Snapshot', () => {
it('App matches the snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

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

  