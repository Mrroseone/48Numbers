Meteor.publish('projekte', function() {
return Projekte.find();
});