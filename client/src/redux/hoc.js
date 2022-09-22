import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export const withRouter = (Component) => {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();

		return (
			<Component location={location} params={params} navigate={navigate} />
		);
	}

	return ComponentWithRouterProp;
};
