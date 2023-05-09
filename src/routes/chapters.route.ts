import express from "express";
import ChaptersController from "../controllers/chapters.controller";

const chaptersRouter = express.Router();

chaptersRouter.get("/completed/:id", ChaptersController.GetCompleted);

export default chaptersRouter;
