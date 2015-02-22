Template.home.helpers({
	'posts': function() {
		var user = Meteor.userId();
    return Posts.find({author: user}, {sort: {updated: -1}});
	}
});
