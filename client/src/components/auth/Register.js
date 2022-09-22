import React, { Component } from "react";
import Input from "../general/Input";
import { connect } from "react-redux";
// import { withRouter, useNavigate } from "react-router-dom";
import { withRouter } from "../../redux/hoc";

import { register } from "../../redux/action/authAction";

class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			password: "",
			password2: "",
		};

		this.onChange = this.onChange.bind(this);
		/** You can use arrow func to if you want to avoid binding */
	}

	onChange(e) {
		console.log(e.target.name);
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit() {
		const { name, email, password } = this.state;

		const newUser = {
			name,
			email,
			password,
		};

		if (password === this.state.password2) {
			this.props.register(newUser);
		} else {
			console.log("Passwords are not the same");
		}
	}
	render() {
		const { name, email, password, password2 } = this.state;
		return (
			<div className="container">
				<h1 className="large text-primary">Register</h1>
				<p className="lead">
					<i className="fas fa-user"></i> Create Your Account
				</p>
				<div className="form">
					<Input
						type="text"
						name={name}
						placeholder="Enter name"
						value={name}
						onChange={this.onChange}
					/>
				</div>
				<div className="form">
					<Input
						name={email}
						type="email"
						placeholder="Enter email"
						value={email}
						onChange={this.onChange}
					/>
				</div>
				<div className="form">
					<Input
						name={password}
						type="password"
						placeholder="Enter password"
						value={password}
						onChange={this.onChange}
					/>
				</div>
				<div className="form">
					<Input
						name={password2}
						type="password"
						placeholder="Confirm password"
						value={password2}
						onChange={this.onChange}
					/>
				</div>
				<button className="btn btn-primary">Register</button>
			</div>
		);
	}
}

const mapStateToPros = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToPros, { register })(withRouter(Register));
// export default Register;
