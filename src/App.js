import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Posts from './pages/Posts';
import About from './pages/About';
import Page404 from './pages/Page404';

//style
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			background: 'white',
			font: 'black',
			buttons: [
				{
					label: 'Schimba culoare background: ',
					name: 'background',
					type: 'color',
					isInput: true,
					changeFunction: (event) => this.changeColor(event),
					id: 1
				},
				{
					label: 'Schimba culoare font: ',
					name: 'font',
					type: 'color',
					isInput: true,
					changeFunction: (event) => this.changeColor(event),
					id: 2
				},
				{
					label: 'Afiseaza utilizatori',
					isInput: false,
					link: '/',
					id: 3
				},
				{
					label: 'Afiseaza postari',
					isInput: false,
					link: '/posts',
					id: 4
				}
			],
			users: [],
			posts: [],
			errors: []
		};
	}

	componentDidMount() {
		this.displayUsers();
		this.displayPosts();
	}

	changeColor(event) {
		const obj = {};
		obj[event.target.dataset.type] = event.target.value;
		this.setState(obj);
	}

	displayUsers() {
		this.setState({ posts: [] });
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				const filteredUsers = json.filter((item) => item.id <= 10);
				const updatedUsers = filteredUsers.map((item, index) => {
					const gender = index % 2 === 0 ? 'men' : 'women';
					return {
						...item,
						isGoldClient: true,
						picture: `https://randomuser.me/api/portraits/${gender}/${item.id}.jpg`,
						wage: Math.round(Math.random() * 10000)
					};
				});
				this.setState({ users: updatedUsers });
			});
	}

	displayPosts() {
		this.setState({ users: [] });
		fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then((data) => {
			this.setState({ posts: data });
		});
	}

	deleteUser(event) {
		const userId = parseInt(event.currentTarget.dataset.id);
		this.setState((prevState) => {
			return {
				users: prevState.users.filter((el) => el.id !== userId)
			};
		});
	}

	getMaxId(users) {
		let maxId = 0;

		users.forEach((user) => {
			if (user.id > maxId) {
				maxId = user.id;
			}
		});

		return maxId;
	}

	submitAddForm(event, name, email, isGoldClient) {
		event.preventDefault();
		let errors = [];
		this.setState({ errors });
		let validEmail = false;
		let validName = false;
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			validEmail = true;
		} else {
			errors.push('Invalid email');
		}

		if (name.length > 4 && name.length < 40) {
			validName = true;
		} else {
			errors.push('Invalid name. Must be greater than 4 and less than 40 characters');
		}

		if (validEmail && validName) {
			this.setState((prevState) => {
				return {
					users: [
						...prevState.users,
						{
							id: this.getMaxId(prevState.users) + 1,
							name,
							email,
							isGoldClient
						}
					]
				};
			});
		} else {
			this.setState({ errors });
		}
	}

	render() {
		return (
			<div className="app" style={{ background: this.state.background, color: this.state.font }}>
				<Switch>
					<Route
						exact
						path="/"
						render={() => (
							<Home
								buttons={this.state.buttons}
								users={this.state.users}
								changeFunction={(event) => this.deleteUser(event)}
								submitAddForm={(event, name, email, isGoldClient) =>
									this.submitAddForm(event, name, email, isGoldClient)}
								errors={this.state.errors}
								posts={this.state.posts}
							/>
						)}
					/>
					<Route path="/about" component={About} />
					<Route path="/posts" render={() => <Posts buttons={this.state.buttons} posts={this.state.posts} />} />
					<Route path="*" render={() => <Page404 buttons={this.state.buttons} />} />
				</Switch>
			</div>
		);
	}
}

export default App;
