'use strict';

import React, {
	Component,
	PropTypes
} from 'react';
import HaylieMasonry from './HaylieMasonry';

class HaylieMain extends  Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div>
				<HaylieMasonry
					contentHasLoaded={this.props.contentHasLoaded}/>
			</div>
		)
	}
}

HaylieMain.propTypes = {
	contentHasLoaded: PropTypes.func,
}

export default HaylieMain;
