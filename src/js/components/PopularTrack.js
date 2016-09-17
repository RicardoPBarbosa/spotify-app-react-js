var React      = require('react');
var AppActions = require('../actions/AppActions');
var AppStore   = require('../stores/AppStore');

var PopularTrack = React.createClass({
	render: function(){
		const track = this.props.track;
		const tracksAlbum = track.album.name;
		return(
			<div className="topTrackSingle transition" onClick={this.openTrack}>
				<span className="track"><b>{this.props.trackNumber + 1}</b> {track.name} <small>&#8226; {tracksAlbum}</small></span>
			</div>
		)
	},

	openTrack: function(){
		var trackId = this.props.track.id;
		$(".trackBar").css("display", "block");
		$(".trackBar").removeClass('slideOutDown');
		$(".trackBar").addClass('slideInUp');
		AppActions.searchTrack(trackId);
	}
});

module.exports = PopularTrack;