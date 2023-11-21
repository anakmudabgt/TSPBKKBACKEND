import express from "express";
import {
    getListData,
    getListDataById,
    createListData,
    updateListData,
    deleteListData,
} from "../controller/UserController.js";

const router = express.Router();

router.get('/List-Artikel', getListData);
router.get('/List-Artikel/:id', getListDataById);
router.post('/List-Artikel', createListData);
router.patch('/List-Artikel/:id', updateListData);
router.delete('/List-Artikel/:id', deleteListData);

export default router;