Template.home.rendered = function() {
	Session.set('toggleHidden', true);
	Session.set('toggleAdmin', false);
};

Template['home'].helpers({
	'posts': function() {
		return Posts.find({}, {sort: {updated: -1}});
	}
});
