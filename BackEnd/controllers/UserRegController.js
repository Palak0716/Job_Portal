import UserRegModel from "../models/UserRegModel.js";
import bcrypt from 'bcryptjs';
const UserRegister = async (req, res) => {
   const {userName, userEmail, userMobile, userPassword, rPassword} = req.body;
   const data = req.body;
   if (userName && userEmail && userMobile && userPassword & rPassword) {
      if (userPassword == rPassword) {
         try {
            const saltKey = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(data.userPassword, saltKey);
            data.userPassword = hashPassword;
            const doc =  new UserRegModel(data);
            await doc.save();
            res.status(201).send({
               status: "Success",
               message: "Record Inserted...",
               data,
            });
         }
         catch(err){
            console.log(err);
            res.send({
               status: "Error", 
               message: "Unable to Reg."
            });
         }
      }
      else {
         res.send({
            status: "Password Issue",
            message: "Password and Confirm password does not matched...",
         });
      };
   }else {
      res.send({
         status: "Error",
         message: "Please fill all the fields...",
      });
   };
};

const UserLogin = async (req, res) => {
   try {
      const { userEmail, userPassword} = req.body;
      const userData = await UserRegModel.find({ userEmail: req.body.userEmail });
      if (userData.length > 0){
         console.log(userData);
         if(req.body.userPassword === userPassword){
            res.status(200).send({
               status: "Success",
               message: "Login Success",
               userData,
            });
         }
         else {
         res.status(200).send({
            status: "Fail",
            message: "Password Not Matched",
         });
      }
      }
      else {
         res.status(200).send({
            status: "Success",
            message: "User's Email Not Found",
         });
      }
   }
   catch (err) {
      console.log(err);
      res.status(500).send({ status: "Error", message: "Unable to Display details"});
   }
};

const UserDisplay = async(req, res) => {
   try {
      const userData = await UserRegModel.find({});
      if (userData.length > 0){
         res.status(200).send({
            status: "Success",
            message: "Get User Records",
            userData,
         });
      }
      else{
      res.status(201).send({
         status: "Success",
         message: "No user found...",
         userData,
      });
   }
}
   catch (err) {
      console.log(err);
      res.status(500).send({status: "Error", message: "Unable to display user data"})
   }
};

const UserSearchByID = async (req, res) => {
   try {
      const userData = await UserRegModel.find({ _id: req.params.id });
      if (userData.length > 0){
         res.status(200).send({
            status: "Success",
            message: "Get User Record",
            userData,
         });
      }
      else {
         res.status(200).send({
            status: "Success",
            message: "User Not Found",
         });
      }
   }
   catch (err) {
      console.log(err);
      res.status(500).send({ status: "Error", message: "Unable to Display details"});
   }
};

const UserDeleteAll = async (req, res) => {
   try {
      const userData = await UserRegModel.deleteMany({});
      if (userData) {
         res.status(200).send({
            status: "Success",
            message: "Delete All Users",
            userData,
         });
      }
      else {
         res.status(200).send({
            status: "Success",
            message: "No User Found",
         });
      }
   }
   catch (err) {
      console.log(err);
      res.status(500).send({ status: "Error", message: "Unable to delete user details"})
   }
};

const UserDeleteByID = async (req, res) => {
   try {
      const userData = await UserRegModel.findByIdAndDelete({
         _id: req.params.id,

      });
      if (userData){
         res.status(200).send({
            status: "Success",
            message: "This User Deleted",
            userData,
         });
      }
      else {
         res.status(200).send({
            status: "Success",
            message: "User not Found",
         });
      }
   }
   catch(err){
      console.log(err);
      res.status(500).send({ status: "Error", message: "Unabele to delete User details by ID"});
   }
};

const UserUpdateByID = async (req, res) => {
   try {
      console.log(req.body);
      console.log(req.params.id);
      const userData = await UserRegModel.findByIdAndUpdate({
         _id: req.params.id,
      },
      req.body
      );
      if (userData) {
         res.status(200).send({
            status: "Success",
            message: "User Updated",
            userData,
         });
      }
      else {
         res.status(200).send({
            status: "Seccess",
            message: "User Not Found",
         });
      }
   }
   catch(err){
      console.log(err);
      res.status(500).send({ status: "Error", messge: "Unable to update user"});
   }
};

export default {UserRegister, UserLogin, UserDisplay, UserSearchByID, UserDeleteAll, UserDeleteByID, UserUpdateByID, };