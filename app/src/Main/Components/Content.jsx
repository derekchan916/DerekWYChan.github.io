'use strict';

import './Content.scss';
import React, {
	Component,
	PropTypes
} from 'react';
import HaylieMain from '../../Haylie/Components/HaylieMain';

class Content extends Component {
	constructor (props) {
		super(props);
		this.state = {
			contentLoaded: false
		};
	}

	render () {
		const viewStyle = this.state.contentLoaded ? 'animate' : '';
		if (this.props.currentPage === 'home') {return null;}

		return (
			<div className={"Content__Wrapper " + viewStyle}>
				<HaylieMain
					contentHasLoaded={() => this.contentHasLoaded()}
					currentPage={this.props.currentPage}/>
			</div>
		)
	}

	contentHasLoaded () {
		this.setState({contentLoaded: true})
	}
}

Content.propTypes = {
	currentPage : PropTypes.string,
}

export default Content;
