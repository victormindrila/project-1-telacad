import React from 'react';

// layout
import Layout from '../components/Layout';

// components
import ButtonList from '../components/ButtonList';
import UserList from '../components/UserList';

function Home(props) {
	return (
		<div className="container">
			<Layout>
				<ButtonList buttons={props.buttons} />
				<UserList
					users={props.users}
					changeFunction={props.changeFunction}
					submitAddForm={props.submitAddForm}
					errors={props.errors}
				/>
			</Layout>
		</div>
	);
}

export default Home;
