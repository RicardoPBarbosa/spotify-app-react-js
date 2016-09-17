var React        = require('react');
var AppActions   = require('../actions/AppActions');
var AppStore     = require('../stores/AppStore');
var AppAPI       = require('../utils/AppAPI');
var Search       = require('./Search');
var Intro        = require('./Intro');
var Menu         = require('./Menu');
var Home         = require('./Home');
var Categories   = require('./Categories');
var ResultsList  = require('./ResultsList');
var SingleArtist = require('./SingleArtist');
var SingleAlbum  = require('./SingleAlbum');
var SingleTrack  = require('./SingleTrack');

function getAppState(){
	return {
		results: AppStore.getResults(),
		categories: AppStore.getCategories(),
		choice:  AppStore.getMenuChoice(),
		item: AppStore.getItemDetails(),
		track: AppStore.getTrackDetails()
	}
}

var App = React.createClass({
	getInitialState: function(){
		return getAppState();
	},

	componentDidMount: function(){
		if(this.state.choice == '' || this.state.choice == 'home'){
			AppAPI.searchCategories();
		}
		AppStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function(){
		AppStore.removeChangeListener(this._onChange);
	},

	render: function(){
		if(this.state.choice == '' || this.state.choice == 'home'){
			var menu    = <Home />
			var content = <Categories categories={this.state.categories} />
		}else{
			var menu    = <Search />
			var content = <ResultsList results={this.state.results} />
		}
		if(this.state.item != ''){
			switch(this.state.item.type){
				case 'artist':
					var singleItem = <SingleArtist item={this.state.item} />
					break;
				case 'album':
					var singleItem = <SingleAlbum item={this.state.item} />
					break;
			}
		}else{
			var singleItem = '';
		}
		if(this.state.track != ''){
			var singleTrack = <SingleTrack track={this.state.track} />
		}
		return(
			<div>
				<Intro />
				<div className="mainScreen">
					<div className="singlePage">
						<span id="goBack"><img src="img/left.png" width="50px" height="50px" onClick={this.closeSinglePage} /></span>
						{singleItem}
					</div>
					<div className="trackBar animated">
						{singleTrack}
					</div>
					{menu}
					{content}
				</div>
				<div className="menuOpen">
					<Menu choice={this.state.choice} />
				</div>
			</div>
		)
	},

	closeSinglePage: function(){
		$(".singlePage").removeClass('fadeIn');
		$(".singlePage").addClass('fadeOut');
		window.setTimeout( function(){
			$(".singlePage").css("display", "none");
			$(".singlePage").removeClass('animated fadeOut');
        }, 400);
        return this.setState({item: []});
	},

	_onChange: function(){
		this.setState(getAppState());
	}
});

module.exports = App;