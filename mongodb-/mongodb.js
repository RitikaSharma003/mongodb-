//!SQL


//?if i want to insert the data in sql,dbs,1(database(dbName))
//?table (tbalename)->name(varchar),age(int),id(int));
//*Schema is predefined and static
//*1.) sqls db are used when the relation between data is the first priority .
//!no sql schemas are dynamic and these are used when the priority  is storing large amount of data.


//! 4types of no-sql databses

//*1. document based ->in this data is inserted in for javascript like objects.(BSON).
//example - 
let user1={
    "name":"varun",
"age":45,
"email":"varun@gmial"
}

//*2.*key value pair -use in rate limiting (from one ip address multiple requests done if affects the performance thne it will lmit the requests  like  only 20 requests send in  2mi n ) ,caching(storing the data somewhere from which accessing the data can be faster , they are in memory database->RAM) example-redisDB
name:"varun" ;
age:"34";
//without curly braces



//*3.graph databse =>data is connectd to nodes and all nodes are connected to each other 

//*example->neo4j(used in social media applications )
 

//*4. wide column database/columnar database-> data is stored in rows and columns  example->cassendraDB 



//!sql 
//?it is static in nature here structure is predined  
//?also known as rdbms 
//?it is stored in the form of tables  (rows and columns)
//?it is used when the priority in the relation is data  
//? it supports vertical scaling 
 //?using sql dbs  writing complex queries is easy (join,nested queries)
//examples-> 

//!scaling ->it is a process  of altering something either increase or decreasing . 
let mylaptop ={
    RAM:8,
    disk:512,

} 
//?movies series,game etc(left ram - 512mb , disk 1gb)
// *delete existing application and data (this is not allowed)
//*increasing specs , (vertical scaling)->new resources are added to the existing ssytem .
let myupgradedlaptop ={
    RAM:16,
    disk:1024,
}
//* buy a new laptop(horizontal  scaling ) ->new resources are added with the existing system (means new laptop as wellas oldlaptop)
let mynewlaptop ={
    RAM:8,
    disk:512
} 


 //!highly available and distributed 





//? Logical operatorsin Mongodb 
//*AND ,OR, NOT, NOR :-
//!and -> this will fetch all the douments when all the conditions are fulfilled. 
//!or-> this will fetch all the doucments when one condition is fulfilled. 
//!nor-> this will fetch all the documents  where none of the conditions are fulfilled. (acts like exact opposite of dollar . )

//!not-> this will negate the expression  is being passed .


//{fieldname : {$not:{expression }}}

db.emp.find({deptNo :{$not:{$eq:10}}},{deptNo:1});
db.emp.findOne({_id:ObjectId("")});
mongodb_id==="string"

//we have to specify that _id is a type of Object_id otherwise will be considered as string  
// ?always date is stored in the ISO Date format

//!YYYY-MM-DD T HH-MM-SS-ssz
//?t->separator 
 
//?ss->miiliseconds
//?z->offset value IST + 5 30 
 db.emp.find({hireDate : {$gt:ISODate("YYYY-MM-DD")}});
  db.emp.find({hireDate : {$gt:ISODate("2018-08-12")}},{hireDate:1});


  //!display all the emp names who are having their performance greater than 3.8
db.emp.find({"performance.rating":{$gt:4.3 }},
    {empName:1,"performance.rating":1});


//* while using nested object properties  , use double quotes to avoid error
 

//! display all the employees details who having react as one of their skills
db.emp.find({
    skills:"react"
}, {skills:1,_id:0});

//!this will fetch all the documents which will fulfill all the given values
// syntax for $all 
// filter part-> 
// {fieldName:{$all :['v1','v2',....]}}
db.emp({skills:{$all:["html" ,"php"]}},{skills:1}); //?$all works only in arrays 

db.emp({skills:{$in:["html" ,"php"]}},{skills:1}); //? fulfill any one of the values 
db.emp.find({deptNo:{$in:[10,20]}}) //?$in can work on numbers also 

//? {fieldName:{$size:+INTEGER VALUE}}
//!display all the emp names who are having 2 skills
db.emp.find({skills:{$size:4}},{skills:1}); // *this will fetch the documents based on the size or length of the array .



//?syntax for elemMatch (used for nested ) -> It is used to filter a documents when the array contains  objects/cuments in it.

//?{fieldName:{$elemMatch :{conditions}}}


//!Students who have scored above 90 in maths exams
db.students.find({courses:{$elemMatch:{marks:{$gt:90} , subject:"Math", semester:1},
 }
},{name:1,_id:0});



//!students who have failed marks <50 in any exam in semester 1
dbstudents.find({courses:{$elemMatch:{marks:{$lt:50},semester:1}}},{
    
})
//!students with scholarship above 40,0000
db.students.find({scholarships:{$elemMatch :{amount:{$gt:400000},year:2024}}});


//** element operators(exists,type) */
{fieldname:{$exists:true/false}}
//? syntax for $exists -> it will return the documents if the fieldName is present .

//!filter part:- 
de.emp.find({email:{$exists:false}}).count();

//!display all the  names of the emp who are getting a bonus 
db.emp.find({bonus:{$exists:true}},{
    empName:1,_id:0
})


//** type-> it will return the documents if the fieldName matches the datatype */

db.emp.find({sal:{$type:"string"}});


//** evaluation operator (regex,expr,etc.....) */
//?regular expression:- used for  pattern matching string and only works for string datatypes.


//!syntax:- 
//? {fieldname:{$regex:/pattername/}}
//*first way
//!display all the emp details who are having letter 'a' in their name 
db.emp.find({empName:{$regex:/a/}},{empName:1,_id:0}) //! fetch the name who is having a is present 

//*second way
//?applying regex at the start (^ cap symbol ) will start the pattern matching from the beginning of the string 

//!display all the emp details who are having  first letter 'a' in their name 
db.emp.find({empName:{$regex:/^a/}},{empName:1,_id:0}) 

//*third way
//?applying regex at the last ($) will start the pattern matching from the end of the string 

//!display all the emp details who are having  's' as the last character in their name 
db.emp.find({empName:{$regex:/s$/}},{empName:1,_id:0}) 


//* fourth way 
//?applying regex at the second  last (.^) will start the pattern matching from the end of the string 
way
//?applying regex at the second (.$) will start the pattern matching from the beginning of the string 
//? for skipping the character we have (dot).symbol and one dot will represent one character

//!display all the emp details who are having  'e' as the  second last character in their name 
db.emp.find({empName:{$regex:/e.$/}},{empName:1,_id:0}) 



//!display all the emp details who are having  second letter 'a' in their name from the start 
db.emp.find({empName:{$regex:/^.a/}},{empName:1,_id:0}) 


//!display all the emp names who are having  exactly 4 letters in their name
db.emp.find({empName:{$regex:/^....$/}},{empName:1,_id:0});

//*fiftth way 
///! display all the names whose name starts with a and end with s 
db.emp.find({empname:{$regex:/^a*.s$/}},{empName:1});


//? expr  ---------------------------------------------------------------------------------------

//!1. it is used to perform operations(like comparisions) in the documents 
//!2.it is used to aggregation operations 

//!syntax:
//*{$expr:{$CO :[]}}

//*CO=>comparision operator


//! display all the emp names and sal whose sal is greater than  2500 
db.emp.find({sal:{$gt:2000}},{empName:1,sal:1,_id:0});
//*or
db.emp.find({$expr:{$gt:["$sal",2500]}},{empName:1,sal:1,_id:0})


//? whenever we are passing document field values =>1 ) use double cquotes and prefix it with  $

//Show the emp whose comission (comm) is greater than  the salary (sal) 
//.count
db.emp.find({$expr:{$gt:["$com" , "$sal"]}} ,{empName:1 ,sal:1,com:1,_id:0});


//! updateOne/updateMany{filter} ,{updation} ,{options}
//?update  existing key 
//? update existing value
//? add a key-value pair  
//?delete a existing  key-value pair 
//!--------------------------------------------update op--------------------------------------------
//! field udate operation (set , unset, rename )
//?  set we can update existing value

//*syntax for $set -> {$set :{keyName:value1,keyName2:value2}}
db.students.updateMany({age:22} ,{$set:{city:"Noida" ,age:25 ,email:"abc@gmail.com"}}) ;


let updateResp={acknowledged :true, 
    matchedCount:2,
     modifiedCount:2 ,

}

db.students.updateMany({}, {$set:{hasInsurance:false}});

//? unset -> using unset we can remove a key-value pair  from the document  
//?syntax for $unset 

//! updation part 
 //?{$unset :{keyName:""}}
 db.students.updateMany({}, {$unset:{hasInsurance:""}});
  db.students.updateOne({}, {$set:{age:1}}); 


//!rename=> using rename we can modify the existing key 

{$rename:{oldKeyName:newKeyName}}

db.students.updateMany({},{$rename:{name:'username'}},
    {upsert:false}); //options ->by default it's value is false
   
    //!case-1) when  the document gets matched .

//*1 upsert is false -> document is geting updated
db.students.updateOne({age:25},{$set:{email:"abc.gail.com"}} ,{upsert: false});

//*1 upsert is true -> document is getting updated
    



//!case-2)when the document does not get matched. 

//*1 upsert is false -> document is geting updated
db.students.updateOne({age:205},{$set:{email:"aec.gail.com"}} ,{upsert:true});

//*2  upsert is true -> new document created with given values. By default upsert value is false 


//?upsertedCount:no of documents new added  

//!-------------------------------artithmetic update  operation (max ,min ,inc  , mul)-/-------------------------
//? syntax for $max and $min 
//? updation part 
//* {$max/$min :{fieldname:value}} 

//!$max value will be only updated the value when the passed value is strictly greater than the  saved value
//!min value will be only updated the value when the passed value is strictly lower than the  saved value
db.scores.InsertMany([
    {
        name:"Varun",
        maxScore:300,
        minScore:120,

    },
     {name:Ram,
        maxScore:250,
        minScore:10,

     }
]);

db.scores.updateOne({name:"Varun"},{$max:{$maxScore:250}});
db.scores.updateOne({name:"Varun"},{$min:{$minScore:110}});
db.scores.updateOne({name:"Varun"},{$min:{$lowScore:110}}); //* if field_name not present it will add new key value pair in the data  


//!-----------------------------------inc----------------------------------------------------------------------
 //?{$inc :{fieldname:+/- Integer NUmber}}  it is used to increment /decrement  the data by specific values
 db.scores.updateOne({name:"varun" },{$inc:{maxScore:-21}});
  //* if field_name not present it will add new key value pair in the data  
  //* null can not be used as $inc




  //!Arry update operators-----------------------------------------------------------------------------------

//?$push-> this will add the element at the last 
//? syntax -> {$push :{fieldname:"value"}}
db.emp.updateOne({},{$push:{skills:"html"}});
db.emp.updateOne({},{$push:{skills:["node","Css"]}}); //it will craete a  new nested array inside that skills array to add multiple values (for node and css) 


//! to add multiple values in the array we use each and push 
// !$each+$push -> using these we can add multiple values in the array 
//* syntax -> {$push :{fieldName: {$each:[v1,v2,v3......]}}

db.emp.updateOne({empName:"ward"},{$push:{skills:{$each:["node","mongodb"]}}});


//!add for specific position 
//? modifiers ->($position,$sort ,$slice (these cannot be used for addToSet)
db.emp.updateOne({empName:"Scott"},{$push:{skills:{$each:["ai/ml"] ,$position:1}}})
db.emp.updateOne({empName:"Scott"},{$push:{skills:{$each:["genai"] ,$position:3 ,$sort:1}}}) 


//? $pop-> this will remove an element from an array either from last or first
// syntax: {$pop:{fieldName:1/-1}}(1-> from end -1 from start)
db.emp.updateOne({},{$pop:{skills:1}});


//?addToSet-> It is used to add only uniques values in the array 

db.emp.updateOne({empName:"ward"},{$addToSet:{skills:{$each:["node","mongodb"]}}});


//!----------------------updatein array---------------------------------------------------------------------
//*{$pullAll:{fieldName:{v1,v2,v3...}}  ->this will remove all the occureneces present in the array if it matches with the values


db.emp.updateOne({empName:"ward"},{pullAll:{skills:["node","mongodb"]}});
//*$pullAll will accept array of values. 

//!$pull  :remove the particular value according to the condition 
//!syntax: updation part 
{$pull:{fields:{expression}}}
db.emp.updateOne({},{$pull:{$regex:{skills:{$regex:/e/}}}});
db.emp.updateOne({},{$pull:{$regex:{skills:"monogdb"}}});



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
    db.users.updateOne({experience:{$elemMatch:{duration :{$gt:20}}}},
    {$set :{"experience.$[e].bonus":400}},
    {$arrayFilters:{"e.duration ":{$gt:20} 


    //!used for filtering the array meanns for particular array we want to match the condition 

}}) //to select particular array not all the array  for filters  


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




//!----30-01-26------------------------------queries -------------------------------------------------------------------------
//?Find all the departments whose age is divisible by 10 (use $mod)
//{fieldname: {$mod:[divisior,remiainder]}}
 
db.emp.find({age:{$mod:[10,0]}},{age:1});

//! find all employees whose job titles contain  "man";
db.emp.find({job:{$regex:/^man/}},{job:1});


//!find all the emplouess whose working in dept 20 or 30 and ahve skills "sql"
db.emp.find({$and:[{skills:"sql"},{deptNo:{$in:[20,30]}}]});
//or 
db.emp.find({skills:"sql", deptNo:{$in:[20,30]
}});


//! find all the employees with exactly 3 projects and education is master or phd 
db.emp.find({skills:{$size:3},education : {$in:["master","phd"]}});


//!set a performance rating to 4.9 for emplouee "matrin " and also add last review date to the emp data 
db.emp.updateOne({empName:"ward"} ,{$set :{"performance.rating" :4.9 ,"performance.lastPromotedDate": Date.now() or ISODate(2026-1-31)}});

//!add a new facility "gym" to the facilities array of depratment 20 
db.deptNo.updateOne({dept:20}  ,{$addToSet:{facility:"gym"}})


//! add "trainingrqeuired" field a strue for all clerks wit performance rating below 4.0 

db.emp.updateMany(
    {job:"clerk",
        "performance.rating ":{$lt:4},

    }
    ,{$set:{trainingRequired:true}}

)
;
//! Add skill "problem solving  " at position_1 in skills array for employee scott 
db.emp.updateOne({
    des:"Scott"},{$push:{ skills:"problem solving " ,position:1}
})

//!Lazy Fetching - mongodb fetches the data in batches  to optimize the performance 

//?whenever we exceute a find method we get a cursor which points to data present in the database .The default behoaviour of mongoshell (our current driver ) is to print the first 20 documents presentat the cursor .If more documents  are present then we have to type "it" to get the next 20 documents and more .

//!Node(driver)->find()->cursor 

db.emp.find.forEach((doc)=>{
    print(doc.age);

})
