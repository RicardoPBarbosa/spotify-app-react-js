var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Search = React.createClass({
	componentDidMount: function(){
		$("#spotsearch").focus();
	},

	render: function(){
		return(
			<div className="menuSearch">
				<span onClick={this.openMenu}><i className="fa fa-bars" aria-hidden="true"></i></span>
				<form onSubmit={this.onSubmit}>
					<div className="input-group">
					  <label htmlFor="spotsearch" className="input-group-addon" id="basic-addon1"><i className="fa fa-search" aria-hidden="true"></i></label>
					  <input type="text" id="spotsearch" ref="query" placeholder="Search" aria-describedby="basic-addon1" autoComplete="off" />
					</div>
					
				</form>
			</div>
		)
	},

	onSubmit: function(e){
		e.preventDefault();
		var query = this.refs.query.value.trim();
		AppActions.searchResults(query);
	},

	openMenu: function(){
		$(".menuOpen").css("display", "block");
		$(".menuOpen").addClass('animated slideInLeft');
	}
});

module.exports = Search;