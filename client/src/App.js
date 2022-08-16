import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";

/** General Component */
import Navbar from "../src/components/general/Navbar";

/** Landing component */
import Background from "./components/landing/Background";

/** User component */
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import "./App.css";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<Navbar />
					<Routes>
						{/* <Route exact path="/" component={Background} /> */}
						<Route exact path="/" element={<Background />} />
						<Route exct path="/register" element={<Register />} />
						<Route exct path="/login" element={<Login />} />
					</Routes>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
