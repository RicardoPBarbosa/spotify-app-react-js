var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Home = React.createClass({
	render: function(){
		return(
			<div className="menuSearch">
				<span onClick={this.openMenu}><i className="fa fa-bars" aria-hidden="true"></i></span>
				<p>HOME</p>
			</div>
		)
	},

	openMenu: function(){
		$(".menuOpen").css("display", "block");
		$(".menuOpen").addClass('animated slideInLeft');
	}
});

module.exports = Home;