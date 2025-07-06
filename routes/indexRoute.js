import express from "express";
import { indexPage,contactPage,aboutPage,galleryPage,loginPage,signUpPage } from "../controller/indexController.js";
import {paintingSave,getPaintings,potterySave,getPotteryItem,getPaintingById}  from "../controller/galleryController.js";

const router = express.Router();

router.get("/",indexPage);
router.get("/contact",contactPage);
router.get("/about",aboutPage);
router.get("/gallery" , galleryPage);
router.get("/login",loginPage);
router.get("/signup",signUpPage);
router.get("/painting/:paintingId" , getPaintingById);
router.post("/:paintingId" , getPaintingById);
router.get("/gallery/painting" , getPaintings);
router.post("/paintings", paintingSave);
router.get("/gallery/pottery" ,getPotteryItem);
router.post("/pottery" , potterySave);


export default router;