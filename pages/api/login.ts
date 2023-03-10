import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import { users } from '../../fakedb/users'
import { setCookie } from '../../utils/cookies'
import { hash } from '../../utils/hashing'

const restLogin = (req: NextApiRequest, res: NextApiResponse) => {
    const {email,password} = req.body
    const user = users.find((u) => u.email == email)
    if(user !== undefined){
        
        if(user.password === hash(password)){
            let expiration:number =  + 2592000 * 1000
            const stringValue = jwt.sign({
                exp: expiration,
                email,
                password
              },'secret')
    
            setCookie(res, 'session', stringValue, { path: '/', maxAge: expiration })
            
            res.statusCode = 200
            return res.json({status:"loged"})
        }
    }
    
    res.statusCode = 404
    return res.json({status:"no loged"})
}

export default restLogin