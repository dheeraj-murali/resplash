import React from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//CSS-in-JS
const useStyles = makeStyles({
	card: {
		maxWidth: 400,
		padding: 2,
	},
	media: {
		minHeight: '200px',
		maxHeight: '600px',
	},
});

const Modal = ({ model, setModel, updatePhoto }) => {
	const classes = useStyles();

	const [name, setName] = React.useState('');
	const [description, setDescription] = React.useState('');

	const handleUpdate = (id) => {
		updatePhoto({ id, name, description });
		setModel({ image: '', isOpen: false });
	};

	React.useEffect(() => {
		if (model.photo) {
			setName(model.photo.name);
			setDescription(model.photo.description);
		}
	}, [model]);

	return (
		<Dialog
			open={model.isOpen}
			onClose={() => setModel({ image: '', isOpen: false })}
			aria-labelledby='form-dialog-title'
		>
			<Card className={classes.card}>
				{model.photo && (
					<>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								image={model.photo.src}
								title={model.photo.name}
							/>

							<CardContent>
								<Typography
									gutterBottom
									variant='h5'
									component='h2'
								>
									Image Data
								</Typography>
								<TextField
									autoFocus
									margin='dense'
									id='name'
									label='Image Name'
									type='text'
									fullWidth
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
								<TextField
									margin='dense'
									id='description'
									label='Image Description'
									type='text'
									fullWidth
									multiline
									value={description}
									onChange={(e) =>
										setDescription(e.target.value)
									}
								/>
							</CardContent>
						</CardActionArea>

						<CardActions>
							<Button
								onClick={() =>
									setModel({ image: '', isOpen: false })
								}
								color='primary'
							>
								Cancel
							</Button>
							<Button
								onClick={() => handleUpdate(model.photo.id)}
								color='primary'
							>
								Save
							</Button>
						</CardActions>
					</>
				)}
			</Card>
		</Dialog>
	);
};

export default Modal;
