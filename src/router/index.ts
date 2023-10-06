import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login/login.vue'
import Register from '../views/Register/register.vue'
import Main from '../views/Main/index.vue'
import Nav from '../views/Nav/index.vue'
import Advisory from '../views/MedicalServices/Advisory/index.vue'
import Reserve from '../views/MedicalServices/Reserve/index.vue'
import Scheduling from '../views/MedicalServices/Reserve/Scheduling/index.vue'
import Clinic from '../views/MedicalServices/Clinic/index.vue'
import ClinicDetails from '../views/MedicalServices/Clinic/Details/index.vue'
import Pharmacy from '../views/MedicalServices/Pharmacy/index.vue'
import DrugDetails from '../views/MedicalServices/Pharmacy/Drugs/index.vue'
import Hospitalized from '../views/MedicalServices/Hospitalized/index.vue'
import Payment from '../views/MedicalServices/Payment/index.vue'
import DeparmentIntroduction from '../views/ConvenienceServices/DepartmentIntroduction/index.vue'
import Gastroenterology from '../views/ConvenienceServices/DepartmentIntroduction/Department/gastroenterology.vue'
import NucleicAcidAmplificationTesting from '../views/ConvenienceServices/NucleicAcidAmplificationTesting/index.vue'
import HealthEducation from '../views/ConvenienceServices/HealthEducation/index.vue'
import Article from '../views/ConvenienceServices/HealthEducation/Articles/index.vue'
import MedicalGuide from '../views/ConvenienceServices/MedicalGuide/index.vue'
import MedicalFeedback from '../views/ConvenienceServices/MedicalFeedback/index.vue'
import HealthCheckup from '../views/ConvenienceServices/HealthCheckup/index.vue'
import CheckUpReserve from '../views/ConvenienceServices/HealthCheckup/All/reserve.vue'
import CheckUpQ from '../views/ConvenienceServices/HealthCheckup/All/questionnaire.vue'
import CheckUpI from '../views/ConvenienceServices/HealthCheckup/All/introduce.vue'
import CheckUpQuery from '../views/ConvenienceServices/HealthCheckup/All/inquire.vue'
import MyHospitalization from '../views/PersonalCenter/MyHospitalization/index.vue'
import MyBill from '../views/PersonalCenter/MyBill/index.vue'
import PersonalInformation from '../views/PersonalCenter/PersonalInformation/index.vue'
import Backstage from '../views/Backstage/index.vue'
import Home from '../views/Backstage/Home/index.vue'
import DepartmentDetails from '../views/Backstage/DepartmentManagement/DepartmentDetails/index.vue'
import ShiftInformation from '../views/Backstage/DepartmentManagement/ShiftInformation/index.vue'
import AppointmentManagement from '../views/Backstage/DepartmentManagement/AppointmantManagement/index.vue'
import DepartmentStatistics from '../views/Backstage/DepartmentManagement/DepartmentStatistics/index.vue'
import PatientManagement from '../views/Backstage/PersonnelManagement/PatientManagement/index.vue'
import DoctorManagement from '../views/Backstage/PersonnelManagement/DoctorManagement/index.vue'
import AuthorityManagement from '../views/Backstage/PersonnelManagement/AuthorityManagement/index.vue'
import PurchaseManagement from '../views/Backstage/DrugManagement/PurchaseManagement/index.vue'
import InventoryManagement from '../views/Backstage/DrugManagement/InventoryManagement/index.vue'
import SalesManagement from '../views/Backstage/DrugManagement/SalesManagement/index.vue'
import SalesStatistics from '../views/Backstage/DrugManagement/SalesStatistics/index.vue'
import FinancialManagement from '../views/Backstage/FinancialManagement/index.vue'
import NotFound404 from '../views/Backstage/SystemManagement/404/index.vue'
import NotFound403 from '../views/Backstage/SystemManagement/403/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    }, {
      path: "/main",
      component: Main,
      children: [{
        path: "",
        component: Nav
      },
      {
        path: "/advisory",
        component: Advisory
      }, {
        path: "/reserve",
        component: Reserve
      }, {
        path: "/scheduling",
        component: Scheduling
      }, {
        path: "/clinic",
        component: Clinic
      }, {
        path: "/clinic_details",
        component: ClinicDetails
      }, {
        path: "/pharmacy",
        component: Pharmacy
      }, {
        path: "/drug_details",
        component: DrugDetails
      }, {
        path: "/hospitalized",
        component: Hospitalized
      }, {
        path: "/payment",
        component: Payment
      }, {
        path: "/department_introduction",
        component: DeparmentIntroduction
      }, {
        path: "/gastroenterology",
        component: Gastroenterology
      }, {
        path: "/nucleic_acid_amplification_testing",
        component: NucleicAcidAmplificationTesting,
      }, {
        path: "/health_education",
        component: HealthEducation,
      },
      {
        path: "/article",
        component: Article
      },
      {
        path: "/medical_guide",
        component: MedicalGuide,
      }, {
        path: "/medical_feedback",
        component: MedicalFeedback,
      }, {
        path: "/health_check_up",
        component: HealthCheckup
      },
      {
        path: "/check_up_reserve",
        component: CheckUpReserve
      },
      {
        path: "/check_up_q",
        component: CheckUpQ
      }, {
        path: "/check_up_i",
        component: CheckUpI
      }, {
        path: "/check_up_query",
        component: CheckUpQuery
      },
      {
        path: "/my_hospitalization",
        component: MyHospitalization,
      }, {
        path: "/my_bill",
        component: MyBill
      }, {
        path: "/personal_information",
        component: PersonalInformation
      }]
    }, {
      path: "/backstage",
      component: Backstage,
      redirect: "/home",
      children: [{
        path: "/home",
        component: Home
      },
      {
        path: "/department_details",
        component: DepartmentDetails
      },
      {
        path: "/shift_information",
        component: ShiftInformation
      }, {
        path: "/appointment_management",
        component: AppointmentManagement,
      }, {
        path: "/department_statistics",
        component: DepartmentStatistics
      }, {
        path: "/patient_management",
        component: PatientManagement
      }, {
        path: "/doctor_management",
        component: DoctorManagement
      }, {
        path: "/authority_management",
        component: AuthorityManagement
      },
      {
        path: "/purchase_management",
        component: PurchaseManagement
      },
      {
        path: "/inventory_management",
        component: InventoryManagement
      },
      {
        path: "/sales_management",
        component: SalesManagement
      },
      {
        path: "/sales_statistics",
        component: SalesStatistics
      },
      {
        path: "/404",
        component: NotFound404
      },
      {
        path: "/403",
        component: NotFound403
      }
      ]
    },
    {
      path: "/financial_management",
      component: FinancialManagement
    }
  ]
})

export default router
