var React      = require('react');
var AppActions = require('../actions/AppActions');
var AppStore   = require('../stores/AppStore');
var Category   = require('./Category');

var Categories = React.createClass({
	render: function(){
		const categories = this.props.categories;
		if(categories != ''){
			return(
				<div className="categories">
					<div className="genresTitle">Genres & Moods</div>
					<div className="clear"></div>
					{
						this.props.categories.items.map((category, i) => {
							return <Category category={category} key={i} />
						})
					}
				</div>
			)
		}else{
			return(
				<div className="noCats"><p><i className="fa fa-meh-o" aria-hidden="true"></i>An error ocurred! <br /> Try to refresh the page <br/> <small>Or check the console to see the error</small></p></div>
			)
		}
	}
});

module.exports = Categories;