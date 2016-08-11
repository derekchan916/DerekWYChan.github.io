'use strict';

import './Masonry.scss';
import React, {
	Component,
	PropTypes,
} from 'react';

import MasonryComponent from 'react-masonry-component'; // Component from https://github.com/eiriklv/react-masonry-component
import _ from 'lodash';
import Config from '../../Main/Config';

const ImageCount = 24;

class Masonry extends Component {
	constructor (props) {
		super(props);
		this.state = {
			// imageNums: [],
			imagesArray: null,
			dataLoading: false,
			error: null,
			imagesRendered: false,
			windowWidth: window.innerWidth,
		}
	}

	componentWillMount () {
		// var arr = [];
		//
		// for (var i = 1; i <= ImageCount; i++) {
		// 	arr.push(i);
		// }
		this.loadImages();
		// this.setState({imageNums: _.shuffle(arr)});
	}

	componentDidMount () {
		window.addEventListener('resize', () => this.handleResize());
	}

	componentWillUnmount () {
		window.removeEventListener('resize', () => this.handleResize());
	}

	componentWillReceiveProps (nextProps) {
		console.log(this.state, nextProps)
		if (!this.state.dataLoading && this.state.imagesArray) {
			console.log('HOOOOORAY')
		}
	}

	render () {
		const windowWidth = this.state.windowWidth;
		const displayStyle = !this.state.imagesLoaded ? 'none' : 'inline-block';
		// const link = 'http://res.cloudinary.com/' + Config.CLOUDINARY_NAME + '/image/upload/w_'+ imageWidth + '/haylie-wu' + imageNum
		// const getImagesbyTagUrl = 'http://res.cloudinary.com/dqqac1ydh/image/list/haylie.json';
		var imageWidth;

		switch (true) {
			case (windowWidth < 568):
				imageWidth = 310;
				break;
			case (windowWidth < 768):
				imageWidth = 558;
				break;
			case (windowWidth < 960):
				imageWidth = 374;
				break;
			case (windowWidth < 1200):
				imageWidth = 310;
				break;
			default:
				imageWidth = 390;
		}
        return (
			<MasonryComponent
				className={"Masonry__Container"}
				options={{transitionDuration: 0}}
				disableImagesLoaded={false}
				updateOnEachImageLoad={false}
				style={{display: displayStyle}}
				onImagesLoaded={() => this.handleImagesLoaded()}
				>
			</MasonryComponent>
        );
		// {this.state.imageNums.map((imageNum, index) => (
		// 	<img
		// 		key={index}
		// 		className="Masonry__Item"
		// 		src={'http://placehold.it/'+imageWidth+'x150'}
		// 		alt="pretty haylie"
		// 		/>
		// ))}
    }

	loadImages () {
		fetch('http://res.cloudinary.com/' + Config.CLOUDINARY_NAME + this.props.searchUrl)
		.then((response) => response.json())
		.then((data) => {
			this.formatData(data);
		})
		.catch((error) => {
			console.warn(error);
			this.setState({
				error: error,

			});
		})
	}

	// loadImages (images) {
	// 	Promise.all(images.map(image => new Promise(function (resolve, reject) {
	// 		var img = new Image();
	// 		img.onload = resolve;
	// 		img.onerror = resolve;
	// 		img.src = image;
	// 	}))).then(_ => {
	// 		this.setState({ imagesRendered: true });
	// 		setTimeout(_ => this.setState({ animationReady: true }), TRANSITION_ANIMATE_TIME);
	// 	});
	// }

	handleResize (e) {
		this.setState({windowWidth: window.innerWidth});
	}

	handleImagesLoaded () {
		if (!this.state.imagesLoaded) {
			this.setState({imagesLoaded: true});
		}
	}

	formatData (data) {
		this.setState({
			imageArray: data.resources.map((imgObj) => imgObj.public_id),
			dataLoading: false,
		});
	}
}

Masonry.propTypes = {
	searchUrl: PropTypes.string,
}

export default Masonry;
