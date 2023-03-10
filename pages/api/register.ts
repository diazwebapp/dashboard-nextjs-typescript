import { NextApiRequest, NextApiResponse } from 'next'
import { users, User } from '../../fakedb/users' //estos usuarios deben venir de una base de datos
import { hash } from '../../utils/hashing'


const restLogin = (req: NextApiRequest, res: NextApiResponse) => {
    const {email,password} = req.body
    const user = users.find((u) => u.email === email)
    const respdata = {
      status : "ok"
    }
    
    if(user === undefined){
        const newuser:User = {
          email,
          password: hash(password),
          name : "test",
          id: users.length + 1
        }
        users.push(newuser)
       
        res.statusCode = 200
        respdata.status = "ok"
        return res.json(respdata)
    }
    res.statusCode = 500
    return res.json(respdata)
}

export default restLogin


