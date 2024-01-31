use FacultySystemDB // Create and connect DB 
db.createCollection("students") // no schema "implicit"

db.getCollection("students").insertOne({
        firstName:"ahmed",
        lastName:"ali",
        age:20,
        faculty:{
            name:"computer Science",
            Address:"cairo"
            },
        grades:[
            {
                courseName:"oop",
                Grade:20,
                pass:true
              },
            {
                courseName:"java",
                Grade:10,
                pass:false
               }
        ],
        IsFired:true
   }) // insert one record 
   
   ////////////////////////////////
   
   db.getCollection("students").insertMany([
{
        firstName:"ola",
        lastName:"ali",
        age:30,
        faculty:{
            name:"computer Science",
            Address:"alex"
            },
        grades:[
            {
                courseName:"c",
                Grade:50,
                pass:true
              },
            {
                courseName:"javascript",
                Grade:10,
                pass:false
               }
        ],
        IsFired:false
           },
           {
        firstName:"osama",
        lastName:"adel",
        age:20,
        faculty:{
            name:"computer Science",
            Address:"tanta"
            },
        grades:[
            {
                courseName:"bash",
                Grade:0,
                pass:false
              },
            {
                courseName:"java",
                Grade:10,
                pass:false
               }
        ],
        IsFired:false
           },
           {
        firstName:"eman",
        lastName:"ahmed",
        age:20,
        faculty:{
            name:"computer Science",
            Address:"cairo"
            },
        grades:[
            {
                courseName:"css",
                Grade:20,
                pass:true
              },
            {
                courseName:"html",
                Grade:10,
                pass:false
               }
        ],
        IsFired:true
           }
   ]) //Insert many records
         
      ////////////////////////////////
           
           
db.getCollection("students").find({}) //retrieve all data 

db.getCollection("students").find({firstName:"ola"}) // retrieve with specific First Name

db.getCollection("students").find({$or:[{firstName:"ahmed"},{lastName:"ahmed"}]}) //retrieve data with  First Name=Ahmed, or Last Name= Ahmed

db.getCollection("students").find({firstName:{$ne:"ahmed"}}) //retrieve data with First name isn't "Ahmed"

db.getCollection("students").find({$and:[{age:{$gte:21}},{faculty:{$ne:null}}]}) //retrieve data with Age more than or equal to 21, and their faculty isn't NULL.

db.getCollection("students").find({firstName:"ahmed"},{firstName:1,lastName:1,IsFired:1}) //last select 

db.getCollection("students").updateOne({firstName:"ola"},{$set:{firstName:"alaa"}}) //update

db.getCollection("students").deleteMany({IsFired:false}) //delete all matched

db.getCollection("students").deleteMany({}) //delete all 

db.dropDatabase() 
