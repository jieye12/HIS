import request from '../../utils/request'
//用户相关的请求地址
// import { loginFormData, loginResponseData, userInfoResponseData } from './type'
enum API {
    LOGIN_URL = "/user-service/userInfo/login",
    GETPromotionalAreaInformation_URL = "http://192.168.58.59:9092/SeekMedicalAdvice-Service/guideController/getPromotionalAreaInformation",
}
export const reqLogin = (data: any) => request.post<any, any>(API.LOGIN_URL, data)
export const reqgetPromotionalAreaInformation = () => request.get<any, any>(API.GETPromotionalAreaInformation_URL)
