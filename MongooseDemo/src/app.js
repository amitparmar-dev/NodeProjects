const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/studentDB")
.then(()=>console.log('Database is connected'))
.catch((error)=>console.log(error));

//schema gives the structure to the document

const studnetSchema = new mongoose.Schema({
    sId:{
        type: Number,
        require:true,
        unique:true
    },
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
    const result = await Student.find().select({sName: 0})
    console.log(result)
    // .catch(error => console.log(error))
}
//readDoc();

//Update Documents
// Student.updateOne({sDept:"Computer"}, {
//     $set:{sCourse:"BE.CE"}
// })
// .then(result=>console.log(result))
// .catch(error => console.log(error));

//Delete Document
// const deleteOne = async () =>{
//     const result = await Student.findByIdAndDelete({_id : "6333c9357cdc81d8bf655ebf"})
//     console.log(result);
// }

// deleteOne();
