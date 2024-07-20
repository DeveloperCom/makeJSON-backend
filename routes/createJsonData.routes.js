import { Router } from "express";
import createJsonData from "../controllers/createJsonData.js";
const router=Router()
router.route('/').post(createJsonData)
export default router