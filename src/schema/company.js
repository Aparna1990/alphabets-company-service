
const mongoose = require('mongoose');
const companySchema = new mongoose.Schema({
    companyName: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    emailId: {
      type: String,
      required: true
    },
    mobileNumber:{
      type:String,
      required: true
    },
    createdBy:{
      type: String,
      required: true
    }
  });
  module.exports = mongoose.model('Company', companySchema);