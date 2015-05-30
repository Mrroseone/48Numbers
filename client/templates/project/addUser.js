Template.projectDetail.events({
    'click .add': function(e) {
        // alert('Yeahh');
        e.preventDefault();
        // var currentListId = this._id;
        var projectId = Template.parentData(1)._id;

        console.log('projectId: ', projectId);
        var selectedUserId = $(e.currentTarget).data('value');
        console.log('selectedUserId: ', selectedUserId);
        var newteammember = Users.findOne({_id : selectedUserId});
        console.log(newteammember.username);
        var listProperties = {
          
            teamID: selectedUserId,
            name: newteammember.username
            
        };

        Projekte.update(projectId, {$push: { team: listProperties }}, function(error) {
            if (error) {
                // display the error to the user
                throwError(error.reason);
            } else {
                // alert('Und alle so yeaahh!');
                // Router.go('listPage', {_id: currentListId});
            }
        });
    }

})