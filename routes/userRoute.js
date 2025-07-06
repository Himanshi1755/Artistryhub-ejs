import express from "express";
import { login , signUp ,checkForEmail ,logOut} from "../controller/userController.js";

const router = express.Router();

router.post("/login",login);
router.get("/check-for-email-id/:emailId",checkForEmail);
router.post("/signup",signUp);
router.get("/logout" ,logOut);


export default router;