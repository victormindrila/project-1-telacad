import React from 'react';
import ChangeButton from './ChangeButton';
import './UserItem.css';

function UserItem(props) {
	const { name, email, isGoldClient, picture, wage, id, changeFunction } = props;
	return (
		<div className="user-item">
			<img src={picture} alt="user" />
			<h3>{name}</h3>
			<p>{email}</p>
			<p>Salariu: {wage} lei</p>
			{isGoldClient ? <h3>Client GOLD</h3> : null}
			<ChangeButton label="Sterge utilizator" isInput={false} id={id} changeFunction={changeFunction} />
		</div>
	);
}

export default UserItem;
