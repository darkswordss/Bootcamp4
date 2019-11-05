import React from 'react';

class AddBuilding extends React.Component {
	render() {
		const { addUpdate } = this.props;
		return (
			<div>
				<i>Fill in the boxes below to add a building</i>
				<p></p>
				<form>
					<input
					type="text"
					placeholder="Enter code"
					ref={ (code) => this.code = code }
					/>
				
					<input
					type="text"
					placeholder="Enter name"
					ref={ (name) => this.name = name }
					/>
				
					<input
					type="text"
					placeholder="Enter latitude"
					ref={ (latitude) => this.latitude = latitude }
					/>
				
					<input
					type="text"
					placeholder="Enter longitude"
					ref={ (longitude) => this.longitude = longitude }
					/>
				
					<input
					type="text"
					placeholder="Enter address"
					ref={ (address) => this.address = address }
					/>
				</form>
				<p>
					{' '}
					<button onClick={() => addUpdate(
						this.code.value,
						this.name.value,
						this.latitude.value,
						this.longitude.value,
						this.address.value
					)}>
					<i>Add Building</i>
					</button>
				</p>
			</div>
		);
	}
}

export default AddBuilding;