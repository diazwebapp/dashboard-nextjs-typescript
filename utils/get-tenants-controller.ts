import { Users } from "../fakedb/users"

export default async ():Promise<Users>=>{
    const req = await fetch("api/get-tenants")
    const resp = await req.json()
    return resp
}