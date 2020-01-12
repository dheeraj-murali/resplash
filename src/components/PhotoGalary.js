import React from 'react';
import Masonry from 'react-masonry-css';
// Material Ui
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// CSS-in-JS
const useStyles = makeStyles((theme) => ({
	container: {
		width: '100%',
		marginTop: '10px',
	},
	masonryGrid: {
		display: 'flex',
		marginLeft: '-5px',
		width: 'auto',
	},
	masonryGridColumn: {
		paddingLeft: '5px',
		backgroundClip: 'padding-box',
	},
}));

const PhotoGalary = (props) => {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<Container maxWidth='lg' className={classes.container}>
				<Masonry
					breakpointCols={{ default: 3, 1100: 3, 700: 2, 500: 1 }}
					className={classes.masonryGrid}
					columnClassName={classes.masonryGridColumn}
				>
					{props.children}
				</Masonry>
			</Container>
		</>
	);
};

export default PhotoGalary;
