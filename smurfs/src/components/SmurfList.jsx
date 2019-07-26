import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

// actions
import { getSmurfData } from '../actions/actions';

// components
import Smurf from '../components/Smurf';

function SmurfList(props) {
	// populates component with initialSmurfData when the page loads/refreshes
	useEffect(() => {
		props.getSmurfData();
	}, []);

	return (
		<div className="smurf-list">
			{props.isLoading ? <Loader type="Oval" color="lightblue" height={80} width={80} /> :
				props.smurfs.map(smurf => {
					return <Smurf smurfData={smurf} key={smurf.id} />
				})
			}
		</div>
	)
};

const mapStateToProps = state => {
	return {...state}
}

export default connect(
	mapStateToProps,
	{ getSmurfData }
)(SmurfList);
