/*!

=========================================================
* Argon Dashboard PRO React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Alternative from "views/pages/dashboards/Alternative.js";
import Buttons from "views/pages/components/Buttons.js";
import Calendar from "views/pages/Calendar.js";
import Cards from "views/pages/components/Cards.js";
import Charts from "views/pages/Charts.js";
import Components from "views/pages/forms/Components.js";
import Dashboard from "views/pages/dashboards/Dashboard.js";
import Elements from "views/pages/forms/Elements.js";
import Google from "views/pages/maps/Google.js";
import Grid from "views/pages/components/Grid.js";
import Icons from "views/pages/components/Icons.js";
import Lock from "views/pages/examples/Lock.js";
import Login from "views/pages/examples/Login.js";
import Notifications from "views/pages/components/Notifications.js";
import Pricing from "views/pages/examples/Pricing.js";
import Profile from "views/pages/examples/Profile.js";
import ReactBSTables from "views/pages/tables/ReactBSTables.js";
import Register from "views/pages/examples/Register.js";
import RTLSupport from "views/pages/examples/RTLSupport.js";
import Sortable from "views/pages/tables/Sortable.js";
import Tables from "views/pages/tables/Tables.js";
import Timeline from "views/pages/examples/Timeline.js";
import Typography from "views/pages/components/Typography.js";
import Validation from "views/pages/forms/Validation.js";
import Vector from "views/pages/maps/Vector.js";
import Widgets from "views/pages/Widgets.js";

const routes = [
  {
    collapse: true,
    name: "Dashboards",
    icon: "ni ni-shop text-primary",
    state: "dashboardsCollapse",
    views: [
      {
        path: "/dashboard",
        name: "Dashboard",
        miniName: "D",
        component: <Alternative />,
        layout: "/admin",
      }
    ],
  },
  {
    collapse: true,
    name: "Projects",
    icon: "ni ni-shop text-primary",
    state: "projectsCollapse",
    views: [
      {
        path: "/add-project",
        name: "Add Project",
        miniName: "D",
        component: <Alternative />,
        layout: "/admin",
      },
      {
        path: "/active-project",
        name: "Active Projects",
        miniName: "D",
        component: <Alternative />,
        layout: "/admin",
      },
      {
        path: "/inactive-project",
        name: "In-Active Projects",
        miniName: "D",
        component: <Alternative />,
        layout: "/admin",
      },
      {
        path: "/unassigned-project",
        name: "Un-Assigned Projects",
        miniName: "D",
        component: <Alternative />,
        layout: "/admin",
      },
      {
        path: "/rejected-project",
        name: "Rejected Projects",
        miniName: "D",
        component: <Alternative />,
        layout: "/admin",
      }
    ],
  },
  {
    collapse: true,
    name: "Approvals",
    icon: "ni ni-shop text-primary",
    state: "approvalsCollapse",
    views: [
      {
        path: "/approval-pending-projects",
        name: "Pending Projects",
        miniName: "D",
        component: <Alternative />,
        layout: "/admin",
      },
      {
        path: "/approval-approved-projects",
        name: "Approved Projects",
        miniName: "D",
        component: <Alternative />,
        layout: "/admin",
      },
      {
        path: "/approval-rejected-projects",
        name: "Rejected Projects",
        miniName: "D",
        component: <Alternative />,
        layout: "/admin",
      }
    ],
  },
  {
    path: "/sold-list",
    name: "Sold List",
    icon: "ni ni-archive-2 text-green",
    component: <Widgets />,
    layout: "/admin",
  },
  {
    collapse: true,
    name: "Documents",
    icon: "ni ni-shop text-primary",
    state: "documentsCollapse",
    views: [
      {
        path: "/send-documents",
        name: "Send Documents",
        miniName: "D",
        component: <Alternative />,
        layout: "/admin",
      },
      {
        path: "/update-documents",
        name: "Update Documents",
        miniName: "D",
        component: <Alternative />,
        layout: "/admin",
      }
    ],
  },
  {
    collapse: true,
    name: "Mapping",
    icon: "ni ni-shop text-primary",
    state: "mappingCollapse",
    views: [
      {
        path: "/project-mapping",
        name: "Project Mapping",
        miniName: "D",
        component: <Alternative />,
        layout: "/admin",
      },
      {
        path: "/mapped-projects",
        name: "Mapped Projects",
        miniName: "D",
        component: <Alternative />,
        layout: "/admin",
      },
      {
        path: "/unmapped-projects",
        name: "Un-Mapped Projects",
        miniName: "D",
        component: <Alternative />,
        layout: "/admin",
      }
    ],
  },
  {
    collapse: true,
    name: "Leads",
    icon: "ni ni-shop text-primary",
    state: "leadsCollapse",
    views: [
      {
        path: "/leads-list",
        name: "Leads List",
        miniName: "D",
        component: <Alternative />,
        layout: "/admin",
      },
      {
        path: "/import-leads",
        name: "Import Leads",
        miniName: "D",
        component: <Alternative />,
        layout: "/admin",
      },
      {
        path: "/add-leads",
        name: "Add Leads",
        miniName: "D",
        component: <Alternative />,
        layout: "/admin",
      },
      {
        path: "/dropout-leads",
        name: "Dropout Leads",
        miniName: "D",
        component: <Alternative />,
        layout: "/admin",
      },
      {
        path: "/deleted-leads",
        name: "Deleted Leads",
        miniName: "D",
        component: <Alternative />,
        layout: "/admin",
      }
    ],
  },
  {
    collapse: true,
    name: "Leads Transfer",
    icon: "ni ni-shop text-primary",
    state: "leadsTransferCollapse",
    views: [
      {
        path: "/internal-request",
        name: "Internal Request",
        miniName: "D",
        component: <Alternative />,
        layout: "/admin",
      },
      {
        path: "/external-request",
        name: "External Request",
        miniName: "D",
        component: <Alternative />,
        layout: "/admin",
      },
      {
        path: "/outbox",
        name: "Outbox",
        miniName: "D",
        component: <Alternative />,
        layout: "/admin",
      }
    ],
  },
  {
    path: "/ho-users-list",
    name: "HO Users List",
    icon: "ni ni-archive-2 text-blue",
    component: <Widgets />,
    layout: "/admin",
  },
  {
    collapse: true,
    name: "Add HO Users",
    icon: "ni ni-ungroup text-orange",
    state: "addHoUsersCollapse",
    views: [
      {
        path: "/ho-master",
        name: "Master",
        miniName: "P",
        component: <Widgets />,
        layout: "/admin",
      },
      {
        path: "/ho-super-admin",
        name: "Super Admin(CSO)",
        miniName: "L",
        component: <Widgets />,
        layout: "/admin",
      },
      {
        path: "/ho-zonal-admin",
        name: "Zonal Admin",
        miniName: "R",
        component: <Widgets />,
        layout: "/admin",
      },
      {
        path: "/ho-state-admin",
        name: "State Admin",
        miniName: "L",
        component: <Widgets />,
        layout: "/admin",
      },
      {
        path: "/ho-vice-president",
        name: "Vice President",
        miniName: "T",
        component: <Widgets />,
        layout: "/admin",
      },
      {
        path: "/ho-franchise-manager",
        name: "Franchise Manager",
        miniName: "P",
        component: <Widgets />,
        layout: "/admin",
      },
      {
        path: "/ho-director-leads",
        name: "Director Leads",
        miniName: "RS",
        component: <Widgets />,
        layout: "/admin",
      },
      {
        path: "/ho-lead-manager",
        name: "Lead Manager",
        miniName: "RS",
        component: <Widgets />,
        layout: "/admin",
      },
      {
        path: "/ho-lead-executive",
        name: "Lead Executive",
        miniName: "RS",
        component: <Widgets />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Franchise",
    icon: "ni ni-ui-04 text-info",
    state: "franchiseCollapse",
    views: [
      {
        path: "/add-franchise",
        name: "Add Franchise",
        miniName: "B",
        component: <Buttons />,
        layout: "/admin",
      },
      {
        path: "/franchise-list",
        name: "Franchise List",
        miniName: "C",
        component: <Cards />,
        layout: "/admin",
      },
      {
        path: "/in-active-franchise",
        name: "In-Active Franchise",
        miniName: "G",
        component: <Grid />,
        layout: "/admin",
      }
    ],
  },
  {
    collapse: true,
    name: "Franchise Users",
    icon: "ni ni-single-copy-04 text-pink",
    state: "franchiseUsersCollapse",
    views: [
      {
        path: "/franchise-admin",
        name: "Franchise Admin",
        miniName: "E",
        component: <Elements />,
        layout: "/admin",
      },
      {
        path: "/lead-executive",
        name: "Lead Executive",
        miniName: "C",
        component: <Components />,
        layout: "/admin",
      },
      {
        path: "/sales-executive",
        name: "Sales Executive",
        miniName: "V",
        component: <Validation />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Channel Partner",
    icon: "ni ni-align-left-2 text-default",
    state: "cpCollapse",
    views: [
      {
        path: "/add-cp",
        name: "Add CP",
        miniName: "T",
        component: <Tables />,
        layout: "/admin",
      },
      {
        path: "/cp-list",
        name: "CP List",
        miniName: "S",
        component: <Sortable />,
        layout: "/admin",
      },
      {
        path: "/cp-project-list",
        name: "CP Project List",
        miniName: "RBT",
        component: <ReactBSTables />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Business Associates",
    icon: "ni ni-map-big text-primary",
    state: "baCollapse",
    views: [
      {
        path: "/add-ba",
        name: "Add BA",
        miniName: "G",
        component: <Google />,
        layout: "/admin",
      },
      {
        path: "/ba-list",
        name: "BA List",
        miniName: "V",
        component: <Vector />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Analytics",
    icon: "ni ni-map-big text-primary",
    state: "analyticsCollapse",
    views: [
      {
        path: "/project-wise",
        name: "Projectwise LM",
        miniName: "G",
        component: <Google />,
        layout: "/admin",
      },
      {
        path: "/source-wise",
        name: "Sourcewise LM",
        miniName: "V",
        component: <Vector />,
        layout: "/admin",
      },
      {
        path: "/source-irrelevant",
        name: "Source Irrelevant",
        miniName: "V",
        component: <Vector />,
        layout: "/admin",
      },
      {
        path: "/dropout-summary",
        name: "Dropout Summary",
        miniName: "V",
        component: <Vector />,
        layout: "/admin",
      },
      {
        path: "/tp-franchise",
        name: "Top Performance Franchise",
        miniName: "V",
        component: <Vector />,
        layout: "/admin",
      },
      {
        path: "/tp-project",
        name: "Top Performance Project",
        miniName: "V",
        component: <Vector />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "State",
    icon: "ni ni-map-big text-primary",
    state: "stateCollapse",
    views: [
      {
        path: "/add-state",
        name: "Add State",
        miniName: "G",
        component: <Google />,
        layout: "/admin",
      },
      {
        path: "/states-list",
        name: "States List",
        miniName: "V",
        component: <Vector />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "City",
    icon: "ni ni-map-big text-primary",
    state: "cityCollapse",
    views: [
      {
        path: "/add-city",
        name: "Add City",
        miniName: "G",
        component: <Google />,
        layout: "/admin",
      },
      {
        path: "/city-list",
        name: "City List",
        miniName: "V",
        component: <Vector />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "City Location",
    icon: "ni ni-map-big text-primary",
    state: "cityLocationCollapse",
    views: [
      {
        path: "/add-city-location",
        name: "Add City Location",
        miniName: "G",
        component: <Google />,
        layout: "/admin",
      },
      {
        path: "/city-location-list",
        name: "City Location List",
        miniName: "V",
        component: <Vector />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Builders",
    icon: "ni ni-map-big text-primary",
    state: "buildersCollapse",
    views: [
      {
        path: "/add-builder",
        name: "Add Builder",
        miniName: "G",
        component: <Google />,
        layout: "/admin",
      },
      {
        path: "/builders-list",
        name: "Builders List",
        miniName: "V",
        component: <Vector />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Master",
    icon: "ni ni-map-big text-primary",
    state: "masterCollapse",
    views: [
      {
        path: "/lead-flow",
        name: "Lead Flow",
        miniName: "G",
        component: <Google />,
        layout: "/admin",
      },
      {
        path: "/modules",
        name: "Modules",
        miniName: "V",
        component: <Vector />,
        layout: "/admin",
      },
      {
        path: "/status-type",
        name: "Status Type",
        miniName: "V",
        component: <Vector />,
        layout: "/admin",
      },
      {
        path: "/status-mapping",
        name: "Status Mapping",
        miniName: "V",
        component: <Vector />,
        layout: "/admin",
      },
      {
        path: "/source-type",
        name: "Source Type",
        miniName: "V",
        component: <Vector />,
        layout: "/admin",
      },
      {
        path: "/dropout-reasons",
        name: "Dropout Reasons",
        miniName: "V",
        component: <Vector />,
        layout: "/admin",
      },
      {
        path: "/roles",
        name: "Roles",
        miniName: "V",
        component: <Vector />,
        layout: "/admin",
      },
      {
        path: "/permissions",
        name: "Permissions",
        miniName: "V",
        component: <Vector />,
        layout: "/admin",
      }
    ],
  }
];

export default routes;
