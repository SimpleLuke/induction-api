import express from "express";
import ChaptersController from "../controllers/chapters.controller";

const chaptersRouter = express.Router();

chaptersRouter.get("/completed", ChaptersController.GetCompleted);

export default chaptersRouter;
