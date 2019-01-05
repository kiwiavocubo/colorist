import React from 'react';
import ReactDom from 'react-dom';
import Black from './Black';
import Blue from './Blue';
import White from './White';
import Red from './Red';
import Home from './Home';
import Contact from './Contact';

import {Router, Route, hashHistory} from 'react-router';

ReactDOM.render(
<Router history={hashHistory}>
<Route path="/" component={Home} />
<Route path="/black" component={Black} />
<Route path="/blue" component={Blue} />
<Route path="/white" component={White} />
<Route path="/red" component={Red} />
<Route path="/contact" component={Contact} />

</Router>,
document.getElementById('root')
);