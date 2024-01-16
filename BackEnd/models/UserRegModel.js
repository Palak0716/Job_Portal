import mongoose from "mongoose";
const userRegSchema = new mongoose.Schema({
   userName: {
      type: String, required: [true, "User name is Required"],
      trim: true, 
   },
   userEmail:{
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

const UserRegModel = mongoose.model("userreg", userRegSchema);

export default UserRegModel;