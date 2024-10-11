 import { instance } from "../util/instance"

 export const ownercheckApi = async(data) => {
    console.log(data);
    let cafeData = {
        isSuccess:false,
        
    
    }
    
    try{
        const response = await instance.post("/cafe/add" , cafeData);
        console.log(response);
        cafeData ={
            isSuccess:true,
            ok:response.data
        }
        return cafeData;
    }catch(error){
        console.error(error);
        cafeData ={
            isSuccess:false
        }
    }
    return cafeData;
}