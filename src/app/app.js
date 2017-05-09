import React, { Component } from 'react';
import { render } from 'react-dom';
import { Navbar } from './components/navbar/navbar.js';
require('./main.sass');

class App extends Component {
	render() {
		return (
			<Navbar></Navbar>
		);
	}
}

render(<App/>,document.getElementById('root'));
