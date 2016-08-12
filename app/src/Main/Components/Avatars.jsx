'use strict';

import './Avatars.scss';
import React, {
	Component,
	PropTypes
} from 'react';

const AVATARLIST = [
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

class Avatars extends Component {
	constructor (props) {
		super(props);
		this.state = {
			disable: false,
		}
	}

	render () {
		const viewDisable = this.state.disable ? 'Disable' : '';

		return (
			<div className={"Avatars__Wrapper"}>
				<div className={"Avatars__Container"}>
					{AVATARLIST.map((avatar, index) => (
						<div
							key={index}
							className={"Avatars__Avatar" + viewDisable}
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

Avatars.propTypes = {
	// currentPage   : PropTypes.string,
	// onAvatarClick : PropTypes.func,
}

export default Avatars;
