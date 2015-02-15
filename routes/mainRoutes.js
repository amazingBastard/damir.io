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
