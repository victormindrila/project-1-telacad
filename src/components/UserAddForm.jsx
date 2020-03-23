import React from 'react';
import './UserAddForm.css';
class UserAddForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			isGoldClient: false
		};
	}

	updateName(event) {
		this.setState({ name: event.target.value });
	}

	updateEmail(event) {
		this.setState({ email: event.target.value });
	}

	updateIsGoldClient(event) {
		this.setState({ isGoldClient: event.target.checked });
	}

	render() {
		const { name, email, isGoldClient } = this.state;
		const { errors } = this.props;
		return (
			<form className="user-add-form" onSubmit={(event) => this.props.submitAddForm(event, name, email, isGoldClient)}>
				<h2>Adauga utilizatori:</h2>
				<label htmlFor="name">Nume:</label>
				<input type="text" name="name" onChange={(event) => this.updateName(event)} />
				<label htmlFor="email">Email:</label>
				<input type="text" name="email" onChange={(event) => this.updateEmail(event)} />
				<div>
					<label htmlFor="is-gold-client">Client GOLD</label>
					<input
						type="checkbox"
						name="is-gold-client"
						value="true"
						onChange={(event) => this.updateIsGoldClient(event)}
					/>
				</div>

				<input type="submit" value="Introdu utilizatorul" />
				<div className="error-list">{errors ? errors.map((error, index) => <p key={index}>{error}</p>) : null}</div>
			</form>
		);
	}
}

export default UserAddForm;
