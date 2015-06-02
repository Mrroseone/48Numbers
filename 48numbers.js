if (Meteor.isClient) {

  // counter starts at 0
Meteor.startup(function () {

    sAlert.config({
        effect: '',
        position: 'top-right',
        timeout: 5000,
        html: false,
        onRouteClose: true,
        stack: true,
        offset: 0
    });

});
  
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

Template.sidebar.helpers({
    activeRouteClass: function(/* route names */) {
      var args = Array.prototype.slice.call(arguments, 0);
      args.pop();
      var active = _.any(args, function(name) {
      return Router.current() && Router.current().route.getName() === name
      });
      return active && 'active';
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

            return Projekte.find({teamID: this._id, draft:false})

    }
  });


    Template.billableItem.helpers({
    'belege': function(){
            return Belege.find({projectId: this._id})       
    }
  });

    // Template.billableItem.helpers({
    // var total = 0,
    // Belege.find({projectId:this._id}).map(function(doc) {
    // total += doc.amount;
    // console.log(total);
    // return total;
    //   })
    // });

    Template.MyDrafts.helpers({
    'project': function(){

            var user = Meteor.userId();
            console.log(user);
            return Projekte.find({team:{$elemMatch:{teamID:user}}})
    }
  });

  Template.AllProjects.helpers({
    'project': function(){

            console.log('tester');
            return Projekte.find()
    }
  });

  Template.insertBelege.rendered = function(){
    $('.ui.checkbox').checkbox().on('click' , function() {
    var billable = $('#billable').prop('checked') ? 'false' : 'true';
    $('#billable').attr('value', billable);
});
};  
//   Template.insertBelege.rendered = function(){
// this.$('.ui.checkbox')
//   .checkbox('toggle', false, true);
// this.$('select.dropdown')
//   .dropdown()
// ;
// };  

  Template.generalModal.helpers({
    'project': function(){
     return Projekte.find({author: 'Dominik Kenzler', draft:true})
    }
  });

    Template.addUser.helpers({
    'project': function(){
     var test = Projekte.find({team: 1});
     console.log('test');
     return Projekte.find({author: 'Dominik Kenzler', draft:true})
    },

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

//     Meteor.publish("collection", function() {
//     //returns undefined if not logged in so check if logged in first
//     if(this.userId) {
//         var user = Meteor.users.findOne(this.userId);
//         //var user is the same info as would be given in Meteor.user();
//     }
// });
    // code to run on server at startup

  });
}
