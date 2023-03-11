import { NextApiRequest, NextApiResponse } from "next"
import { users, Users, relation_user_roles } from "../../fakedb/users"

const restGetTenants = async(_:NextApiRequest,res:NextApiResponse)=>{
    const total = relation_user_roles.filter((r)=>r.roleid == 2)
    const usersResp:Users = []
    if(total){
        for(const t of total){
            const tmpUser = users.find((u) => u.id == t.userid)
            if(tmpUser){
                tmpUser.password = ''
                usersResp.push(tmpUser)
            }
        }
        
    }
    if(usersResp.length == 0){        
        res.statusCode = 404
    }
    res.statusCode = 200
    return res.json(usersResp)
}
export default restGetTenants