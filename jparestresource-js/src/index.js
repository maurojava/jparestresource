import React from 'react';
import { Router, Route, useRouterHistory } from 'react-router'
//import { Router, Route, Link, browserHistory } from 'react-router'
import { createHistory } from 'history'
import ReactDOM from 'react-dom';
import FiltrableDocumentsTable from './Documents';
import App from './App';
import './index.css';


const history = useRouterHistory(createHistory)({
  basename: process.env.PUBLIC_URL
 });

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="documents" component={FiltrableDocumentsTable} />
    </Route>
    
  </Router>
),
  document.getElementById('root')
);
