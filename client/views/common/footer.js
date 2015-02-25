Template['footer'].events({
	'click .delete-post': function(e) {
		e.preventDefault();

		if (confirm('Delete')) {
      var id = this;

      Posts.remove(id._id, function(err) {
			  if (err) {
					FlashMessages.sendError('Error, error!');
          console.log(err.reason);
        } else {
          Router.go('home');
					FlashMessages.sendSuccess('Post deleted');
        }
      })
    }
	}
});
