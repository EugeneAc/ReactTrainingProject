import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import App from './App';
import SearchContainer from './components/searchContainer';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


it('matches the snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('App component', () => {
    it('Check caption', () => {
      const wrapper = shallow(<SearchContainer />);
      const text = wrapper.find('h2').text();
      expect(text).toEqual('Find your movie');
    });
  });