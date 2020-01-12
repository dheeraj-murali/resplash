import React from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// redux
import { connect } from 'react-redux';

// CSS-in-JS
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
		marginTop: 10,
	},
	gridList: {
		width: '100%',
		transform: 'translateZ(0)',
	},
}));

const WithData = (props) => {
	const classes = useStyles();

	return (
		<Container maxWidth='lg' className={classes.root}>
			<GridList className={classes.gridList} cols={3}>
				{props.photos.map((photo) => (
					<GridListTile key={photo.src} style={{ height: 400 }}>
						<img src={photo.src} alt={photo.src} />
						<GridListTileBar
							title={photo.name}
							subtitle={photo.description}
						/>
					</GridListTile>
				))}
			</GridList>
		</Container>
	);
};

const mapStateToProps = (state) => {
	return {
		photos: state.photos,
	};
};

export default connect(mapStateToProps)(WithData);
