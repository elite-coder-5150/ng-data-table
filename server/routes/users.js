const express = require('express');
const router = express.Router();
import { validateUser } from '../middleware/validation';
import { 
    getAllUsers, 
    getSingleUser, 
    registerUser,
    deleteUser,
    logoutUser,
} from '../controller/index';
router.get('/users', getAllUsers);
router.get('/users/:id', getSingleUser);
router.post('/user/register', validateUser, registerUser);
router.delete('/user/:id', deleteUser);
router.post('/user/logout/:id', logoutUser);
module.exports = router;