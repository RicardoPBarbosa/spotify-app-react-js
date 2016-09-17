var React      = require('react');
var AppActions = require('../actions/AppActions');
var AppStore   = require('../stores/AppStore');

var Intro = React.createClass({
	render: function(){
		return(
			<div className="introPage">
				<img src="img/spotify.png" />
				<h2>Spotify<b>App</b></h2>
				<button className="transition" onClick={this.openApp}>Get Started</button>
				<p><a target="_blank" href="https://github.com/RicardoPBarbosa" className="transition"><i className="fa fa-github" aria-hidden="true"></i> Visit My GitHub</a></p>
			</div>
		)
	},

	openApp: function(e){
		e.preventDefault();
		$(".introPage").addClass('animated slideOutLeft');
		window.setTimeout( function(){
            $(".introPage").css('display', 'none');

        }, 400);
		$(".mainScreen").css('display', 'block');
		$(".mainScreen").addClass('animated slideInRight');
	}
});

module.exports = Intro;