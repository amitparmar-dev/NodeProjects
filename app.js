
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/employeeDB")
.then(()=>console.log('Database connection established'))
.catch(e=>console.log('Database connection failed'));

const deptSchema = new mongoose.Schema({ head: String, deptName : String })
const DepartmentModel = new mongoose.model('Department', deptSchema );

// const insertDoc = async () =>{
// // Insert Document
// try{
//     const deptDoc = new DepartmentModel({head:'Rahul Vaidya', deptName: 'HR'});
//     const result = await deptDoc.save()
//     console.log(result);
// }
// catch{
//     error=>console.log(error)
// }
// }
// insertDoc();

// //Read Documents
// DepartmentModel.find({deptName:"HR"}).select({head:1})
// .then((result)=>console.log(result))
// .catch(error=>console.log(error))

//Update Documents
DepartmentModel.update({head:"Priya Mohan"}, {$set:{deptName:"HR"} } )
 .then((result)=>console.log(result))
 .catch(error=>console.log(error))

DepartmentModel.find({deptName:"HR"})
.then((result)=>console.log(result))
.catch(error=>console.log(error))