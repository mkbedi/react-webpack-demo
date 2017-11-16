import React from 'react';
import {render} from 'react-dom';

let App = () => (<div>Hello World,This is React app</div>);

const target = document.getElementById('app');

render(<App/>, target);
