var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants  = require('../constants/AppConstants');
var EventEmitter  = require('events').EventEmitter;
var assign        = require('object-assign');
var AppAPI        = require('../utils/AppAPI');

var CHANGE_EVENT = 'change';

var _categories   = [];
var _results      = [];
var _itemDetails  = [];
var _trackDetails = [];
var chosen        = '';

var AppStore = assign({}, EventEmitter.prototype, {
	setResults: function(result){
		_results = result;
	},
	getResults: function(){
		return _results;
	},
	setItemDetails: function(item){
		_itemDetails = item;
	},
	getItemDetails: function(){
		return _itemDetails;
	},
	setTrackDetails: function(track){
		_trackDetails = track;
	},
	getTrackDetails: function(){
		return _trackDetails;
	},
	setCategories:function(categories){
		_categories = categories;
	},
	getCategories: function(){
		return _categories;
	},
	setMenuChoice: function(choice){
		chosen = choice;
	},
	getMenuChoice: function(){
		return chosen;
	},
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on('change', callback);
	},
	removeChangeListener: function(callback){
		this.removeListener('change', callback);
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;

	switch(action.actionType){
		case AppConstants.RECEIVE_CATEGORIES:
			AppStore.setCategories(action.categories);
			AppStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.SEARCH_RESULTS:
			AppAPI.searchResults(action.query);
			AppStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.RECEIVE_RESULTS:
			AppStore.setResults(action.result);
			AppStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.MENU_CHOICE:
			AppStore.setMenuChoice(action.choice);
			AppStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.GET_ITEM:
			AppAPI.searchItem(action.itemId, action.itemCat);
			AppStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.RECEIVE_ITEM:
			AppStore.setItemDetails(action.item);
			AppStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.GET_TRACK:
			AppAPI.searchTrack(action.trackId);
			AppStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.RECEIVE_TRACK:
			AppStore.setTrackDetails(action.track);
			AppStore.emit(CHANGE_EVENT);
			break;
	}

	return true;
});

module.exports = AppStore;