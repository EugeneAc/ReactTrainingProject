import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

import SearchResults from './components/searchResultString.jsx';
import SearchContainer from './components/searchContainer';
import App from './App';
import TogleBtns from './components/toggleBtns.jsx';

configure({ adapter: new Adapter() });


it('matches the snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('SearchResult component', () => {
    it('Check movies found', () => {
      const wrapper = shallow(<SearchResults />);
      const text = wrapper.find('span').text();
      console.log(text);
      expect(text).toEqual(' Movies found');
    });
  });

  describe('toggleBtns', () => {
    it('Should switch state.className to left', () => {
      const wrapper = shallow(<TogleBtns />);
      const btnLeft = wrapper.find('button').at(0);
      btnLeft.simulate('click');
      expect(wrapper.state().className).toEqual('left');
    });

    it('Should switch state.className to right', () => {
      const wrapper = shallow(<TogleBtns />);
      const btnRight = wrapper.find('button').at(1);
      btnRight.simulate('click');
      expect(wrapper.state().className).toEqual('right');
    });
  });