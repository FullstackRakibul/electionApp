import baseHttp from "../utils/axios/base.http";
import {AxiosInstance} from "axios";

export const electionHttpJson = ():AxiosInstance=>{
    const baseUrl:string = import.meta.env.VITE_ELECTION_BASE_URL;
    const headers:any = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
    return baseHttp(baseUrl, headers,);
}

export const electionHttpFormData = ():AxiosInstance=>{
    const baseUrl:string = import.meta.env.VITE_ELECTION_BASE_URL;
    const headers:any = {
        "Content-Type": "application/form-data",
        "Accept": "application/form-data",
    }
    return baseHttp(baseUrl, headers);
}