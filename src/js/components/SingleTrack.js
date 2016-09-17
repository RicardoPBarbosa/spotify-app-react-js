var React        = require('react');
var AppActions   = require('../actions/AppActions');
var AppStore     = require('../stores/AppStore');

var SingleTrack = React.createClass({
	getInitialState: function(){
		return{
			audioObject: null
		}
	},

	render: function(){
		if(this.state.audioObject){
			this.state.audioObject.pause();
			$(".playTrack i").removeClass('fa-pause');
			$(".playTrack i").addClass('fa-play');
		}
		const trackDetails = this.props.track;
		var trackOwner = trackDetails.artists[0].name;
		return(
			<div>
				<span className="closeTrack"><i className="fa fa-angle-down transition" aria-hidden="true" onClick={this.closeTrack}></i></span>
				<div className="trackInfos">{trackDetails.name} <br/> <small>{trackOwner}</small></div>
				<span className="playTrack"><i className="fa fa-play transition" aria-hidden="true" onClick={this.clickEvent}></i></span>
			</div>
		)
	},

	clickEvent: function(){
		if($(".playTrack i").hasClass('fa-pause')){
			this.state.audioObject.pause();
			$(".playTrack i").removeClass('fa-pause');
			$(".playTrack i").addClass('fa-play');
		}else{
			this.state.audioObject = new Audio(this.props.track.preview_url);
			this.state.audioObject.play();
			$(".playTrack i").removeClass('fa-play');
			$(".playTrack i").addClass('fa-pause');
		}
	},
	closeTrack: function(){
		this.state.audioObject.pause();
		$(".trackBar").removeClass('slideInUp');
		$(".trackBar").addClass('slideOutDown');
	}
});

module.exports = SingleTrack;