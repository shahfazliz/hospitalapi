import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';

import Home from './components/Home';
import Navigation from './components/Navigation';
import AboutUs from './components/AboutUs';
import Package from './components/Package';

import './App.css';

class App extends Component {
  routes = [{
    name: 'Home',
	to: '/home',
	as: NavLink,
	component: Home,
  }, {
    name: 'About',
	to: '/about',
	as: NavLink,
	component: AboutUs,
  }, {
    name: 'Package',
	to: '/package',
	as: NavLink,
	component: Package,
  }];

  render() {
    return (
      <div className="App" style={{ backgroundColor: 'snow' }}>
        <Router>
          <Navigation routes={this.routes}>
			{this
				.routes
				.map((link, index) =>
					<Nav.Link
						key={index}
						as={NavLink}
						to={link.to}>{link.name}
						</Nav.Link>)}
          </Navigation>

		{this
			.routes
			.map((link, index) =>
				<Route
					key={index}
					path={link.to}
					component={link.component} />)}
        </Router>
      </div>
    );
  }
}

export default App;
