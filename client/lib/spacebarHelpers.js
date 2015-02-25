Template.registerHelper('debug', function (optionalValue) {
  if (typeof console !== "undefined" || typeof console.log !== "undefined") {
    console.log("Current Context");
    console.log("====================");
    console.log(this);
    if (optionalValue) {
      console.log("Value");
      console.log("====================");
      console.log(optionalValue);
    }

    return '';
  }

  // For IE8
  alert(this);

  if (optionalValue) {
    alert(optionalValue);
  }

  return '';
});

Template.registerHelper('constant', function (what) {
  return Meteor.App[what.toUpperCase()];
});

Template.registerHelper('formatDate', function(newDate, updatedDate) {
  if ( newDate > updatedDate) {
    return moment(newDate).fromNow();
  } else {
    return moment(updatedDate).fromNow();
  }
});

Template.registerHelper('session', function(input) {
  return Session.get(input);
});

Template.registerHelper('showActions', function() {
  return Session.get('showActions');
});

Template.registerHelper('toggleHidden', function() {
  return Session.get('toggleHidden') ? 'hidden' : '';
});

Template.registerHelper('toggleAdmin', function() {
  return Session.get('toggleAdmin') ? 'admin' : '';
});

Template.registerHelper('showEditor', function() {
  return Session.get('showEditor');
});

Template.registerHelper('toggleEditor', function() {
  return Session.get('toggleEditor') ? 'active-editor' : 'active-preview';
});

Template.registerHelper('animateFade', function() {
  return Session.get('toggleEditor') ? 'fadeIn' : 'fadeOut';
});

Template.registerHelper('toggleButton', function() {
  return Session.get('toggleEditor') ? 'Preview' : 'Edit';
});
