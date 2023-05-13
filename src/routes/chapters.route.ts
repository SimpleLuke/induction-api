import express from "express";
import ChaptersController from "../controllers/chapters.controller";

const chaptersRouter = express.Router();

chaptersRouter.get("/completed/:user_id", ChaptersController.GetCompleted);
chaptersRouter.patch("/completed", ChaptersController.CompletedChapter);
chaptersRouter.patch(
  "/undo-completed",
  ChaptersController.UndoCompletedChapter
);

export default chaptersRouter;
