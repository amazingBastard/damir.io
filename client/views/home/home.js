Template.home.helpers({
	'posts': function() {
		return Posts.find({}, {sort: {updated: -1}});
	}
});
