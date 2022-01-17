const mongoose = require('mongoose')

mongoose.connect(db).then(()=>{console.log('Connection Successful')}).catch((err)=>{
    console.log(err)
})