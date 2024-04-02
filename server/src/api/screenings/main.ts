import express from "express";
const router = express.Router();

import getStatus from "./getStatus";
import enable from "./enable";
import create from "./create";
import get from "./get";
import begin from "./begin";

router.use("/getStatus", getStatus);
router.use("/enable", enable);
router.use("/create", create);
router.use("/get", get);
router.use("/begin", begin);

export default router;