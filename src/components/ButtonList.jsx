import React from 'react';
import ChangeButton from './ChangeButton';

function ButtonList(props) {
	const buttons = props.buttons;
	return (
		<div className="button-list">
			{buttons.map((item) => {
				return (
					<ChangeButton
						label={item.label}
						name={item.name}
						type={item.type}
						isInput={item.isInput}
						changeFunction={item.changeFunction}
						link={item.link}
						key={item.id}
					/>
				);
			})}
		</div>
	);
}

export default ButtonList;
