import express from "express";
import cors from "cors";
import connectDB from "./config/connectdb.js";
import UserRegRoute from "./routes/UserRegRoute.js";
import UserProfileRoute from "./routes/UserProfileRoute.js";
import JobApplyRoute from "./routes/JobApplyRoute.js";
import JobPostRoute from "./routes/JobPostRoute.js";
import EmployerProfileRoute from "./routes/EmployerProfileRoute.js";
import EmployerRegRoute from "./routes/EmployerRegRoute.js";

const app = express();
app.use(cors());

const port = 8000;
const DATABASE_URL = "";

connectDB(DATABASE_URL);
app.use(express.json());

//Load routes
app.use("/api/v1/userreg", UserRegRoute);
app.use("/api/v1/userprofile", UserProfileRoute);
app.use("/api/v1/employerreg", EmployerRegRoute);
app.use("/api/v1/employerprofile", EmployerProfileRoute);
app.use("/api/v1/jobpost", JobPostRoute);
app.use("/api/v1/jobapply", JobApplyRoute);

app.listen(port, () => {
   console.log(`Server listening at http://localhost:${port}`);
});