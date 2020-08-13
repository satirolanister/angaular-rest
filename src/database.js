const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/tienda'

mongoose.connect(url,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(db => console.log('db arriba'))
.catch(err=>console.log(err));
