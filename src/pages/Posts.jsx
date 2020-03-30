import React from 'react';

// layout
import Layout from '../components/Layout';

//components
import ButtonList from '../components/ButtonList';
import PostsList from '../components/PostsList';

function Posts(props) {
	return (
		<div className="container">
			<Layout>
				<ButtonList buttons={props.buttons} />
				<PostsList posts={props.posts} />
			</Layout>
		</div>
	);
}

export default Posts;
