function MySearch(app) {
	this.allTags = app;
	this.isTagExist = false;
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
angular.module('MyApp').controller("MySearch", MySearch);