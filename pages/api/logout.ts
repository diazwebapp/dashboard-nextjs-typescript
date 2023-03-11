import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import {serialize} from 'cookie'

const restLogout = (req: NextApiRequest, res: NextApiResponse) => {
    const {session} = req.cookies
    if(session){
        try {
            jwt.verify(session,"secret")
            const serialized = serialize('session','',{
                maxAge:0,
                path:"/"
            })
            res.setHeader("Set-Cookie",serialized)
            return res.status(200).json("logout")
        } catch (error) {
            return res.status(401).json("")
        }
    }
}

export default restLogout