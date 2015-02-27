Router.route('/dashboard', {
  name: 'dashboard'
}, function () {
  this.render('dashboard');
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/dashboard/:_id', {
  name: 'editPost',
  waitOn: function () {
    return Meteor.subscribe('post', this.params._id);
  },
  data: function() {
    return Posts.findOne(this.params._id);
  },
  action: function () {
    if (this.ready())
      this.render('editPost')
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/about', {
  name: 'about'
}, function () {
  this.render('about');
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/posts/:_id', {
  name: 'showPost',
  waitOn: function () {
    Meteor.subscribe('post', this.params._id)
  },
  data: function() {
    return Posts.findOne(this.params._id);
  },
  action: function () {
    if (this.ready())
      this.render('showPost')
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/:postsLimit?', {
  name: 'home'
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});
