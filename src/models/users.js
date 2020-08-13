const {Schema, model} = require('mongoose');
const bcryptjs = require('bcryptjs');

const userSchema = new Schema({
    name:{type: String, required:true},
    email:{ type: String, required: true, unique: true},
    password:{type: String, required: true},
},{
    timestamps:true
});

userSchema.methods.pass = async password =>{
   const salt = await bcryptjs.genSalt(10);
   return await bcryptjs.hash(password, salt);
};

userSchema.methods.match = async function(password) {
    return await bcryptjs.compare(password, this.password)
}

module.exports = model('User',userSchema);