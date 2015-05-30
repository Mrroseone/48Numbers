Meteor.methods({
	belegInsert: function(projectAttributes) {
		
		var user = Meteor.user();
		var beleg = _.extend(belegAttributes, {
			
			authorID : user._id
		
			});
		
		var belegID = Belege.insert(beleg);

		// var jobId = Projekte.findOne(projectId);
		
		// console.log(jobId.jobnummer);

		return {
			_id: projectAttributes._id
		};
	}
});