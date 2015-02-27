Template.home.rendered = function() {
	Session.set('showFooter', true);
	Session.set('toggleCover', false);
	Session.set('showActions', false);
};

Template['home'].helpers({
  posts: function() {
    return Posts.find({}, {sort: {submitted: -1}});
  }
});
