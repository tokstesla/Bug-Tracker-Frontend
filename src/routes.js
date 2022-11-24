import Index from "views/Index";
import Administration from "views/Administration";
import Tickets from "views/Tickets";
import Project from "views/Project";

const routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "general",
    root: "/general",
    display: true,
  },
  {
    path: "/tickets",
    name: "Tickets",
    icon: "ni ni-single-copy-04 text-teal",
    component: Tickets,
    layout: "general",
    root: "/general",
    display: true,
  },
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "admin",
    root: "/admin",
    display: true,
  },
  {
    path: "/tickets",
    name: "Tickets",
    icon: "ni ni-single-copy-04 text-teal",
    component: Tickets,
    layout: "admin",
    root: "/admin",
    display: true,
  },
  {
    path: "/administration",
    name: "Administration",
    icon: "ni ni-collection text-red",
    component: Administration,
    layout: "admin",
    root: "/admin",
    display: true,
  },
  {
    path: "/project/:id",
    name: "Project",
    component: Project,
    layout: "general",
    root: "/general",
    display: false,
  },
  {
    path: "/project/:id",
    name: "Project",
    component: Project,
    layout: "admin",
    root: "/admin",
    display: false,
  },
];
export default routes;
