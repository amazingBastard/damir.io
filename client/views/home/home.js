Template.home.rendered = function() {
	Session.set('toggleHidden', true);
};

Template['home'].helpers({
	'posts': function() {
		return Posts.find({}, {sort: {updated: -1}});
	}
});
