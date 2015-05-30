if (Meteor.isClient) {
  // counter starts at 0
  
Template.sidebar.events({
    'click [data-action="general-modal"]': function() {
      SemanticModal.generalModal('generalModal', {foo: 'bar'});
    }
  });  

Template.sidebar.events({
    'click [data-action="belegeModal"]': function() {
      SemanticModal.generalModal('belegeModal', {foo: 'bar'});
    }
  });  

Template.projectTeam.rendered = function(){
  this.$('.dropdown')
  .dropdown({
    // you can use any ui transition
    transition: 'drop'
  });
};


Template.date.rendered = function() {
  this.$('.datepicker').pickadate({
     formatSubmit: 'yyyy-mm-dd',
  });
  this.$('.datepicker2').pickadate({
     formatSubmit: 'yyyy-mm-dd',
  });
};

Template.projectSubmit.rendered = function() {
  this.$('.datepicker').pickadate({
     format: 'yyyy-mm-dd',
  });
};

Template.sidebar.rendered = function(){
this.$('.left.demo.sidebar')
  .sidebar('toggle');
};


Template.projectCard.helpers({
  'project': function(){
var postsArray = Projekte.find().fetch();
console.log(postsArray)
}
});

Template.projectCard.rendered = function(){
  this.$('.speciale.card .image').dimmer({
  on: 'hover'
})
};





Template.generalModal.events({
    'click button': function () {
      alert("You clicked the button!  This wouldn't have fired without the modal being wrapped in a second template!");
    }
  });

Template.sidebar.events({
    'click a': function () {
       $('.left.sidebar').sidebar('toggle');
    }
  });

Template.sidebarButton.events({
    'click button': function () {
      $('.left.sidebar').sidebar('toggle');
    }
  });

// Template.sidebar.events({
//     'click button': function () {
//         $('.left.demo.sidebar')
//       .sidebar('toggle');
//         }
//       });

  Template.MyProjects.helpers({
    'project': function(){

            console.log('tester');
            return Projekte.find({teamID: this._id, draft:false})

    }
  });

    Template.MyDrafts.helpers({
    'project': function(){

            console.log('tester');
            return Projekte.find({teamID: this._id, draft:true})
    }
  });

  Template.AllProjects.helpers({
    'project': function(){

            console.log('tester');
            return Projekte.find()
    }
  });

  Template.generalModal.rendered = function(){
this.$('.ui.checkbox')
  .checkbox();
this.$('select.dropdown')
  .dropdown()
;
};  

  Template.generalModal.helpers({
    'project': function(){
     return Projekte.find({author: 'Dominik Kenzler', draft:true})
    }
  });

    Template.addUser.helpers({
    'user': function(){
     return Users.find()
    }
  });

  Template.belegeModal.rendered = function(){
this.$('.ui.checkbox')
  .checkbox();
this.$('select.dropdown')
  .dropdown()
;
};  

  Template.insertBelege.helpers({

    
    'project': function(){
     
     var userId = Meteor.userId();
     var test = Users.findOne({_id: userId});
     return Projekte.find({"team.name" : test.username})
    }

  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {

    // code to run on server at startup

  });
}
