import controller from "../Controller/controller.js";
import express from "express"
const router = express.Router();

router.get("/", controller.getData);
router.post("/", controller.createData);



export default router;