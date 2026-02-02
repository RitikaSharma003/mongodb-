db.users.updateOne({experience: {$elemMatch:{duration:{$gt:20}}}},{$set:{"experience.$[].bonus":400}});



db.departments.find({
    hireDate: {$gt:ISODate("YYYYY-MM_DD")}
});

db.students.updateOne({age:250,sal:5000,name:"smith"},{$set:{phone:"34455566666"}},
    {upsert:true}
);

db.emp.updateOne({empName:"scott"},{$push:{skills:{$each:["gen-ai"],$position :3 ,$sort:1}}},)

db.emp.updateOne({},{$push:{hobbies:"singing"}});

db.emp.updateOne({empname:"ward"},{$addToSet:{skills:{$each:["node" ,"mongodb","css"]}}});

db.emp.updteOne({},{$push:{hobbies:"singing"}});

db.emp.updateOne({empName:"ward"},{$addToSet: {skills:{$each:["node","mongodb","css"]}}});

db.emp.updateOne({},{$pull:{skills:{$regex:/e/}}});

db.users.updateOne({experience:{$elemMatch:{duration:{$gt:20}}}},{$set:{"experience.$[].bonus":""}});

db.users.updateOne({
    experience:{$elemMatch:{duration:{$gt:20}}}
},{
    $unset:{"experience.$[].bonus":""}
},);
