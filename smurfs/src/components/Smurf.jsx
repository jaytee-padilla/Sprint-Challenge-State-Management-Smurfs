import React from 'react';

export default function Smurf(props) {
	return (
		<div className="smurf">
			<p>Name: {props.smurfData.name}</p>
			<p>Age: {props.smurfData.age}</p>
			<p>Height: {props.smurfData.height}cm</p>
			<hr />
		</div>
	)
}
