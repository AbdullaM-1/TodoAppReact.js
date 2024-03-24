import React from "react";
import usercontext from "./contexts/Todocontext";

const usercontextprovider = ({childern}) =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user, setUser] = React.useState(null);
    return(
        <usercontext.Provider value={{user, setUser}}>
        {childern}
        </usercontext.Provider>
    )
}

export default usercontextprovider;