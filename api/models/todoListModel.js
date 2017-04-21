'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
   name: {
      type: String,
      require: 'kindly enter the name of the task'
   },
   create_date: {
      type: Date,
      default: Date.now
   },
   status: {
      type: [{
         type: String,
	 enum: ['pending','ongoing','completed']
      }],
      default: ['pending']	   
   }
});

module.exports = mongoose.model('Task', TaskSchema);
