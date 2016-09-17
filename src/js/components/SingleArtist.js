var React        = require('react');
var AppActions   = require('../actions/AppActions');
var AppStore     = require('../stores/AppStore');
var PopularTrack = require('./PopularTrack');
var ArtistAlbums = require('./ArtistAlbums');

var SingleArtist = React.createClass({
	render: function(){
		const artistDetails = this.props.item[0].artist;
		const artistTracks  = this.props.item[1].tracks;
		const artistAlbums  = this.props.item[2].artistAlbums.items;
		var artistImage     = artistDetails.images;
		// run albums array for duplicate album names
		var uniqueNames = [];
		var uniqueAlbums = [];
		for(var i = 0; i < artistAlbums.length; i++){
			if($.inArray(artistAlbums[i].name, uniqueNames) === -1){
				uniqueNames.push(artistAlbums[i].name);
				uniqueAlbums.push(artistAlbums[i]);
			}
		}
		if(artistImage != ''){
			artistImage = <img src={artistImage[0].url} className="img-circle" width="100" height="100" />
		}else{
			artistImage = <i className="fa fa-user noCover" aria-hidden="true"></i>
		}
		return(
			<div className="singleItemDesc">
				<span className="cover">{artistImage}</span>
				<span className="itemName">{artistDetails.name}</span>
				<span className="artistFollowers">{artistDetails.followers.total.toLocaleString()} Followers</span>
				<button className="transition"><i className="fa fa-play" aria-hidden="true"></i> SHUFFLE PLAY</button>
				<div className="artistTopTracks">
					<span className="topTrackTitle">Popular</span>
					{
						artistTracks.map((track, i) => {
							if(i < 5){
								return <PopularTrack track={track} key={i} trackNumber={i} />
							}
						})
					}
				</div>
				<div className="artistAlbums">
					<span className="topTrackTitle">Albums</span>
					{
						uniqueAlbums.map((album, i) => {
							if(i < 6){
								return <ArtistAlbums album={album} key={i} />
							}
						})
					}
				</div>
			</div>
		)
	}
});

module.exports = SingleArtist;