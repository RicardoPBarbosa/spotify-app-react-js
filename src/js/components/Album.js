var React      = require('react');
var AppActions = require('../actions/AppActions');
var AppStore   = require('../stores/AppStore');

var Album = React.createClass({
	render: function(){
		const album = this.props.album;
		var albumCover = album.images;
		if(albumCover != ''){
			albumCover = <img src={albumCover[0].url} className="img-circle" width="100" height="100" />
		}else{
			albumCover = <i className="fa fa-folder-open" aria-hidden="true"></i>
		}
		var albumSpotifyUrl = album.external_urls.spotify;
		return(
			<div className="singleItem transition" onClick={this.getAlbumTracks}>
				<span className="cover">{albumCover}</span>
				<div>
					<span className="name">{album.name}</span><br/>
				</div>
				<a target="_blank" href={albumSpotifyUrl} title="Listen on Spotify"><i className="fa fa-spotify transition" aria-hidden="true"></i></a>
			</div>
		)
	},

	getAlbumTracks: function(){
		var albumId = this.props.album.id;
		$(".singlePage").css("display", "block");
		$(".singlePage").addClass('animated fadeIn');
		AppActions.searchItem(albumId, 'albums');
	}
});

module.exports = Album;