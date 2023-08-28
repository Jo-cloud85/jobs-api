import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import Errors from '../errors/index.js'

const auth = async (req, res, next) => {
    //check header
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')) { //rmb the space is very important
        throw new Errors.UnauthenticatedError ('Authentication invalid')
    }

    const token = authHeader.split(' ')[1]

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        //attach the user to the job routes
        
        req.user = {userId:payload.userId, name: payload.name} //name is actually optional
        next()
    } catch (error) {
        throw new Errors.UnauthenticatedError ('Authentication invalid')
    }
}


export default auth