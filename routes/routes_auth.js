import express from 'express'
import controllersAuth from '../controllers/controllers_auth.js'

const router = express.Router()

router.post('/register', controllersAuth.register)
router.post('/login', controllersAuth.login)

export default router