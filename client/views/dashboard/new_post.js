Template.newPost.rendered = function () {
	var preview = $('.markdown-form .preview');

	$(preview).addClas('hidden');
};

Template.newPost.events({
	'keyup .markdown-form .editor .markdown': function(e) {
		setTimeout(function() {
			e.preventDefault();
			var post = $(e.target).val();
			Session.set('post', '');
			Session.set('post', post);
		});
	},
	'click .switch-editor': function(e) {
		e.preventDefault();

    console.log('clicked preview');
		// @TODO: rename button to toggle
		// session 'toggle'
		// preview/editor is switched in/out
		// button title toggles preview/editor
	},
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
