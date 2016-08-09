'use strict';

import './App.scss';
import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';

import Avatars from './Main/Components/Avatars';
import Content from './Main/Components/Content';

class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			currentPage: 'home'
		}
	}

	render () {
		const viewStyle = this.state.currentPage === 'home' ?  'HomeView' : 'ActiveView';

		return (
			<div className={"App__Wrapper " + viewStyle}>
				<Avatars
					currentPage={this.state.currentPage}
					onAvatarClick={(value) => this.onAvatarClick(value)}/>
				<Content currentPage={this.state.currentPage}/>
			</div>
		)
	}

	onAvatarClick (value) {
		this.setState({currentPage: value})
	}
}

export default App;
