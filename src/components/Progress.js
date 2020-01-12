import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
	root: {
		height: 10,
		backgroundColor: '#00000000',
	},
	bar: {
		borderRadius: 20,
	},
}))(LinearProgress);

const Progress = ({ value = 0 }) => {
	return (
		<BorderLinearProgress
			variant='determinate'
			color='secondary'
			value={value}
		/>
	);
};

export default Progress;
