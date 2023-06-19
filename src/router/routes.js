
import store from "../store/index";

function isAuth() {
  const token = localStorage.getItem("token");
  return Boolean(token);
}

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    beforeEach: (to, from, next) => {
      console.log('from to', from, to);
      // if ((to.name === "editor" || to.name === "courses") && !isAuth()) {

      //   next("/login");
      // }
      next()
     
    },
    children: [
      { path: "",
        name: 'world1t',
       component: () => import("pages/World1t.vue") },
      {
        path: "/Courses",
        name: "courses",
        component: () => import("components/Courses.vue"),
      },
      {
        path: "/Editor",
        name: "editor",
        component: () => import("components/Editor.vue"),
      },
      {
        path: "/Play",
        name: "play",
        component: () => import("components/Play.vue"),
      },
    ],
  },
  {
    path: "/modules",
    component: () => import("layouts/AuthorizationLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ModulesPage.vue") },
      {
        path: "/SignUp",
        name: "signup",
        component: () => import("components/SignUpPage.vue"),
      },
      {
        path: "/Login",
        name: "login",
        component: () => import("components/LoginPage.vue"),
      },
      {
        path: "/Profile",
        name: "profile",
        component: () => import("components/UserProfile.vue"),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];
// router.beforeEach(async (to, from) => {
//   if (
//     // make sure the user is authenticated
//     !store.state.isAuth &&
//     // ❗️ Avoid an infinite redirect
//     to.name !== 'Login'
//   ) {
//     // redirect the user to the login page
//     return { name: 'Login' }
//   }
// })


export default routes;
