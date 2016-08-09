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
		value: 'flora',
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
			sideView: false,
			disable: false,
		}
	}

	render () {
		const viewStyle = this.state.sideView ? 'sideContent ' : 'mainContent ';
		const viewDisable = this.state.disable ? 'Disable' : '';

		return (
			<div className={"Avatars__Wrapper " + viewStyle}>
				<div className={"Avatars__Container " + viewStyle}>
					{AVATARLIST.map((avatar, index) => (
						<div
							key={index}
							className={"Avatars__Avatar " + viewStyle + viewDisable}
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
		this.props.onAvatarClick(value);
		
		setTimeout(() => {
			this.setState({
				sideView: !this.state.sideView,
				disable: false,
			})
		}, 100);
	}
}

Avatars.propTypes = {
	currentPage   : PropTypes.string,
	onAvatarClick : PropTypes.func,
}

export default Avatars;
