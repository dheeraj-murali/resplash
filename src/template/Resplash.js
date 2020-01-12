import React from 'react';
// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Header from '../components/Header';
import Hero from '../components/Hero';
import Tabbed from '../components/Tabbed';
import WithoutData from '../pages/WithoutData';
import WithData from '../pages/withData';
import Footer from '../components/Footer';

function Resplash() {
	return (
		<>
			<Header />
			<Hero />
			<Router>
				<Tabbed />
				<Switch>
					<Route exact path='/'>
						<WithoutData />
					</Route>
					<Route path='/withdata'>
						<WithData />
					</Route>
				</Switch>
			</Router>
			<Footer />
		</>
	);
}

export default Resplash;
