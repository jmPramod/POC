import axios from "axios"

export const fetchproduct =async(params:any)=>{
    const data=await axios.get(`https://next-poc-1.netlify.app/api/events/${params.Center_Stone}/${params.Metal_Type}/${params.Side_Stone}`

    )
return data 
}