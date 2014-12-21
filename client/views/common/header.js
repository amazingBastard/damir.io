Template['header'].helpers({
  iconToggle: function () {
    return Session.get('menuActive') ? 'remove' : 'content';
  }
});

Template['header'].events({
  'click .ui.menu .item .icon' : function () {
    var menuShow = Session.get('menuShow');

    Session.set('menuActive', !Session.get('menuActive'));

    setTimeout(function () {
      Session.set('menuShow', !Session.get('menuShow'));
    }, 300);
  }
});
