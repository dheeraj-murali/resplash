import React from 'react';
// redux
import { connect } from 'react-redux';
import { updatePhoto } from '../redux/actionGenerator';
// Materila UI
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';
// Components
import Modal from '../components/Modal';
import PhotoGalary from '../components/PhotoGalary';
import Progress from '../components/Progress';

// CSS-in-JS
const useStyles = makeStyles((theme) => ({
	responsive: {
		width: '100%',
		maxWidth: '400px',
		height: 'auto',
	},
}));

const WithoutData = (props) => {
	const classes = useStyles();
	const [model, setModel] = React.useState({ image: '', isOpen: false });
	const [loading, setLoading] = React.useState(() => props.photos.length);

	const handleClick = (photo) => {
		setModel({ photo, isOpen: true });
	};

	const calculateValue = (loading) => {
		if (loading) {
			return (loading / props.photos.length) * 100;
		}
	};

	return (
		<>
			<Progress value={calculateValue(loading)} />
			<PhotoGalary>
				{props.photos.map((photo) => (
					<div key={photo.id} onClick={() => handleClick(photo)}>
						<img
							src={photo.src}
							alt={photo.src}
							className={classes.responsive}
							// onLoad={() =>
							// 	setModel({ ...model, isOpen: true })
							// }
							onLoad={() => setLoading((loading) => loading - 1)}
						/>
					</div>
				))}
			</PhotoGalary>
			<Modal
				model={model}
				setModel={setModel}
				updatePhoto={props.updatePhoto}
			/>
			<Dialog
				open={calculateValue(loading) > 50}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogContent>
					<CircularProgress color='secondary' />
				</DialogContent>
			</Dialog>
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

export default connect(mapStateToProps, mapDispatchToProps)(WithoutData);
