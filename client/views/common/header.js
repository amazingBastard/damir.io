Template['header'].helpers({
  iconToggle: function () {
    return Session.get('menuActive') ? 'remove' : 'content';
  }
});

Template['header'].events({
  'click .ui.menu .menu-toggle.item' : function () {
    Session.set('menuActive', !Session.get('menuActive'));
    Session.set('menuShow', !Session.get('menuShow'));
  }
});