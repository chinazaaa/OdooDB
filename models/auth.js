const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
	token:{ type: String}
	
},
 

);

 

module.exports = mongoose.model('Admin', AdminSchema);