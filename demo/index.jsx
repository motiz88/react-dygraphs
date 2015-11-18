import React from 'react';
import ReactDOM from 'react-dom';
import {Dygraph} from '../src';

var container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<Dygraph data={[[1,10,100], [2,20,80], [3,50,60], [4,70,80]]} />, container);
