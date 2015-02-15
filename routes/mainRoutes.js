Router.route('/', {
  name: 'home',
  waitOn: function () {
    return [
      Meteor.subscribe('posts')
    ]
  },
  action: function () {
    if (this.ready())
      this.render('home');
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/dashboard', {
  name: 'dashboard',
  data: function() {
    return Posts.findOne(this.params._id);
  },
  waitOn: function () {
    return Meteor.subscribe('posts');
  },
  action: function () {
    if (this.ready())
      this.render('dashboard');
    else
      this.render('loading');
  }
});
