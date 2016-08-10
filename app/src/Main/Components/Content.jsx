'use strict';

import './Content.scss';
import React, {
	Component,
	PropTypes
} from 'react';
import HaylieMasonry from '../../Haylie/Components/HaylieMasonry';

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
				<HaylieMasonry
					contentHasLoaded={() => this.contentHasLoaded()}/>
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
