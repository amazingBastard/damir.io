Template.home.rendered = function() {
	Session.set('toggleAdmin', false);
	Session.set('showActions', false);
};

Template['home'].helpers({
	'posts': function() {
		return Posts.find({}, {sort: {updated: -1}});
	}
});
