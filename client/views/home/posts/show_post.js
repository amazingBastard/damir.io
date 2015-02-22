Template.showPost.rendered = function () {
	Session.set('activeClass', false);
  Session.set('showEditor', false);

  var post = $('.editor .markdown').val();
  Session.set('post', post);
};

Template['showPost'].helpers({
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

Template['showPost'].events({
	'keyup .editor .markdown': function(e) {
		e.preventDefault();
		var post = $(e.target).val();

		Session.set('post', '');
		Session.set('post', post);
	},
	'click .toggle-editor': function(e) {
		e.preventDefault();

    Session.set('activeClass', !Session.get('activeClass'));
    Session.set('showEditor', !Session.get('showEditor'));
	},
	'click .delete-post': function(e) {
		e.preventDefault();

		if (confirm('Delete')) {
      var id = this;

      Posts.remove(id._id, function(err) {
			  if (err) {
					FlashMessages.sendError('An error occurred, please try agan.');
          console.log(err.reason);
        } else {
          Router.go('home');
					FlashMessages.sendSuccess('Post was deleted successfully!');
        }
      })
    }
	},
	'click .update-post': function(e) {
		e.preventDefault();

    var thisPostId = this._id,
		    postEntry = {
          post: $('.editor .markdown').val(),
          updated: Date.now()
        };

    Posts.update(thisPostId, {$set: postEntry}, function(err) {
      if (err) {
				FlashMessages.sendError('An error occurred, please try agan.');
        console.log(err.reason);
      } else {
        Router.go('home');
				FlashMessages.sendSuccess('Post was updated successfully!');
      }
    });
	}
});
