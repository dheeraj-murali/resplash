import React from 'react';
// materila UI
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

// CSS-in-JS
const useStyles = makeStyles((theme) => ({
	heroContent: {
		backgroundColor: 'black',
		backgroundImage:
			'linear-gradient(rgba(195, 55, 100, 0.8), rgba(29, 38, 113, 0.8)),url(https://source.unsplash.com/600x400/?nature)',
		backgroundSize: 'cover',
		padding: theme.spacing(8, 0, 6),
		color: '#ffffff',
	},
	heroHeader: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		height: '40vh',
	},
}));

const Hero = () => {
	const classes = useStyles();
	return (
		<Box className={classes.heroContent}>
			<Container maxWidth='sm' className={classes.heroHeader}>
				<Typography
					component='h1'
					variant='h2'
					align='center'
					gutterBottom
				>
					Re-splash
				</Typography>
				<Typography variant='h5' align='center' paragraph>
					Simple unsplash clone made with <b>React.js</b> and{' '}
					<b>Material UI Framework</b>
				</Typography>
			</Container>
			<Typography
				variant='body1'
				align='center'
				paragraph
				className={classes.love}
			>
				Made with <FavoriteIcon color='secondary' /> for SuberBolt
			</Typography>
		</Box>
	);
};

export default Hero;
