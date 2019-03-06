import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

// import App from './LinksNavLinks/App';
// import App from './Redirect/App';
// import App from './HOC/App';
// import App from './Axios/App';
// import App from './RouteParameters/App';
// import App from './Switch/App';
import App from './UseImages/App';

ReactDom.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'))
