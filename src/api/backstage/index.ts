import request from '../../utils/request'
//用户相关的请求地址
// import { loginFormData, loginResponseData, userInfoResponseData } from './type'
enum API {
    LOGIN_URL = "/user-service/userInfo/login",
    GETDepartmentService_URL = "http://192.168.58.59:9097/Department-Service/department/getDepartmentService",
    GETAppointment_URL = "http://192.168.58.59:9095/Medical-Service/registration/getAppointment",
    GETDoctor_URL = "http://192.168.58.59:9093/People-Service/doctor/getDoctorInfo",
    SearchDoctor_URL = "http://192.168.58.59:9093/People-Service/doctor/getDoctorDetailed",
    AddDoctor_URL = "http://192.168.58.59:9093/People-Service/doctor/addDoctor",
    GETPatient_URL = "http://192.168.58.59:9093/People-Service/patient/getDoctorInfo",
    SearchPatient_URL = "http://192.168.58.59:9093/People-Service/patient/getDoctorDetailed",
    AddPatient_URL = "http://192.168.58.59:9093/People-Service/patient/addDoctor",
    Medical_URL = "http://192.168.58.59:9095/Medical-Service/SalesManagement/getMedicineSales"
}
export const reqLogin = (data: any) => request.post<any, any>(API.LOGIN_URL, data)
export const reqgetDepartmentService = () => request.get<any, any>(API.GETDepartmentService_URL)
export const reqGetAppointment = () => request.get<any, any>(API.GETAppointment_URL)
export const reqGetDoctor = () => request.get<any, any>(API.GETDoctor_URL)
export const reqSearchDoctor = (name: any) => request.get<any, any>(API.SearchDoctor_URL + `?name=${name}`)
export const reqAddDoctor = (data: any) => request.post<any, any>(API.AddDoctor_URL, data)
export const reqGetPatient = () => request.get<any, any>(API.GETPatient_URL)
export const reqSearchPatient = (name: any) => request.get<any, any>(API.SearchPatient_URL + `?name=${name}`)
export const reqAddPatient = (data: any) => request.post<any, any>(API.AddPatient_URL, data)
export const reqMedical = () => request.get<any, any>(API.Medical_URL)

