import React from 'react';
import UserItem from './UserItem';
import UserAddForm from './UserAddForm';
import './userList.css';

function UserList(props) {
	const { users, changeFunction } = props;
	return (
		<div>
			{(users.length || null) && (
				<div>
					<UserAddForm submitAddForm={props.submitAddForm} errors={props.errors} />
					<h2>Lista utilizatorilor:</h2>
				</div>
			)}
			<div className="user-list">
				{users.map((user, index) => {
					return (
						<UserItem
							id={user.id}
							name={user.name}
							email={user.email}
							isGoldClient={user.isGoldClient}
							picture={user.picture}
							wage={user.wage}
							key={index}
							changeFunction={changeFunction}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default UserList;
