var React      = require('react');
var AppActions = require('../actions/AppActions');
var AppStore   = require('../stores/AppStore');
var Artist     = require('./Artist');
var Album      = require('./Album');
var Track      = require('./Track');

var ResultsList = React.createClass({
	render: function(){
		if(this.props.results == ''){
			return(
				<div className="makeSearch">
					<p><i className="fa fa-search" aria-hidden="true"></i><b>Find your favourite music</b><br/>Search for <b>songs</b>, <b>artists</b> and <b>albums</b>.</p>
				</div>
			)
		}else{
			var artists = this.props.results.artists;
			var albums  = this.props.results.albums;
			var tracks  = this.props.results.tracks;
			return(
				<div className="searchResults">
					<div className="artistsResults">
						<div className="genresTitle">Artists</div>
						{artists.items != '' ? 
							artists.items.map((artist, i) => {
								return <Artist artist={artist} key={i} />
							})
						: <div className="noResults">No Artists with that name</div>}
					</div>
					<div className="albumsResults">
						<div className="genresTitle">Albums</div>
						{albums.items != '' ? 
							albums.items.map((album, i) => {
								return <Album album={album} key={i} />
							})
						: <div className="noResults">No Albums with that title</div>}
					</div>
					<div className="tracksResults">
						<div className="genresTitle">Tracks</div>
						{tracks.items != '' ? 
							tracks.items.map((track, i) => {
								return <Track track={track} key={i} />
							})
						: <div className="noResults">No Tracks with that title</div>}
					</div>
				</div>
			)
		}
	}
});

module.exports = ResultsList;