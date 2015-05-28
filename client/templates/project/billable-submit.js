Template.billableSubmit.events({
'submit form': function(e) {
e.preventDefault();
var project = {

// jobnummer: $(e.target).find('[name=jobnummer]').val(),

billable : [
    {
name: $(e.target).find('[name=name]').val(),
cost: $(e.target).find('[name=cost]').val(),
}]
// jobnummer: $(e.target).find('[name=jobnummer]').val(),
};


console.log(project);
project._id = Projekte.insert(project);
Router.go('/Projekte');

}
});

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