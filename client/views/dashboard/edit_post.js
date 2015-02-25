Template.editPost.rendered = function () {
	Session.set('toggleEditor', false);
  Session.set('showEditor', false);
	Session.set('toggleHidden', true);

  var post = $('.editor .markdown').val();
  Session.set('post', post);
};

Template['editPost'].events({
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
	'click .update-post': function(e) {
		e.preventDefault();

    var thisPostId = this._id,
		    postEntry = {
          post: $('.editor .markdown').val(),
          updated: Date.now()
        };

    Posts.update(thisPostId, {$set: postEntry}, function(err) {
      if (err) {
				FlashMessages.sendError('Error, error!');
        console.log(err.reason);
      } else {
        Router.go('home');
				FlashMessages.sendSuccess('Post updated');
      }
    });
	}
});
