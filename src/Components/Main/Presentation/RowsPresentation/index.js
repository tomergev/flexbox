import React from 'react'
import RowOfSquares from './RowOfSquares/'

class RowsPresentation extends React.PureComponent {
	render() {
		const Rows = this.props.rows.map(RowOfSquares)
		return (
			<React.Fragment>
				{Rows}
			</React.Fragment>
		)
	}
}

export default RowsPresentation