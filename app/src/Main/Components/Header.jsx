'use strict';

import './Header.scss';
import React, {
	Component
} from 'react';
import {
	Link,
} from 'react-router';

class Header extends Component {
	render () {
		return (
			<div className="Header__Wrapper">
				<div className="Header__Container">
					<div className="Header__Logo"></div>
					<div className="Header__Tabs">
						<Link to="haylie" activeClassName="Active">
							<h1 className="Header__Tabs--child">Haylie</h1>
						</Link>
						<Link to="floraFrankie" activeClassName="Active">
							<h1 className="Header__Tabs--child">Flora</h1>
						</Link>
						<h1 className="Header__Tabs--child">About</h1>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;
