import React from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// CSS-in-JS
const useStyles = makeStyles((theme) => ({
	card: {
		maxWidth: 400,
		marginBottom: '10px',
	},
	media: {
		minHeight: '200px',
		maxHeight: '600px',
	},
}));

const PhotoCard = ({ photo }) => {
	const classes = useStyles();
	return (
		<Card className={classes.card} key={photo.src}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={photo.src}
					title={photo.src}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{photo.name}
					</Typography>
					<Typography
						variant='body2'
						color='textSecondary'
						component='p'
					>
						{photo.description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default PhotoCard;
