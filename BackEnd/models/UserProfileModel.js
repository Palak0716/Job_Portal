import mongoose, { mongo } from "mongoose";
const userProfileSchema = new mongoose.Schema({
   userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userreg",
      required: [true, "User ID is Required"],
      unique: true,
      trim: true,
   },
   userSkills: {
      type: String, required: [true, "Skills Must added"],
      trim: true, 
   },
   userEXP:{
      type: String, required: ['true', "User Exp Required"],
      enum:["Yes", "No"], trim: true,
   },
   userExpDetails:{
      type: String, required:false,
      trim: true,
   },
   userOtherInfo: {
      type: String, required: false,
      trim: true,
   },
});

const UserProfileModel = mongoose.model("userprofile", userProfileSchema);

export default UserProfileModel;