var React      = require('react');
var AppActions = require('../actions/AppActions');
var AppAPI     = require('../utils/AppAPI');
var AppStore   = require('../stores/AppStore');

var Intro = React.createClass({
	render: function(){
		if(this.props.choice == '' || this.props.choice == 'home'){
			var homeSelected   = 'selected';
			var searchSelected = '';
		}else{
			var homeSelected   = '';
			var searchSelected = 'selected';
		}
		return(
			<div>
				<div className="content">
					<img src="img/spotify.png" />
					<p onClick={()=>this.openChoice('home')} className={homeSelected}><i className="fa fa-home" aria-hidden="true"></i> Home</p>
					<p onClick={()=>this.openChoice('search')} className={searchSelected}><i className="fa fa-search" aria-hidden="true"></i> Search</p>
				</div>
				<div className="closeMenu" onClick={this.closeMenu}></div>
			</div>
		)
	},

	closeMenu: function(){
		$(".menuOpen").addClass('animated slideOutLeft');
		window.setTimeout( function(){
            $(".menuOpen").css('display', 'none');
			$(".menuOpen").removeClass('animated slideOutLeft');
        }, 400);
	},

	openChoice: function(choice){
		$(".menuOpen").addClass('animated slideOutLeft');
		window.setTimeout( function(){
            $(".menuOpen").css('display', 'none');
			$(".menuOpen").removeClass('animated slideOutLeft');
        }, 400);
        AppActions.receiveMenuChosen(choice);
	},

	getCategories: function(){
		console.log("cats");
	}
});

module.exports = Intro;