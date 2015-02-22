Router.route('/dashboard', {
  name: 'dashboard'
}, function () {
  this.render('dashboard');
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/about', {
  name: 'about'
}, function () {
  this.render('about');
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/:_id', {
  name: 'showPost',
  data: function() {
    return Posts.findOne(this.params._id);
  },
  waitOn: function () {
    return Meteor.subscribe('posts');
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
