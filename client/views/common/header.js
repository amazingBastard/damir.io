Template['header'].helpers({
  iconToggle: function () {
    return Session.get('menuActive') ? 'remove' : 'content';
  },
  menuShow: function () {
    return Session.get('menuShow');
  }
});

Template['header'].events({
  'click .ui.menu .menu-toggle.item' : function () {
    Session.set('menuActive', !Session.get('menuActive'));
    Session.set('menuShow', !Session.get('menuShow'));
  },
  'click .ui.menu .sign-out.item' : function () {
    Meteor.logout();
  }
});
