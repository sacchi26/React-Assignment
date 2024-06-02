import { createContext, useState } from "react";

export const AuthContext = createContext()

export function AuthContextProvider({children}){
    const [auth, setAuth] = useState({
        isLogged:false,
        token:null,
    })
    const Login=(token)=>{
        setAuth({
            isLogged : true,
            token : token
        })
    }

    const LogOut= () => {
        setAuth({
          isLogged: false,
          token: null,
        });
      };

    return(
        <AuthContext.Provider value={{auth,Login,LogOut}}>
            {children}
        </AuthContext.Provider>
    )

}
    
