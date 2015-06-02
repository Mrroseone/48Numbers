Meteor.methods({
	teamInsert: function(teamAttributes) {
		
		var teammemberexists = Projekte.findOne({team: {teamid: projectAttributes.team.teamid}});
		if (teammemberexists) {
			return {
				teammemberExists: true,
				_id: teammemberexists._id,
			}
		alert("Der Nutzer ist bereits im Team")
	
		}

		var user = Meteor.user();
		var beleg = _.extend(belegAttributes, {
			
			authorID : user._id
		
			});
		
		var belegID = Belege.insert(beleg);

		// var jobId = Projekte.findOne(projectId);
		
		// console.log(jobId.jobnummer);

		// return {
		// 	_id: projectAttributes._id
		// };
	}
});