Template.insertBelege.events({
	'submit form': function(e) {
		e.preventDefault();
		
		var beleg = {

		// jobnummer: $(e.target).find('[name=jobnummer]').val(),
		// projectId: this._id,
		discription: $(e.target).find('[name=title]').val(),
		projectId: $(e.target).find('[name=project]').val(),
		amount: $(e.target).find('[name=betrag]').val(),
		billable: $(e.target).find('[name=billable]').val(),
		category: $(e.target).find('[name=category]').val(),
		tax: $(e.target).find('[name=tax]').val(),


		// team : [
		//     {
		// name: $(e.target).find('[name=name]').val(),
		// prozent: $(e.target).find('[name=prozent]').val(),
		// }],
		};



		Meteor.call('belegInsert', beleg, function(error, result) {
			
			
		// display the error to the user and abort
		// if (error)
			
		// show this result but route anyway
		 // Router.go('projectDetail', {jobnummer: result.jobnummer});
		});
	}
});


// console.log(project);
// project._id = Projekte.insert(project);
// Router.go('/Projekte');


// Template.belegeModal.events({
// 'submit form': function(e) {
// e.preventDefault();
// var project = {

// // jobnummer: $(e.target).find('[name=jobnummer]').val(),

// billable : [
//     {
// name: $(e.target).find('[name=name]').val(),
// cost: $(e.target).find('[name=cost]').val(),
// }]
// // jobnummer: $(e.target).find('[name=jobnummer]').val(),
// };


// console.log(project);
// project._id = Projekte.insert(project);
// Router.go('/Projekte');

// }
// });

// Template.billableSubmit.helpers({
//  foo: function () {
// 	test = Projekte.aggregate([  
//     {$match: { _id: "this._id"} },
//     {$unwind: '$team'},
//     {$group: { 
//         _id: this._id, 
//         summe: { 
//             $sum: "$team.prozent" 
//         } 
//     }} 
//  ]);
// return console.log(test);
// console.log("helper");
// }
// });