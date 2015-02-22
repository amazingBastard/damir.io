Template.newPost.rendered = function () {
	Session.set('activeClass', true);
  Session.set('showEditor', true);
};

Template['newPost'].helpers({
	showEditor: function () {
		return Session.get('showEditor');
	},
	activeClass: function () {
		return Session.get('activeClass') ? 'active-editor' : 'active-preview';
  },
	animateEditor: function () {
    return Session.get('activeClass') ? 'fadeIn' : 'fadeOut';
  },
	animatePreview: function () {
		return !Session.get('activeClass') ? 'fadeIn' : 'fadeOut';
	},
	toggleButton: function () {
    return Session.get('activeClass') ? 'Preview' : 'Edit';
  }
});

Template['newPost'].events({
	'keyup .editor .markdown': function(e) {
		e.preventDefault();
		var post = $(e.target).val();

		Session.set('post', '');
		Session.set('post', post);
	},
	'click .toggle-editor': function(e) {
		e.preventDefault();
		var hideEditor = Session.get('showEditor');

    Session.set('activeClass', !Session.get('activeClass'));

    setTimeout(function () {
      Session.set('hideEditor', !Session.get('showEditor'));
    }, 500);
	},
	'click .add-new-post': function(e) {
		e.preventDefault();

		var newPost = {
			post: $('.new-post .editor .write.markdown').val(),
			date: Date.now(),
			updated: Date.now(),
			author: Meteor.userId(),
			postCall: function() {
				return this.post;
			}
		};

		Posts.insert(newPost);
		Router.go('home');
	}
});
