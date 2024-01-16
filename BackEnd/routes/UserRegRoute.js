import express from "express";
const router = express.Router();
import UserRegController from "../controllers/UserRegController.js";

// public routes
router.post("/register", UserRegController.UserRegister);
router.post("/login", UserRegController.UserLogin);
router.get("/display", UserRegController.UserDisplay);
router.get("/display/:id", UserRegController.UserSearchByID);
router.delete("/delete", UserRegController.UserDeleteAll);
router.delete("/delete/:id", UserRegController.UserDeleteByID);
router.put("/update/:id", UserRegController.UserUpdateByID);
// private routes
export default router;