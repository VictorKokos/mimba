
let withLoginNavigate = (Component) =>
{

    let compWithLoginNavigate = () =>
    { 
        
        return(
           <Component />
        )

    }


   return {compWithLoginNavigate}
}

export default withLoginNavigate