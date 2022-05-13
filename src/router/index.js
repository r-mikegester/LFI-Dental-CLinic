import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import redirectToAdminLoginIfNotLoggedInUser from "../composables/route-validation/redirectToAdminLoginIfNotLoggedInUser";
import redirectToAdminLoginIfNotAdminUser from "../composables/route-validation/redirectToAdminLoginIfNotAdminUser";
import redirectToAdminHomePageIfAdminUser from "../composables/route-validation/redirectToAdminHomePageIfAdminUser";
import redirectToAppointmentsPageIfAppointmentDetailsIsNull from "../composables/route-validation/redirectToAppointmentsPageIfAppointmentDetailsIsNull";
import redirectToPatientLoginIfNotPatientUser from "../composables/route-validation/redirectToPatientLoginIfNotPatientUser";
import redirectToPatientLoginIfNotLoggedInUser from "../composables/route-validation/redirectToPatientLoginIfNotLoggedInUser";
import redirectToPatientAppointmentHistoryPageIfPatientUser from "../composables/route-validation/redirectToPatientAppointmentHistoryPageIfPatientUser";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* Static pages */
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "About Page",
      component: () => import("../views/AboutPage.vue"),
    },
    {
      path: "/appointments",
      name: "Appointments Page",
      component: () => import("../views/AppointmentsPage.vue"),
      redirect: {
        name: "Appointments Page Choose Timeslot",
      },
      children: [
        {
          path: "",
          name: "Appointments Page Choose Timeslot",
          component: () => import("../components/booking/ChooseTimeslot.vue"),
        },
        {
          path: "login",
          name: "Appointments Page Login",
          component: () => import("../components/booking/LoginAccount.vue"),
          beforeEnter: [redirectToAppointmentsPageIfAppointmentDetailsIsNull],
        },
        {
          path: "create-account",
          name: "Appointments Page Create Account",
          component: () => import("../components/booking/CreateAccount.vue"),
          beforeEnter: [redirectToAppointmentsPageIfAppointmentDetailsIsNull],
        },
        {
          path: "medical-chart",
          name: "Appointments Page Medical Chart",
          component: () =>
            import("../components/booking/FIllInMedicalChart.vue"),
          beforeEnter: [redirectToAppointmentsPageIfAppointmentDetailsIsNull],
        },
      ],
    },

    {
      path: "/contact",
      name: "Contact Page",
      component: () => import("../views/ContactPage.vue"),
    },
    /* Static pages: Dental Services */
    {
      path: "/services/cosmetic-surgery",
      name: "Cosmetic Surgery Page",
      component: () =>
        import("../views/patient/Dental Services/CosmeticSurgeryPage.vue"),
    },
    {
      path: "/services/general-dentistry",
      name: "General Dentistry Page",
      component: () =>
        import("../views/patient/Dental Services/GeneralDentistryPage.vue"),
    },
    {
      path: "/services/oral-surgery",
      name: "Oral Surgery Page",
      component: () =>
        import("../views/patient/Dental Services/OralSurgeryPage.vue"),
    },
    {
      path: "/services/orthodontics",
      name: "Orthodontics Page",
      component: () =>
        import("../views/patient/Dental Services/OrthodonticsPage.vue"),
    },
    {
      path: "/services/pediatric-dentistry",
      name: "Pediatric Dentistry Page",
      component: () =>
        import("../views/patient/Dental Services/PediatricDentistryPage.vue"),
    },
    {
      path: "/services/prosthodontics",
      name: "Prosthodontics Page",
      component: () =>
        import("../views/patient/Dental Services/ProsthodonticsPage.vue"),
    },
    {
      path: "/faqs",
      name: "Frequently Asked Questions",
      component: () =>
        import("../views/patient/FrequentlyAskedQuestionsPage.vue"),
    },
    {
      path: "/myhistory",
      name: "My History Page",
      component: () => import("../views/patient/MyHistoryPage.vue"),
    },
    {
      path: "/accountsettings",
      name: "Account Settings Page",
      component: () => import("../views/patient/AccountSettings.vue"),
    },
    {
      path: "/404NotFound",
      name: "404 Not Found Page",
      component: () => import("../views/patient/404NotFound.vue"),
    },
    {
      path: "/DentalServices",
      name: "Dental Services Page",
      component: () => import("../views/patient/DentalServicesPage.vue"),
    },
    /* Admin-only pages */
    {
      path: "/admin",
      name: "Admin Home Page",
      component: () => import("../views/admin/HomePage.vue"),
      beforeEnter: [
        redirectToAdminLoginIfNotLoggedInUser,
        redirectToAdminLoginIfNotAdminUser,
      ],
    },
    {
      path: "/admin/login",
      name: "Admin Login Page",
      component: () => import("../views/admin/LoginPage.vue"),
      beforeEnter: [redirectToAdminHomePageIfAdminUser],
    },
    {
      path: "/admin/schedules",
      name: "Admin Schedules Page",
      component: () => import("../views/admin/SchedulesPage.vue"),
      beforeEnter: [
        redirectToAdminLoginIfNotLoggedInUser,
        redirectToAdminLoginIfNotAdminUser,
      ],
    },
    {
      path: "/admin/appointments",
      name: "Admin Appointments Page",
      component: () => import("../views/admin/AppointmentsPage.vue"),
      beforeEnter: [
        redirectToAdminLoginIfNotLoggedInUser,
        redirectToAdminLoginIfNotAdminUser,
      ],
    },
    {
      path: "/admin/patient-records",
      name: "Admin Patient Records Page",
      component: () =>
        import("../views/admin/patient-records/PatientRecordsPage.vue"),
      beforeEnter: [
        redirectToAdminLoginIfNotLoggedInUser,
        redirectToAdminLoginIfNotAdminUser,
      ],
    },
    {
      path: "/admin/notifications",
      name: "Admin Notifications Page",
      component: () => import("../views/admin/NotificationsPage.vue"),
      beforeEnter: [
        redirectToAdminLoginIfNotLoggedInUser,
        redirectToAdminLoginIfNotAdminUser,
      ],
    },
    {
      path: "/admin/patient-records/:uid/medical-chart",
      name: "Admin Medical Chart Page",
      component: () =>
        import("../views/admin/patient-records/MedicalChartPage.vue"),
      beforeEnter: [
        redirectToAdminLoginIfNotLoggedInUser,
        redirectToAdminLoginIfNotAdminUser,
      ],
    },
    {
      path: "/admin/patient-records/:uid/dental-chart",
      name: "Admin Dental Chart Page",
      component: () =>
        import("../views/admin/patient-records/DentalChartPage.vue"),
      beforeEnter: [
        redirectToAdminLoginIfNotLoggedInUser,
        redirectToAdminLoginIfNotAdminUser,
      ],
    },
    {
      path: "/admin/patient-records/:uid/treatments",
      name: "Admin Dental Treatments Page",
      component: () =>
        import("../views/admin/patient-records/DentalTreatmentsPage.vue"),
      beforeEnter: [
        redirectToAdminLoginIfNotLoggedInUser,
        redirectToAdminLoginIfNotAdminUser,
      ],
    },
    {
      path: "/admin/patient-records/:uid/procedures/:slotSeconds",
      name: "Admin Procedures Page",
      component: () =>
        import("../views/admin/patient-records/ProceduresPage.vue"),
      beforeEnter: [
        redirectToAdminLoginIfNotLoggedInUser,
        redirectToAdminLoginIfNotAdminUser,
      ],
    },
    {
      path: "/admin/messages",
      name: "Admin Messages Page",
      component: () => import("../views/admin/MessagesPage.vue"),
      beforeEnter: [
        redirectToAdminLoginIfNotLoggedInUser,
        redirectToAdminLoginIfNotAdminUser,
      ],
    },
    {
      path: "/admin/account-settings",
      name: "Admin Account Settings Page",
      component: () => import("../views/admin/AccountSettingsPage.vue"),
      beforeEnter: [
        redirectToAdminLoginIfNotLoggedInUser,
        redirectToAdminLoginIfNotAdminUser,
      ],
    },
    /* Patient-only pages */
    {
      path: "/patient",
      redirect: {
        name: "Patient Appointment History Page",
      },
    },
    {
      path: "/patient/history",
      name: "Patient Appointment History Page",
      component: () => import("../views/patient/MyHistoryPage.vue"),
      beforeEnter: [
        redirectToPatientLoginIfNotLoggedInUser,
        redirectToPatientLoginIfNotPatientUser,
      ],
    },
    {
      path: "/patient/procedure/:timeslot",
      name: "Patient Procedure Page",
      component: () => import("../views/patient/ProcedurePage.vue"),
      beforeEnter: [
        redirectToPatientLoginIfNotLoggedInUser,
        redirectToPatientLoginIfNotPatientUser,
      ],
    },
    {
      path: "/patient/medical-chart",
      name: "Patient Medical Chart Page",
      component: () => import("../views/patient/MedicalChartPage.vue"),
      beforeEnter: [
        redirectToPatientLoginIfNotLoggedInUser,
        redirectToPatientLoginIfNotPatientUser,
      ],
    },
    {
      path: "/patient/login",
      name: "Patient Login Page",
      component: () => import("../views/patient/LoginPage.vue"),
      beforeEnter: [redirectToPatientAppointmentHistoryPageIfPatientUser],
    },
  ],
});

export default router;
