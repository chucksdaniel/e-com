import React from "react";
import propType from "prop-types";

export default function Input({ type, name, placeholder, value, onChange }) {
	return (
		<div className="form-group">
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}

Input.propType = {
	name: propType.string.isRequired,
	placeholder: propType.string,
	value: propType.string.isRequired,
	type: propType.string.isRequired,
	onChange: propType.func.isRequired,
};
