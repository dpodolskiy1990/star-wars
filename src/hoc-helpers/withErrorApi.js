import { useState } from "react";
import ErrorMessage from "../containers/ErrorMessage/ErrorMessage";
export const widthErrorApi = (Viev) =>{
    return props => {
        const [errorApi, setErrorApi] = useState(false);
        return(
            <>
                {errorApi
                ?<ErrorMessage/>
                :(
                    <Viev setErrorApi = {setErrorApi}
                    {...props}
                    />

                ) 
                }
            </>
        )
    }
}