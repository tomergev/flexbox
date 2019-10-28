import React from "react"
import "./RowOfSquares.css"
import Square from "../Square/"
import shortid from "shortid"

const RowOfSquares = ({ color, numberOfSquares }, i, orgArr) => {
	const style = {
		display: "flex",
		flexWrap: "wrap",
	}

	const key = shortid.generate()

	const Squares = Array(numberOfSquares)
		.fill({ color, numberOfSquares })
		.map(Square)

	return (
		<div {...{
			key,
			style,
			className: i >= orgArr.length - 1 ? "fadeIn" : ""
		}}
		>
			{Squares}
		</div>
	)
}

export default RowOfSquares