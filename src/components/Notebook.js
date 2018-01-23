import React, { Component } from 'react';

class Notebook extends Component {

	render() {
		return (

			<div className="item" data-index={this.props.index}>
				<span className="fa fa-trash delete"></span>
				<div className="title">{this.props.name}</div>
			</div>

		);
	}

}

export default Notebook;
