import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

function Footer() {
	return (
		<footer class="footer">
			<Link to="/about">About</Link>
		</footer>
	);
}

export default Footer;
