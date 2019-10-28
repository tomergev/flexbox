import React from "react"
import "./Square.css"
import shortid from "shortid"

const Square = ({ color, numberOfSquares }, i) => {
	const style = {
		background: color,
		borderColor: "white",
		borderStyle: "solid",
		flexBasis: `${100 / numberOfSquares}%`,
	}

	return (
		<div
			{...{ style }}
			className="square"
			key={shortid.generate()}
		/>
	)
}

export default Square