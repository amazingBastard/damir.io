Template.layout.rendered = function() {
  Session.set('menuActive', false);
  Session.set('menuShow', false);
}

Template['layout'].helpers({
  menuShow: function () {
    return Session.get('menuShow');
  },
  activeClass: function () {
    return Session.get('menuActive') ? 'menu-active' : '';
  }
});

Template['layout'].events({
  'click .layout.menu-active .yield' : function () {
    Session.set('menuActive', !Session.get('menuActive'));
    Session.set('menuShow', !Session.get('menuShow'));
  }
});
