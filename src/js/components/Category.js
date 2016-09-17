var React      = require('react');
var AppActions = require('../actions/AppActions');
var AppStore   = require('../stores/AppStore');

var Category = React.createClass({
	render: function(){
		const category = this.props.category;
		const categoryImage = this.props.category.icons[0].url;
		return(
			<div className="singleCategory">
				<a onClick={this.getCategoryItems}>
					{category.name}
					<img src={categoryImage} />
				</a>
			</div>
		)
	},

	getCategoryItems: function(e){
		e.preventDefault();
		var categoryId = this.props.category.id;
		console.log(categoryId);
	}
});

module.exports = Category;