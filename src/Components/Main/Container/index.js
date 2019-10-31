import React, { useState } from 'react'
import RowsPresentation from '../Presentation/RowsPresentation'
import FormPresentation from '../Presentation/FormPresentation/'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const MainContainer = () => {
	const initialRowState = [{
		color: "green",
		numberOfSquares: 5,
	}]
	const initialFormState = {
		colorInput: "Green",
		numberOfSquaresInput: 5,
		showRangeErrorMessage: false,
	}

	const [rows, setRows] = useState(initialRowState)
	const [formState, setFormState] = useState(initialFormState)

	const onChange = (e) => {
		const id = e.target.id
		const val = e.target.value

		if (
			id === "numberOfSquaresInput" &&
			(+val > 30.01 || +val < -0.01)
		) {
			setFormState({
				...formState,
				[id]: val,
				showRangeErrorMessage: true
			})
		} else {
			setFormState({
				...formState,
				[id]: val,
				showRangeErrorMessage: false,
			})
		}

	}

	const onClick = (e) => setRows([
		...rows,
		{
			color: formState.colorInput,
			numberOfSquares: Math.floor(+formState.numberOfSquaresInput) || 1,
		}
	])

	return (
		<React.Fragment>
			<Jumbotron fluid>
				<Container>
					<h1>FlexBox</h1>
					<p>
						Grid of responsive squares using flexbox
    		</p>
				</Container>
			</Jumbotron>

			<RowsPresentation
				{...{ rows }}
			/>

			<FormPresentation
				{...{
					onClick,
					onChange,
					formState,
				}}
			/>
		</React.Fragment>
	)
}

export default MainContainer