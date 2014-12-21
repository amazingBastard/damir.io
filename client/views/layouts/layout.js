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
