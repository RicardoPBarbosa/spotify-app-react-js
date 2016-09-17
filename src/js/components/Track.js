var React      = require('react');
var AppActions = require('../actions/AppActions');
var AppStore   = require('../stores/AppStore');

var Track = React.createClass({
	render: function(){
		const track         = this.props.track;
		var trackSpotifyUrl = track.external_urls.spotify;
		var trackAuthor     = track.artists[0].name;
		var trackAlbum      = track.album.name;
		return(
			<div className="singleItem transition" onClick={this.getTrack}>
				<div>
					<span className="name">{track.name}</span><br/>
					<span className="authorAlbum">{trackAuthor} &#8226; {trackAlbum}</span>
				</div>
				<a target="_blank" href={trackSpotifyUrl} title="Listen on Spotify"><i className="fa fa-spotify transition" aria-hidden="true"></i></a>
			</div>
		)
	},

	getTrack: function(){
		var trackId = this.props.track.id;
		$(".trackBar").css("display", "block");
		$(".trackBar").removeClass('slideOutDown');
		$(".trackBar").addClass('slideInUp');
		AppActions.searchTrack(trackId);
	}
});

module.exports = Track;