import React from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

// CSS-in-JS
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	appBar: {
		boxShadow: 'none',
		backgroundColor: '#ffffff',
		color: '#333333',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	button: {
		textDecoration: 'none',
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='static' className={classes.appBar}>
				<Toolbar>
					<Typography variant='h6' className={classes.title}>
						Re-splash
					</Typography>
					<a
						href='https://github.com/dheeraj-murali/resplash'
						target='_blank'
						rel='noopener noreferrer'
						className={classes.button}
					>
						<Button color='secondary' startIcon={<GitHubIcon />}>
							View on GitHub
						</Button>
					</a>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
