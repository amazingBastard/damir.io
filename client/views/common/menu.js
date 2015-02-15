Template['menu'].helpers({
  animateClass: function () {
    return Session.get('menuActive') ? 'fadeIn' : 'fadeOut';
  }
});

Template['menu'].events({
  'click .menu a' : function () {
    Session.set('menuActive', !Session.get('menuActive'));
    Session.set('menuShow', !Session.get('menuShow'));
  }
});
