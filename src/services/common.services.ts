export const getUserInfo = ()=>{

};

export const getAuthToken = ()=>{
  return localStorage.getItem('token')??"";
}