Template['menu'].helpers({
  animateClass: function () {
    return Session.get('menuActive') ? 'fadeIn' : 'fadeOut';
  }
});
