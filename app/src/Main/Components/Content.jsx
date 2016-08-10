'use strict';

import './Content.scss';
import React, {
	Component,
	PropTypes
} from 'react';
import HaylieMasonry from '../../Haylie/Components/HaylieMasonry';

class Content extends Component {
	render () {
		if (this.props.currentPage === 'home') {return null;}

		return (
			<div className="Content__Wrapper animate">
				<HaylieMasonry />
			</div>
		)
	}
}

Content.propTypes = {
	currentPage : PropTypes.string,
}

export default Content;
