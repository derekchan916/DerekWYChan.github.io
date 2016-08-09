'use strict';

import React, {
	Component,
	PropTypes
} from 'react';

class Content extends Component {
	render () {
		if (this.props.currentPage === 'Home') {return null;}

		return (
			<div>geg</div>
		)
	}
}

Content.propTypes = {
	currentPage : PropTypes.string,
}

export default Content;
