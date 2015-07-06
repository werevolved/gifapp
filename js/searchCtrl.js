function MySearch(app, $http) {
	this.$http = $http;
	this.allTags = app;
	this.isTagExist = false;
	this.gifs = [];
}
MySearch.prototype.logAllTags = function(){
	console.log(this.allTags);
};
MySearch.prototype.checkTagExist = function(tag){	
	for(var i = 0; i < this.allTags.length; i++) {
		if(tag === this.allTags[i]) {
			this.isTagExist = true;
			console.log(this.allTags[i]);
			return "exist";
			break;
		}
	}
	this.isTagExist = false;
	console.log('tag not found');

};
MySearch.prototype.getImages = function(tag){
	var self = this;
	var result;
	var query = "http://www.gifbase.com/tag/" + tag + "?format=json";
	this.$http.get(query).
				  	success(function(data, status, headers, config) {
				  		self.gifs = data.gifs;
				  		console.log(self.gifs);
 					 }).
					error(function(data, status, headers, config) {
					   console.log(data);					  
					});
};
angular.module('MyApp').controller("MySearch", MySearch);