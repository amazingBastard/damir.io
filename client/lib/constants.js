// Define App Constants

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
  NAME: 'Damir.io | Modern Javascript Powered Software',
  DESCRIPTION: 'A modern blog for the modern age. Learn all about the Javascript powered development process and latest web design trends.'
};
