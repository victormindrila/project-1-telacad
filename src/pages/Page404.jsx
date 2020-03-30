import React from 'react';

import Layout from '../components/Layout';
import ButtonList from '../components/ButtonList';

function Page404(props) {
	return (
		<div className="container">
			<Layout>
				<ButtonList buttons={props.buttons} />
				<h1>Oops! Error 404! Page not found!</h1>
			</Layout>
		</div>
	);
}

export default Page404;
