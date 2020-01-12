import React from 'react';
// components
import PhotoGalary from '../components/PhotoGalary';
// redux
import { connect } from 'react-redux';
import PhotoCard from '../components/PhotoCard';
import Progress from '../components/Progress';

const WithData = (props) => {
	return (
		<>
			<Progress />
			<PhotoGalary>
				{props.photos.map((photo) => (
					<PhotoCard photo={photo} />
				))}
			</PhotoGalary>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		photos: state.photos,
	};
};

export default connect(mapStateToProps)(WithData);
