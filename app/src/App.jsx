'use strict';

import './App.scss';
import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import {
	hashHistory,
	Link,
	Router,
	Route,
} from 'react-router'

import Header from './Main/Components/Header';

class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			contentLoaded: false
		};
	}

	render () {
		const viewStyle = this.state.contentLoaded ? 'animate' : '';

		return (
			<div>
				<Header />
				<div className={"App__ContentWrapper " + viewStyle}>
					{React.cloneElement(this.props.children, {
						contentHasLoaded: () => this.contentHasLoaded()
					})}
				</div>
			</div>
		)
	}

	onAvatarClick (value) {
		this.setState({currentPage: value})
	}

	contentHasLoaded () {
		this.setState({contentLoaded: true})
	}
}

export default App;
