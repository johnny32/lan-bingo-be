import express from "express";
import PingController from "../controllers/ping";
import PostRouter from './posts';

const router = express.Router();

router.get("/ping", async (_req, res) => {
    const controller = new PingController();
    const response = await controller.getMessage();
    return res.send(response);
});

router.use('/posts', PostRouter);

export default router;
