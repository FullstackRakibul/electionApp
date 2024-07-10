import axios, {AxiosInstance} from "axios";
import {getAuthToken} from "../../BaseServices/common.services";


const baseHttp = (baseUrl:string, headers:any = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }):AxiosInstance=>{

    const axiosInstance = axios.create({
        baseURL:baseUrl,
        timeout:5000,
    });
    const authToken:string = getAuthToken();
    if(authToken!==""){
        axiosInstance.defaults.headers["Authorization"] = authToken;
    }

    for(let header in headers){
        axiosInstance.defaults.headers[header] = headers[header];
    }

    return axiosInstance;
}

export default baseHttp;