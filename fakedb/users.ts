

export type User ={
    id:number | string,
    name:string,
    email:string,
    password:string
}
export type Users=User[]
export type Role = {
    id:number | string,
    name:string
}
export type Roles = Role[]

export const users:Users = [
    {
        id:1,
        name:"erick",
        email:"erickoficial69@gmail.com",
        password:"98861bc99367086e9ea8625600902cfe284c860525ffba427ae2f1678592824b"
    }
]

export const roles:Roles = [
    {
        id:1,
        name:"admin"
    },
    {
        id:2,
        name:"tenant"
    }
]