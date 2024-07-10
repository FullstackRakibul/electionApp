import axios from "axios";
import { 
  Navigate 
} from "react-router-dom";

const ConfigureAxios = () => {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;
    //axios.defaults.baseURL = "http://202.22.203.92:3100/tms/api/v1";
    //axios.defaults.baseURL = "https://tenderapi.hisanmastery.com/tms/api/v1";
    //axios.defaults.baseURL = "http://192.168.61.40:3100/tms/api/v1";

    let token = localStorage.getItem("token");

    if(token){
        setAuthToken(token);
    }else{
        localStorage.clear();
        return <Navigate to="/" replace />
    }
};

export const getCookie=(cname:any)=>{
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


export const setAuthToken = (token:string) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(token);
  } else {
    axios.defaults.headers.common["Authorization"] = "";
  }
};

export default ConfigureAxios;
