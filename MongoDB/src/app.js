
const client = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

client.connect(url)
.then((con)=>{
  const database = con.db("employeeDB");
  const empCollection = database.collection("employeeMaster");

  //Insert Record
  // empCollection.insertOne({"name":"Sam Robert", "city":"London"})
  // .then((res)=>console.log("Data Inserted", res))
  // .catch(e=>console.log('Error',e))

  //Fetch One Record
  // empCollection.findOne({"city": "London"})
  //   .then(res => console.log(res))
  //   .catch(error => console.log('Error', error))

  // //Fetch All Records
  // empCollection.find({}).toArray()
  //   .then(res =>{
  //       res.map(emp=>console.log(`Employee Name : ${emp.name} and city: ${emp.city}`))
  //   })
  //   .catch(error => console.log('Error', error))

  // Update One Record
    // empCollection.updateOne({"name": "Rahul Gandhi"} , { $set : {"city" : "New Delhi"}})
    //   .then(res => console.log(res))
    //   .catch(error => console.log('Error', error))

  })
.catch(error => console.log(error));




