import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactManager from "@/views/ContactManager";
import AddContact from "@/views/AddContact";
import EditContact from "@/views/EditContact";
import ViewContact from "@/views/ViewContact";
import PageNotFound from "@/views/PageNotFound";


const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/contacts",
    component: HomeView,
  },
  {
    path: "/contacts",
    name: "Contact Manager",
    component: ContactManager,
  },
  {
    path: "/contacts/add",
    name: "Add Contact",
    component: AddContact,
  },
  {
    path: "/contact/edit/:contactId",
    name: "Edit Contact",
    component: EditContact,
  },
  {
    path: "/contact/view/:contactId",
    name: "View Contact",
    component: ViewContact,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
