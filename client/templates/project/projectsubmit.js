Template.date.events({
	'submit form': function(e) {
		e.preventDefault();
		
		var project = {

		jobnummer: $(e.target).find('[name=jobnummer]').val(),
		projectId: this._id,
		title: $(e.target).find('[name=title]').val(),
		betrag: $(e.target).find('[name=betrag]').val(),
		jobnummer: $(e.target).find('[name=jobnummer]').val(),
		startdate: $(e.target).find('[name=startdate]').val(),
		// endDate: $(e.target).find('[name=endDate]').val(),


		// team : [
		//     {
		// name: $(e.target).find('[name=name]').val(),
		// prozent: $(e.target).find('[name=prozent]').val(),
		// }],
		};



		Meteor.call('projectInsert', project, function(error, result) {
			// console.log(result._id);

		// display the error to the user and abort
		// if (error)
		// 	alert(error.reason);
			
		// show this result but route anyway
		 Router.go('projectDetail', {jobnummer: result.jobnummer});
		});
	}
});

// console.log(project);
// project._id = Projekte.insert(project);
// Router.go('/Projekte');

