Meteor.publish('posts', function(options) {
  check(options, {
    sort: Object,
    limit: Number
  });
  return Posts.find({}, options);
});

Meteor.publish('post', function(id) {
  check(id, String)
  return Posts.find(id);
});
