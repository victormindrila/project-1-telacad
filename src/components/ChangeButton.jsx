import React from 'react';
import './ChangeButton.css';

function ChangeButton(props) {
	return (
		<div className="button">
			{props.isInput ? (
				<div>
					<label>{props.label}</label>
					<input type={props.type} data-type={props.name} onChange={(event) => props.changeFunction(event)} />
				</div>
			) : (
				<button onClick={(event) => props.changeFunction(event)} data-id={props.id}>
					{props.label}
				</button>
			)}
		</div>
	);
}

export default ChangeButton;
