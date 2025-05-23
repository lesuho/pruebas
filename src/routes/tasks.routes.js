import {Router} from 'express'
import {authRequired} from '../middlewares/validateToken.js'
import {getTasks, getTask, createTask, updateTask, deleteTask} from '../controllers/tasks.controller.js'

const router = Router()

router.get('/tasks', authRequired, getTasks)

router.get('/tasks/:id', authRequired, getTask)

router.post('/tasks', authRequired, createTask)

router.delete('/tasks/:id', authRequired, updateTask)

router.put('/tasks/:id', authRequired, deleteTask)

export default router