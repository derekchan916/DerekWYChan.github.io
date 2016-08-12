'use strict';

import './Timeline.scss'
import React, {
	Component,
	PropTypes
} from 'react';

class Timeline extends Component {
	constructor (props) {
		super(props);
		this.state = {
			scrollY: 0
		};
	}

	// componentWillMount () {
	// 	window.addEventListener('scroll', () => this.handleScroll());
	// }

	componentWillUpdate (nextProps, nextState) {
		// console.log('aosifhosdaf', this.refs, nextState.scrollY);
		// window.refs = this.refs;
		// this.refs.forEach((ref) => {
		// 	console.log(ref)
		// })
	}

	componentWillUnmount () {
		window.removeEventListener('scroll', () => this.handleScroll());
	}

	render () {
		return (
			<div className="Timeline__Wrapper">
				<div className="Timeline__Container">
					<div className="Timeline__Block" ref="block1">
						<div className="Timeline__PrimaryContent PrimaryContent">
							<h2>Title of section 1</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
						</div>

						<div className="Timeline__Icon Picture">
						</div>

						<div className="Timeline__SecondaryContent SecondaryContent">
							<h2 className="Timeline__Date">Jan 14</h2>
						</div>
					</div>

					<div className="Timeline__Block" ref="block2">
						<div className="Timeline__PrimaryContent PrimaryContent">
							<h2>Title of section 2</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
						</div>

						<div className="Timeline__Icon Movie">
						</div>

						<div className="Timeline__SecondaryContent SecondaryContent">
							<h2 className="Timeline__Date">Jan 18</h2>
						</div>
					</div>

					<div className="Timeline__Block" ref="block3">
						<div className="Timeline__PrimaryContent PrimaryContent">
							<h2>Title of section 3</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.</p>
						</div>

						<div className="Timeline__Icon Picture">
						</div>

						<div className="Timeline__SecondaryContent SecondaryContent">
							<h2 className="Timeline__Date">Jan 24</h2>
						</div>
					</div>

					<div className="Timeline__Block">
						<div className="Timeline__PrimaryContent PrimaryContent">
							<h2>Title of section 4</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
						</div>

						<div className="Timeline__Icon Location">
						</div>

						<div className="Timeline__SecondaryContent SecondaryContent">
							<h2 className="Timeline__Date">Feb 14</h2>
						</div>
					</div>

					<div className="Timeline__Block">
						<div className="Timeline__PrimaryContent PrimaryContent">
							<h2>Title of section 5</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
						</div>
						<div className="Timeline__Icon Location">
						</div>
						<div className="Timeline__SecondaryContent SecondaryContent">
							<h2 className="Timeline__Date">Feb 18</h2>
						</div>
					</div>

					<div className="Timeline__Block">

						<div className="Timeline__PrimaryContent PrimaryContent">
							<h2>Final Section</h2>
							<p>This is the content of the last section</p>
						</div>
						<div className="Timeline__Icon Movie">

						</div>
						<div className="Timeline__SecondaryContent SecondaryContent">
							<h2 className="Timeline__Date">Feb 26</h2>
						</div>
					</div>
				</div>
			</div>
		)
	}

	handleScroll (event) {
		// console.log(event.path[0].screenTop, event.path[0].pageYOffset, window.scrollY, window.screenTop)
		// this.setState({scrollY: window.scrollY})
		console.log('SFUHSDOFH', event)
	}
}

Timeline.propTypes = {
}

export default Timeline;
