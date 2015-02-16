Template.newPost.events({
	'keyup .markdown.new-post .editor .post': function(e) {
		setTimeout(function() {
			e.preventDefault();
			var post = $(e.target).val();
			Session.set('post', '');
			Session.set('post', post);
		});
	}
});

Template.newPost.rendered = function() {
	$('.markdown .two.fields section.field').each(function() {
		$(this).find('.fullscreen').click(function() {
			if ($(this).parent().hasClass('editor')) {
				$('.markdown.new-post').removeClass('fullscreen-preview');
				$('.markdown.new-post').toggleClass('fullscreen-editor');
			} else {
				$('.markdown.new-post').removeClass('fullscreen-editor');
				$('.markdown.new-post').toggleClass('fullscreen-preview');
			}
		});
	});
}

Template.newPost.events({
	'click .add-new-post': function(e) {
		e.preventDefault();

		var newPost = {
			title: $(e.target).parent().parent().find('.markdown.new-post .post-title').val(),
			post: $('.markdown.new-post .editor .post').val(),
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
