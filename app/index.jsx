'use strict';

import './stylesheets/_styleguide.scss';
import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import {
	hashHistory,
	IndexRoute,
	Link,
	Router,
	Route,
} from 'react-router';

import App from './src/App';
import Avatars from './src/Main/Components/Avatars';
import HaylieMain from './src/Haylie/Components/HaylieMain';

class Index extends Component {
	render () {
		return (
			<div className="Styleguide">
				<Router history={hashHistory}>
					<Route path="/" component={App}>
						<IndexRoute component={Avatars}/>
						<Route path="haylie" component={HaylieMain}/>
					</Route>
				</Router>
			</div>
		)
	}
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Index />, document.getElementById('main'));
});
