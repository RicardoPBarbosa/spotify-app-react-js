var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
	searchTrack: function(trackId){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.GET_TRACK,
			trackId: trackId
		});
	},
	receiveTrack: function(track){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECEIVE_TRACK,
			track: track
		});
	},
	searchItem: function(itemId, itemCat){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.GET_ITEM,
			itemId: itemId,
			itemCat: itemCat
		});
	},
	receiveItem: function(item){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECEIVE_ITEM,
			item: item
		});
	},
	receiveCategories: function(categories){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECEIVE_CATEGORIES,
			categories: categories
		});
	},
	searchResults: function(query){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SEARCH_RESULTS,
			query: query
		});
	},

	receiveResults: function(result){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECEIVE_RESULTS,
			result: result
		});
	},

	receiveMenuChosen: function(choice){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.MENU_CHOICE,
			choice: choice
		});
	}
}

module.exports = AppActions;