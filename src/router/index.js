import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import redirectToAdminLoginIfNotLoggedInUser from "../composables/route-validation/redirectToAdminLoginIfNotLoggedInUser";
import redirectToAdminLoginIfNotAdminUser from "../composables/route-validation/redirectToAdminLoginIfNotAdminUser";
import redirectToAdminHomePageIfAdminUser from "../composables/route-validation/redirectToAdminHomePageIfAdminUser";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* Static pages */
    {
      path: "/home",
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
    },

    {
      path: "/contact",
      name: "Contact Page",
      component: () => import("../views/ContactPage.vue"),
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
      path: "/admin/patient-records/:uid/procedures",
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
  ],
});

export default router;
