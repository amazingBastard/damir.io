function loadUser(user) {
  var userAlreadyExists = typeof Meteor.users.findOne({ username : user.username }) === 'object';

  if (!userAlreadyExists) {
    Accounts.createUser(user);
  }
}

Meteor.startup(function () {
  var users = YAML.eval(Assets.getText('users.yml'));

  for (key in users) if (users.hasOwnProperty(key)) {
    loadUser(users[key]);
  }
});
/*
Accounts.onCreateUser(function (options, user) {
  user.roles = ['mdblog-author'];
  if (options.profile)
    user.profile = options.profile;
  return user;
});
*/
