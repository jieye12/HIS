import request from '../../utils/request'
//用户相关的请求地址
// import { loginFormData, loginResponseData, userInfoResponseData } from './type'
enum API {
    Appointment_URL = "http://192.168.58.59:9096/HealthCheckUp-Service/physicalExamination/Appointment"
}
export const reqAppointment = (data: any) => request.post<any, any>(API.Appointment_URL, data)