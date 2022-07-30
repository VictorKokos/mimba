import { Navigate } from "react-router-dom"

export let NavHoc = (Comp) =>
{
    
    let   NavComp = (props) => {
       
        if(props.isAuth)
        {
        return(
            
            <Comp {...props}/>
           
        )
        }
        else
        {
            return(
                
                <Navigate to="/" />
            )
        }
    }
       
return NavComp

}