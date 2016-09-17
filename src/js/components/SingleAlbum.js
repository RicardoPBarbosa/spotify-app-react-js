var React      = require('react');
var AppActions = require('../actions/AppActions');
var AppStore   = require('../stores/AppStore');
var AlbumTrack = require('./AlbumTrack');

var SingleAlbum = React.createClass({
	render: function(){
		const albumDetails = this.props.item;
		var albumCover     = albumDetails.images;
		if(albumCover != ''){
			albumCover = <img src={albumCover[0].url} className="img-circle" width="100" height="100" />
		}else{
			albumCover = <i className="fa fa-folder-open noCover" aria-hidden="true"></i>
		}
		return(
			<div className="singleItemDesc">
				<span className="cover">{albumCover}</span>
				<span className="itemName">{albumDetails.name}</span>
				<span className="albumOwner">Album by {albumDetails.artists[0].name}</span>
				<button className="transition"><i className="fa fa-play" aria-hidden="true"></i> SHUFFLE PLAY</button>
				<div className="artistTopTracks">
					<span className="topTrackTitle">Album Tracks</span>
					{
						albumDetails.tracks.items.map((track, i) => {
							return <AlbumTrack track={track} key={i} trackNumber={i} />
						})
					}
				</div>
			</div>
		)
	}
});

module.exports = SingleAlbum;