import { createContext } from "react";
import { User } from "../fakedb/users";
import { ErpType } from "../types/erp-types";

export type ErpContextType = {
    erpState:ErpType
    login: ({email,password}:any) => void
    logout: () => void
}

export const ErpContext = createContext<ErpContextType>({} as ErpContextType)

type Action = {type:'loginUser',payload:User} | {type:'logoutUser',payload:null}

export const erpReducer = (state:ErpType,action:Action):ErpType =>{
    const {type, payload} = action
    switch (type) {
        case "loginUser":
            return {
                ...state,
                user:payload
            }
            
        default:
           return state
    }

}