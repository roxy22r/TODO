import { Router } from "express";
import {
   addToDo,
   deleteToDo,
   updateToDo,
   listAll
}  from '../controller/controller.js';
const router = Router();

router.get('/', listAll);
router.post('/add', addToDo);
router.post('/update', updateToDo);
router.post('/delete', deleteToDo);

export {router};
