var AppActions = require('../actions/AppActions');

var OAuthToken = '';

module.exports = {
	searchResults: function(query){
		$.ajax({
			url: 'https://api.spotify.com/v1/search',
	        data: {
	            q: query,
	            type: 'album,artist,track'
	        },
	        success: function (data) {
	            AppActions.receiveResults(data);
	        }.bind(this),
			error: function(xhr, status, err){
				 console.log(err);
			}.bind(this)
		});
	},
	searchCategories: function(){
		$.ajax({
		    url: 'https://api.spotify.com/v1/browse/categories?offset=0&limit=30',
		    type: 'GET',
		    headers: {
		        'Authorization' : 'Bearer ' + OAuthToken
		    },
		    success: function(data) {
		        AppActions.receiveCategories(data.categories);
		    }
		});
	},
	searchItem: function(itemId, itemCat){
		$.ajax({
		    url: 'https://api.spotify.com/v1/'+itemCat+'/'+itemId,
		    type: 'GET',
		    headers: {
		        'Authorization' : 'Bearer ' + OAuthToken
		    },
		    success: function(data) {
		    	switch(itemCat){
		    		case 'artists':
				    	$.ajax({
		    		        url: 'https://api.spotify.com/v1/artists/'+itemId+'/top-tracks?country=US',
		    		        type: 'GET',
		    		        headers: {
		    		            'Authorization' : 'Bearer ' + OAuthToken
		    		        },
		    		        success: function(data2) {
		        		    	$.ajax({
		            		        url: 'https://api.spotify.com/v1/artists/'+itemId+'/albums',
		            		        type: 'GET',
		            		        headers: {
		            		            'Authorization' : 'Bearer ' + OAuthToken
		            		        },
		            		        success: function(data3) {
		            		        	var artistDetails = [{artist: data}, data2, {artistAlbums: data3}];
		            		        	artistDetails["type"] = "artist";
		            		            AppActions.receiveItem(artistDetails);
		            		        }
		            		    });
		    		        }
		    		    });
		    			break;

		    		case 'albums':
		    			AppActions.receiveItem(data);
		    			break;
		    	}
		    }
		});
	},
	searchTrack: function(trackId){
		$.ajax({
		    url: 'https://api.spotify.com/v1/tracks/'+trackId,
		    type: 'GET',
		    headers: {
		        'Authorization' : 'Bearer ' + OAuthToken
		    },
		    success: function(data) {
				AppActions.receiveTrack(data);
		    }
		});
	}
}