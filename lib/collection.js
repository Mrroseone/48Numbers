//Collection User
Users = Meteor.users;

//Collection Projekte
Projekte = new Mongo.Collection("projekte");
Projekte.attachSchema(projekteSchema, {transform: true});

//Collection Belege
Belege = new Mongo.Collection("belege");
// Belege.attachSchema(belegeSchema, {transform: true});


// console.log("testServer");
// test = Projekte.aggregate([  
//     {$unwind: '$billable'},
//     {$group: { 
//         _id: '$_id', 
//         summe: { 
//             $sum: '$billable.cost' 
//         } 
//     }} 
//  ]);
// console.log(test);

// Lists.update(currentListId, {$set: listProperties, $inc: {shares: 1}, $push: { activities: {userId: user._id, userName: user.username, activity: 'update', date: new Date()}}}

// test1 = Projekte.aggregate([  
//     {$group: { 
//         _id: null, 
//         summe: { 
//             $sum: 'betrag' 
//         } 
//     }} 
//  ]);
// console.log(test1);
