const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/MyTestDB').then(() => {
console.log('Sucess');
}).catch(() =>{
    console.log('Error');

});

const empSchema = new mongoose.Schema({
    age:{
        type: Number
    },
    Name:{
        type: String
    }
})

const table = mongoose.model('Employee', empSchema);


const createCollection = async () =>{
    try {
     const row1 = new table({
        age: 200,
        Name: "Test1"
     });
     
     const row2 = new table({
        age: 300,
        Name: "Test2"
     });
     
     const result = await table.insertMany([row1, row2]);
     console.log(result);
    } catch(err) {
        console.log(err);
    }
}

//createCollection();

const getDocument = async() => {
    const result = await table.find({age:{$gt  :200}});
    console.log(result);
}

//getDocument();

const updateDocument = async(_id)=> {
     
    const data = await table.updateOne({_id},{
    $set:{age: 500}
    });
    console.log(udpated);
}

updateDocument('637b09482aff8a368b97faa5');