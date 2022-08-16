import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "../general/Input";

class Login extends Component {
	constructor() {
		super();
		this.state = {
			eamil: "",
			password: "",
		};
	}

	onChange(e) {
		console.log(e);
	}
	render() {
		return (
			<div className="container">
				<h1 className="large text-primary">Sign in</h1>
				<p className="lead">
					<i className="fas fa-user"></i> Sign into Your Account
				</p>
				<div className="form">
					<Input
						type="email"
						placeholder="Enter email"
						value=""
						onChange={this.onChange}
					/>
				</div>
				<div className="form">
					<Input
						type="password"
						placeholder="Enter password"
						value=""
						onChange={this.onChange}
					/>
				</div>
				<button className="btn btn-primary">Sign in</button>
				<p className="my-1">
					Don't have an account? <Link to="/register">Sign up</Link>{" "}
				</p>
			</div>
		);
	}
}

export default Login;
