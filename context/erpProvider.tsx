import { useRouter } from "next/router"
import { ReactNode, useEffect, useReducer } from "react"
import { ErpType } from "../types/erp-types"
import { ErpContext, erpReducer } from "./erp"


interface ClickableProps {
    children: ReactNode
  }

const initialErp:ErpType={
    user:null
}

export const ErpProvider = (props:ClickableProps)=>{
    const {push} = useRouter()
    const [erpState,dispatch] = useReducer(erpReducer,initialErp)
    useEffect(()=>{
        if(window){
            let user = localStorage.getItem("userdata")
            if(user != null){
               dispatch({type:"loginUser",payload:JSON.parse(user)})
            }
        }
    },[])
    const login = async({email,password}:any) =>{
       
        let req = await fetch("/api/login",{
				method:"post",
				body:JSON.stringify({email,password}),
				headers:{
					"Content-Type":"application/json"
				}
			})
			if(req.status==200){
                const res = await req.json()
				dispatch({type:"loginUser",payload:res})
                localStorage.setItem("userdata",JSON.stringify(res))
                push("/")
			}else{
				alert("verifique sus credenciales")
			}
    }

    async function logout(){
        const req =  await fetch("/api/logout")
        if(req.status == 200){
         push("/")
        }       
    }

    return(
        <ErpContext.Provider value={{
            erpState,
            login,
            logout
        }}>
            {props.children}
        </ErpContext.Provider>
    )
}