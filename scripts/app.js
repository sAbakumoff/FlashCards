import React from 'react';
import ReactDom from 'react-dom';

import App from './containers';

ReactDom.render(React.createElement(App(window.__initialstate__)), document.getElementById('app'));
