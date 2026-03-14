import React from 'react'
import UserContext from './userContext'


// ^ children sir ek <dev> hai jisme humne apne sare components ko wrap kiya hai. Ab is dev ke andar jitne bhi components honge unko UserContext ka access mil jayega.

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <>
        <UserContext.Provider value = {{user, setUser}}>  
            {children}
        </UserContext.Provider>
        </>
    )
}


    export default UserContextProvider;