import mongoose from "mongoose";
const employerRegSchema = new mongoose.Schema({
   employerName: {
      type: String, required: [true, "User name is Required"],
      trim: true, 
   },
   employerEmail:{
      type: String, required: [true, "Email is Required"],
      trim: true, unique: true,
   },
   userMobile: {
      type: Number, required: [true, "Monile Number is Required"],
      unique: true, trim: true,
   },
   userPassword: {
      type: String, required: [true, "Password is Required Field"],
      trim: true, minlength: 6, maxlength: 100,
   },
});

const EmployerRegModel = mongoose.model("employerreg", employerRegSchema);

export default EmployerRegModel;