'use strict';

import './PageList.scss';
import React, {
	Component,
	PropTypes
} from 'react';

const AVATAR_LIST = [
	{
		name: 'Haylie',
		value: 'haylie',
		url: 'app/images/haylie-avatar.png'
	},
	{
		name: 'Flora',
		value: 'floraFrankie',
		url: 'app/images/flora-avatar.png'
	},
	{
		name: 'Lorena',
		value: 'lorena',
		url: 'app/images/lorena-avatar.png'
	},
	{
		name: 'Derek',
		value: 'derek',
		url: 'app/images/derek-avatar.png'
	},
]

class PageList extends Component {
	constructor (props) {
		super(props);
		this.state = {
			disable: false,
		}
	}

	render () {
		const viewDisable = this.state.disable ? 'Disable' : '';

		return (
			<div className={"PageList__Wrapper"}>
				<div className={"PageList__Container"}>
					{AVATAR_LIST.map((avatar, index) => (
						<div
							key={index}
							className={"PageList__Avatar" + viewDisable}
							style={{backgroundImage:'url(' + avatar.url + ')'}}
							onClick={() => this.onAvatarClick(avatar.value)}
							>
						</div>
					))}
				</div>
			</div>
		)
	}

	onAvatarClick (value) {
		this.setState({disable: true});
		// this.props.onAvatarClick(value);
	}
}

PageList.propTypes = {
	// currentPage   : PropTypes.string,
	// onAvatarClick : PropTypes.func,
}

export default PageList;
