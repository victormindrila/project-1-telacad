import React from 'react';
import { Link } from 'react-router-dom';

function About(props) {
	return (
		<div className="container">
			<h1> About </h1>
			<p> This is a single page application made in React. </p>
			<p>
				It uses React Routing, functional and class components, state, props, conditional and repetitive rendering,
				lifecycle methods and forms.
			</p>

			<p>
				Return <Link to="/">home</Link>
			</p>
		</div>
	);
}

export default About;
