Template.projectTeam.events({

    'click .delete': function(e) {
    e.preventDefault();
    var test = $(e.target).find('[name=delete]').get('[data-value]');
    console.log(test);
    console.log(e)
    if (confirm("Delete this post?")) {
    	var project = Projekte.findOne({_id: this._id});
    	var projectteam = project.team 
        console.log(newteammember.team);
        // var currentProjectId = this._id;
        //Projekte.remove({teamID: newteammember});
        
        // Projekte.remove(currentProjectId.team);
        }
    }
})