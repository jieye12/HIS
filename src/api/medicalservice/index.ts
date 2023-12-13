import request from '../../utils/request'
enum API {
    GETPromotionalAreaInformation_URL = "http://192.168.58.59:9095/SeekMedicalAdvice-Service/guideController/getPromotionalAreaInformation",
    GETShop_URL = "http://192.168.58.59:9095/Medical-Service/pharmacy/getMedicineGeneralInformation",
    GETShopDetail_URL = "http://192.168.58.59:9095/Medical-Service/pharmacy/getMedicineDetails",
    GETResult_URL = "http://192.168.58.59:9095/Medical-Service/registration/getRegistrationDiagnosis",
    GETAppoint_URL = "http://192.168.58.59:9095/Medical-Service/registration/AppointmentRegistration",
    GETHospitalApplication = "http://192.168.58.59:9091/user-service/hospitalized/HospitalApplication",
    GETPayment_URL = "http://192.168.58.59:9095/Medical-Service/pharmacy/payMedicine",
}
export const reqgetPromotionalAreaInformation = () => request.get<any, any>(API.GETPromotionalAreaInformation_URL)
export const reqGetShop = (name: string) => request.get<any, any>(API.GETShop_URL + `?name=${name}`)
export const reqGetShopDetail = (id: any) => request.get<any, any>(API.GETShopDetail_URL + `?id=${id}`)
export const reqGetResult = (userId: any) => request.get<any, any>(API.GETResult_URL + `?userId=${userId}`)
export const reqGetAppoint = (data: any) => request.post<any, any>(API.GETAppoint_URL, data)
export const reqGetHospitalApplication = (data: any) => request.post<any, any>(API.GETHospitalApplication, data)
export const reqGetPayment = (data: any) => request.post<any, any>(API.GETPayment_URL, data)

