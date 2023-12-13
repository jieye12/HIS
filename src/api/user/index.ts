import request from '../../utils/request'
//用户相关的请求地址
// import { loginFormData, loginResponseData, userInfoResponseData } from './type'
enum API {
    LOGIN_URL = "http://192.168.58.59:9091/user-service/userInfo/login",
    REGISTER_URL = "http://192.168.58.59:9091/user-service/userInfo/register",
    USERINFO_URL = "http://192.168.58.59:9091/admin/acl/index/info",
    LOGOUT_URL = "http://192.168.58.59:9091/admin/acl/index/logout",
    MYBILL_URL = "http://192.168.58.59:9091/user-service/account/getAccountInfo",
    GETPERSONINFO_URL = "http://192.168.58.59:9091/user-service/userInfo/getUserInfoById",
    UPDATEPERSONINFO_URL = "http://192.168.58.59:9091/user-service/userInfo/updateUserInfoById",
    MyHOSPTICAL_URL = "http://192.168.58.59:9091/user-service/hospitalized/getHospitalizedInfo"
}
export const reqLogin = (data: any) => request.post<any, any>(API.LOGIN_URL, data)
// export const reqUserInfo = () => request.get<any, userInfoResponseData>(API.USERINFO_URL)
export const reqRegister = (data: any) => request.post<any, any>(API.REGISTER_URL, data)
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)
export const reqMyBill = (userId: any) => request.get<any, any>(API.MYBILL_URL + `?userId=${userId}`)
export const reqGetPersonInfo = (userId: any) => request.get<any, any>(API.GETPERSONINFO_URL + `?id=${userId}`)
export const reqUpdatePersonInfo = (data: any) => request.post<any, any>(API.UPDATEPERSONINFO_URL, data)
export const reqMyHosptical = (userId: any) => request.get<any, any>(API.MyHOSPTICAL_URL + `?userId=${userId}`)