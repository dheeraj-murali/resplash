import React from 'react';
import StackGrid from 'react-stack-grid';
// Material Ui
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
// Components
import Modal from '../components/Modal';
// redux
import { connect } from 'react-redux';
import { updatePhoto } from '../redux/actionGenerator';

// CSS-in-JS
const useStyles = makeStyles((theme) => ({
	container: {
		width: '100%',
		marginTop: '10px',
	},
}));

const PhotoGalary = (props) => {
	const classes = useStyles();
	const [model, setModel] = React.useState({ image: '', isOpen: false });

	const handleClick = (photo) => {
		setModel({ photo, isOpen: true });
	};

	return (
		<>
			<CssBaseline />
			<Container maxWidth='lg' className={classes.container}>
				<StackGrid columnWidth={400} monitorImagesLoaded={true}>
					{props.photos.map((photo) => (
						<div key={photo.id} onClick={() => handleClick(photo)}>
							<img
								src={photo.src}
								alt={photo.src}
								width='400px'
							/>
						</div>
					))}
				</StackGrid>
			</Container>
			<Modal
				model={model}
				setModel={setModel}
				updatePhoto={props.updatePhoto}
			/>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		photos: state.photos,
	};
};

const mapDispatchToProps = (dispatch) => ({
	updatePhoto: (photo) => dispatch(updatePhoto(photo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGalary);
