var React = require('react')
var ReactDOM = require('react-dom')


var Main = React.createClass({

	render: function () {
		// console.log('thisMain',this)
		return (
			<div>Main
			{this.props.children}
			</div>
		)

	}




})

export default Main;