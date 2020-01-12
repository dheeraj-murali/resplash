import React from 'react';
// Router
import { useHistory } from 'react-router-dom';
// Material UI
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Tabbed = () => {
	const [tab, setTab] = React.useState(0);
	const history = useHistory();

	React.useEffect(() => {
		if (tab === 1) {
			history.push('/withdata');
		} else {
			history.push('/');
		}
	}, [tab, history]);

	return (
		<Paper square>
			<Tabs
				value={tab}
				indicatorColor='primary'
				textColor='primary'
				onChange={(e, tabId) => setTab(tabId)}
				aria-label='App tab'
				centered
			>
				<Tab label='Without Data' />
				<Tab label='with Data' />
			</Tabs>
		</Paper>
	);
};

export default Tabbed;
