Template.newPost.rendered = function () {
	Session.set('toggleCover', true);
	Session.set('showFooter', false);
	Session.set('showActions', false);
	Session.set('toggleEditor', true);
  Session.set('showEditor', true);
};

Template['newPost'].events({
	'keyup .editor .markdown': function(e) {
		e.preventDefault();
		var post = $(e.target).val();

		Session.set('post', '');
		Session.set('post', post);
	},
	'click .toggle-editor': function(e) {
		e.preventDefault();

    Session.set('toggleEditor', !Session.get('toggleEditor'));
    Session.set('showEditor', !Session.get('showEditor'));
	},
	'click .add-new-post': function(e) {
		e.preventDefault();
		var now = Date.now();

		var newPost = {
			post: $('.new-post .editor .write.markdown').val(),
			date: now,
			updated: now,
			author: Meteor.userId(),
			postCall: function() {
				return this.post;
			}
		};

		Posts.insert(newPost);
		Router.go('home');
		FlashMessages.sendSuccess('Post added');
	}
});
