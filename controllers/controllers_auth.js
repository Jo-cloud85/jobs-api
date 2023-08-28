import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'
import Errors from '../errors/index.js';

const register = async(req, res) => {
    const user = await User.create({...req.body })
    const token = user.createJWT()

    res.status(StatusCodes.CREATED).json({ user:{ name:user.name }, token })
}

const login = async(req, res) => {
    const {email, password} = req.body

    if (!email || !password) {
        throw new Errors.BadRequestError('Please provide email and password')
    }

    const user = await User.findOne({email})
    if (!user) {
        throw new Errors.UnauthenticatedError('Invalid Credentials')
    }
    
    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) {
        throw new Errors.UnauthenticatedError('Invalid Credentials')
    }

    // compare password
    const token = user.createJWT()
    res.status(StatusCodes.OK).json({user:{name:user.name}, token})
}


export default {register, login}