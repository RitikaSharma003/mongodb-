// *differnce between $pull and $pullAll -> using pull  we can pass conditions 
// *1.) we can update the first matching Element. 
// *2.) we can update all the elements 
//* 3.) we can update all the mtaching elements 

//? for condition -1  

//! Add a bonus  field to the experience   history in which durration in greater than 20 .
db.users.update({$and :[{name:"Rajesh kumar"},{experience: {elemMatch:{duration:{$gt:20}}}}]})

db.users.updateOne({experience:{$elemMatch:{duration :{$gt:20}}}},
    {$set :{"experience.$.bonus":200}}, //*here$ is used to go inside array (key value pairs of any particular data)
    )

    //? for condition-2

db.users.updateOne({experience:{$elemMatch:{duration :{$gt:20}}}},
    {$set :{"experience.$[].bonus":400}}, //* here$[] is used to go inside array (key value pairs of any particular data) and update all the array values

    );



    //? for condition-3
    db.users.updateOne({experience:{$elemMatch:{duration:{$gt:20}}}},
    {$set :{"experience.$[e].incentive":400}},
    {arrayFilters:[{"e.duration":{$gt:20}}]})


    //!used for filtering the array meanns for particular array we want to match the condition 

 //to select particular array not all the array  for filters  


//! Add to company : true,  to all the exp entries where the company is either google , amazon , or microsoft  
db.users.find({experience : {$elemMatch:{company :{$in :["Amazon","Google", "Microsoft"]}}}});


db.users.updateMany(
    
    {experience : {$elemMatch:{company :{$in :["Amazon","Google", "Microsoft"]}}}},

    {$set:{"experience.$[e].toCompany":true}},
    {
        arrayFilters: [{"e.company":{$in :["Amazon", "Google" ,"Microsoft"]}}]
    }
);


//! add midlevel :true, to all the experience history where salary is between  80,000,and 15, 00,000
db.users.find(
    {
        experience:{$elemMatch:{sal :{$gt:800000, $lt:1500000}}}
        
    },

);


db.users.updateMany({
    
        experience:{$elemMatch:{sal :{$gt:800000, $lt:1500000}}}
        
    
},
    {$set :{"experience.$[e].midlevel":true}},
    {arrayfilters:[{"e.sal" :{$gt :80000, $lt:1500000}}]}

); 




