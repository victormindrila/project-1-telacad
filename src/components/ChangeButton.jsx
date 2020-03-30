import React from 'react';
import { Link } from 'react-router-dom';

import './ChangeButton.css';

function ChangeButton(props) {
	return (
		<div className="button">
			{props.isInput ? (
				<div>
					<label>{props.label}</label>
					<input type={props.type} data-type={props.name} onChange={(event) => props.changeFunction(event)} />
				</div>
			) : !props.link ? (
				<button onClick={(event) => props.changeFunction(event)} data-id={props.id}>
					{props.label}
				</button>
			) : (
				<Link to={props.link}>
					<button>{props.label}</button>
				</Link>
			)}
		</div>
	);
}

export default ChangeButton;
