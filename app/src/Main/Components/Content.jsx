'use strict';

import React, {
	Component,
	PropTypes
} from 'react';

class Content extends Component {
	render () {
		if (this.props.currentPage === 'home') {return null;}

		return (
			<div className="Content__Wrapper">
				geg
			</div>
		)
	}
}

Content.propTypes = {
	currentPage : PropTypes.string,
}

export default Content;
