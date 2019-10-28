import React from 'react'

const Form = ({ onClick, onChange, formState }) => {
	const {
		colorInput,
		numberOfSquaresInput,
		showRangeErrorMessage,
	} = formState

	return (
		<div className="gridContainer">
			<div className="gridItem">
				<label >Color</label>
				<select
					name="color"
					id="colorInput"
					{...{ onChange }}
					value={colorInput}
				>
					<option value="Green">Green</option>
					<option value="Blue">Blue</option>
					<option value="Red">Red</option>
					<option value="Yellow">Yellow</option>
					<option value="Black">Black</option>
					<option value="Purple">Purple</option>
					<option value="Orange">Orange</option>
				</select>
			</div>

			<div className="gridItem">
				<label >Number of Squares</label>
				<input
					name="numberOfSquaresInput"
					value={numberOfSquaresInput}
					id="numberOfSquaresInput"
					{...{ onChange }}
					type="number"
					min="0"
					max="30"
				/>
				{showRangeErrorMessage &&
					<div className="gridContainer" style={{ color: "red" }}>
						<div className="gridItem">
							The number inputed must be between 1 and 30
						</div>
					</div>
				}
			</div>

			<div className="gridItem">
				<button
					{...{ onClick }}
					disabled={showRangeErrorMessage}
				>
					Create New Row
			</button>
			</div>
		</div>
	)
}

export default Form