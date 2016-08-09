'use strict';

import './stylesheets/_styleguide.scss';
import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';

import Avatars from './src/Main/Components/Avatars';
import Content from './src/Main/Components/Content';

class Index extends Component {
	constructor (props) {
		super(props);
		this.state = {
			currentPage: 'Home'
		}
	}

	render () {
		return (
			<div className="Styleguide">
				<Avatars
					currentPage={this.state.currentPage}
					onAvatarClick={() => onAvatarClick()}/>
				<Content currentPage={this.state.currentPage}/>
			</div>
		)
	}

	onAvatarClick (avatar) {
		this.setState({currentPage: avatar.value})
	}
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Index />, document.getElementById('main'));
});
