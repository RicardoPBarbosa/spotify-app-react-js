var React      = require('react');
var AppActions = require('../actions/AppActions');
var AppStore   = require('../stores/AppStore');

var ArtistAlbums = React.createClass({
	render: function(){
		const album = this.props.album;
		if(album.images != ''){
			var albumCover = album.images[0].url;
		}else{
			var albumCover = '';
		}
		return(
			<div className="albumSingle transition" onClick={this.openAlbum}>
				<img src={albumCover} width="640" height="640" />
				<span className="album">{album.name}</span>
			</div>
		)
	},

	openAlbum: function(){
		var albumId = this.props.album.id;
		$('.singlePage').animate({ scrollTop: 0 }, "slow");
		AppActions.searchItem(albumId, 'albums');
	}
});

module.exports = ArtistAlbums;