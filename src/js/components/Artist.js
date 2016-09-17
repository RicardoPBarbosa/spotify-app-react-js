var React      = require('react');
var AppActions = require('../actions/AppActions');
var AppStore   = require('../stores/AppStore');

var Artist = React.createClass({
	render: function(){
		const artist = this.props.artist;
		var artistImage = artist.images;
		if(artistImage != ''){
			artistImage = <img src={artistImage[0].url} className="img-circle" width="100" height="100" />
		}else{
			artistImage = <i className="fa fa-user" aria-hidden="true"></i>
		}
		var artistSpotifyUrl = artist.external_urls.spotify;
		return(
			<div className="singleItem transition" onClick={this.getArtistAlbums}>
				<span className="cover">{artistImage}</span>
				<div>
					<span className="name">{artist.name}</span><br/>
					<span className="followers">Followers: {artist.followers.total.toLocaleString()}</span>
				</div>
				<a target="_blank" href={artistSpotifyUrl} title="See on Spotify"><i className="fa fa-spotify transition" aria-hidden="true"></i></a>
			</div>
		)
	},

	getArtistAlbums: function(){
		var artistId = this.props.artist.id;
		$(".singlePage").css("display", "block");
		$(".singlePage").addClass('animated fadeIn');
		AppActions.searchItem(artistId, 'artists');
	}
});

module.exports = Artist;