import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from './Scroll';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Scroll />, div);
  ReactDOM.unmountComponentAtNode(div);
});