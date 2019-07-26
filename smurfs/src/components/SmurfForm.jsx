import React, { useState } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

// actions
import { addSmurf } from '../actions/actions';

function SmurfForm(props) {
	const [newSmurf, setNewSmurf] = useState({
		id: uuid.v4(),
		name: "",
		age: "",
		height: ""
	});

	const submitHandler = event => {
		event.preventDefault();
		props.addSmurf(newSmurf);
	};

	const changeHandler = event => {
		setNewSmurf({...newSmurf, [event.target.name]: event.target.value});
	};

	return (
		<div>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					style={{width: 300}}
					placeholder="Name"
					name="name"
					value={newSmurf.name}
					onChange={changeHandler}
				/>
				<input
					type="number"
					style={{width: 300}}
					placeholder="Age"
					name="age"
					value={newSmurf.age}
					onChange={changeHandler}
				/>
				<input
					type="number"
					style={{width: 300}}
					placeholder="Height (cm)"
					name="height"
					value={newSmurf.height}
					onChange={changeHandler}
				/>
				<br />
				<button>Add Smurf</button>
			</form>
		</div>
	)
};

const mapStateToProps = state => {
	return state
}

export default connect(
	mapStateToProps,
	{ addSmurf }
)(SmurfForm);
