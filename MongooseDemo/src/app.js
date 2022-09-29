const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/studentDB")
.then(()=>console.log('Database is connected'))
.catch((error)=>console.log(error));

//schema gives the structure to the document

const studnetSchema = new mongoose.Schema({
    sId:Number,
    sName: String,
    sCourse:String,
    sDept: String
})

const Student = new mongoose.model('Student', studnetSchema);

//Insert Document
// const studentDoc = new Student({
//     sId:102,
//     sName: 'Raj Shah',
//     sCourse:'BE.COMP',
//     sDept: 'Computer'
// })
// studentDoc.save()
// .then((result)=>console.log(result))
// .catch(error=>console.log(error))

//async await

const insertDoc = async () =>{
    try {
        const studentDoc = new Student({
            sId: 103,
            sName: 'Riya Rajput',
            sCourse: 'BE.IT',
            sDept: 'IT'
        })
        const result = await studentDoc.save();
        console.log(result)
    }
    catch {
        error => console.log(error);
    }
}

// insertDoc()

//Read Documents
const readDoc = async () => {
    const result = await Student.find({ sDept: "IT" })
    console.log(result)
    // .catch(error => console.log(error))
}
//readDoc();

//Update Documents
Student.updateOne({sDept:"Computer"}, {
    $set:{sCourse:"BE.CE"}
})
.then(result=>console.log(result))
.catch(error => console.log(error));
