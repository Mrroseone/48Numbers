test = Projekte.aggregate([  
    {$unwind: '$billable'},
    {$group: { 
        _id: '$_id', 
        summe: { 
            $sum: '$billable.cost' 
        } 
    }} 
 ]);
console.log(test);

// Lists.update(currentListId, {$set: listProperties, $inc: {shares: 1}, $push: { activities: {userId: user._id, userName: user.username, activity: 'update', date: new Date()}}}

test1 = Projekte.aggregate([  
    {$group: { 
        _id: null, 
        summe: { 
            $sum: "betrag" 
        } 
    }} 
 ]);
console.log(test1);

test3 = Belege.aggregate([  
    {$group: { 
        _id: null, 
        summe: { 
            $sum: '$amount' 
        } 
        
    }} 
 ]);
console.log(test3);
