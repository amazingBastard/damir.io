Template.newPost.events({
	'keyup .markdown-form .editor .markdown': function(e) {
		setTimeout(function() {
			e.preventDefault();
			var post = $(e.target).val();
			Session.set('post', '');
			Session.set('post', post);
		});
	}
});

Template.newPost.events({
	'click .add-new-post': function(e) {
		e.preventDefault();

		var newPost = {
			title: $(e.target).parent().parent().find('.markdown-form.new-post .post-title').val(),
			post: $('.markdown-form.new-post .editor .write.markdown').val(),
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
