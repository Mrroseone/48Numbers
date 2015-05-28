Meteor.methods({
	projectInsert: function(projectAttributes) {
		
		check(this.userId, String);

		var projectWithSameJobnummer = Projekte.findOne({jobnummer: projectAttributes.jobnummer});
		if (projectWithSameJobnummer) {
			return {
				projectExists: true,
				_id: projectWithSameJobnummer._id
			}
		}
		var user = Meteor.user();
		var project = _.extend(projectAttributes, {
			
			team : [
			    {
			name: user.username,
			teamID: user._id,
			}],
			// userId: user._id,
			// author: user.username,
			draft: true
			// submitted: new Date()
		});
		var projectId = Projekte.insert(project);

		// var jobId = Projekte.findOne(projectId);
		
		// console.log(jobId.jobnummer);

		return {
			jobnummer: projectAttributes.jobnummer
		};
	}
});