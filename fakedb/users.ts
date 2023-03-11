/** DEFINIMOS LOS TYPES */

export type User = {
    id:number
    name:string
    email:string
    password:string
}

export type Users=User[]

export type Role = { 
    id:number | string,
    name:string
}
export type Roles = Role[]

export type UserRelationData = {
    id:number 
    roleid:number
    userid:number
}
export type UserRolesRelation = UserRelationData[]
/** DEFINIMOS LOS DATOS POR DEFECTO */
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

export const users:Users = [
    {
        id:1,
        name:"erick",
        email:"erickoficial69@gmail.com",
        password:"98861bc99367086e9ea8625600902cfe284c860525ffba427ae2f1678592824b"
    },
    {
        id:2,
        name:"tenant1",
        email:"tenant1@gmail.com",
        password:"98861bc99367086e9ea8625600902cfe284c860525ffba427ae2f1678592824b"
    },
    {
        id:3,
        name:"tenant 2",
        email:"tenant2@gmail.com",
        password:"98861bc99367086e9ea8625600902cfe284c860525ffba427ae2f1678592824b"
    },
    {
        id:4,
        name:"tenant 3",
        email:"tenant3@gmail.com",
        password:"98861bc99367086e9ea8625600902cfe284c860525ffba427ae2f1678592824b"
    }
]


export const relation_user_roles:UserRolesRelation = [
    {
        id:1,
        roleid:1,
        userid:1
    },
    {
        id:2,
        roleid:2,
        userid:2
    },
    {
        id:3,
        roleid:2,
        userid:3
    },
    {
        id:4,
        roleid:2,
        userid:4
    }
]
