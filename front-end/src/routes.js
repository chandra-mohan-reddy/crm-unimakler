import Dashboard from "views/main/Dashboard.js";
import AddProject from "views/main/AddProjects.js";
import ActiveProjects from "views/main/ActiveProjects.js";
import InActiveProjects from "views/main/InActiveProjects.js";
import UnAssignedProjects from "views/main/UnAssignedProjects.js";
import RejectedProjects from "views/main/RejectedProjects.js";
import PendingProjects from "views/main/PendingProjects.js";
import ApprovedProjects from "views/main/ApprovedProjects.js";
import SoldList from "views/main/SoldList.js";
import SendDocuments from "views/main/SendDocuments.js";
import UpdateDocuments from "views/main/UpdateDocuments.js";
import ProjectMapping from "views/main/ProjectMapping.js";
import MappedProjects from "views/main/MappedProjects.js";
import UnMappedProjects from "views/main/UnMappedProjects.js";
import LeadsList from "views/main/LeadsList.js";
import LeadsImport from "views/main/LeadsImport.js";
import LeadsAdd from "views/main/LeadsAdd.js";
import LeadsDropout from "views/main/LeadsDropOut.js";
import LeadsDeleted from "views/main/LeadsDeleted.js";
import InternalRequest from "views/main/InternalRequest.js";
import ExternalRequest from "views/main/ExternalRequest.js";
import Outbox from "views/main/Outbox.js";
import HOUsersList from "views/main/HOUsersList.js";
import HOUserAdd from "views/main/HOUserAdd.js";
import AddFranchise from "views/main/AddFranchise.js";
import AddMiniFranchise from "views/main/AddMiniFranchise.js";
import FranchiseList from "views/main/FranchiseList.js";
import FranchiseInactive from "views/main/FranchiseInactive.js";
import AddFranchiseUser from "views/main/AddFranchiseUser.js";
import AddCP from "views/main/AddCP.js";
import CPList from "views/main/CPList.js";
import CPProjectsList from "views/main/CPProjectsList.js";
import AddBA from "views/main/AddBA.js";
import BAList from "views/main/BAList.js";
import Analytics from "views/main/Analytics.js";
import AnalyticsProjectWise from "views/main/AnalyticsProjectWise.js";
import AnalyticsSourceWise from "views/main/AnalyticsSourceWise.js";
import AnalyticsSourceIrrelevant from "views/main/AnalyticsIrrelevant.js";
import AnalyticsDropout from "views/main/AnalyticsDropout.js";
import AnalyticsFranchisePerformance from "views/main/AnalyticsFrancisePerformance.js";
import AnalyticsProjectPerformance from "views/main/AnalyticsProjectPerformance.js";
import States from "views/main/States.js";
import Cities from "views/main/Cities.js";
import CityLocations from "views/main/CityLocations.js";
import AddBuilder from "views/main/AddBuilder.js";
import BuilderList from "views/main/BuildersList";
import UnderConstruction from "views/main/UnderContstruction";
import Module from "views/main/Modules";
import StatusType from "views/main/StatusType";
import StatusTypeMapping from "views/main/StatusTypeMapping";
import SourceType from "views/main/SourceType";
import DropoutReason from "views/main/DropoutReason";
import Roles from "views/main/Roles";
import Permissions from "views/main/Permissions";

const routes = [
  {
    collapse: true,
    name: "Dashboards",
    icon: "ni ni-chart-bar-32 text-primary",
    state: "dashboardsCollapse",
    views: [
      {
        path: "/dashboard",
        name: "Dashboard",
        miniName: "D",
        component: <Dashboard />,
        layout: "/admin",
      }
    ],
  },
  {
    collapse: true,
    name: "Projects",
    icon: "ni ni-briefcase-24 text-blue",
    state: "projectsCollapse",
    views: [
      {
        path: "/add-project",
        name: "Add Project",
        miniName: "D",
        component: <AddProject />,
        // component: <UnderConstruction />,
        layout: "/admin",
      },
      {
        path: "/active-project",
        name: "Active Projects",
        miniName: "D",
        component: <ActiveProjects />,
        layout: "/admin",
      },
      {
        path: "/inactive-project",
        name: "In-Active Projects",
        miniName: "D",
        component: <InActiveProjects />,
        layout: "/admin",
      },
      {
        path: "/unassigned-project",
        name: "Un-Assigned Projects",
        miniName: "D",
        component: <UnAssignedProjects />,
        layout: "/admin",
      }
    ],
  },
  {
    collapse: true,
    name: "Approvals",
    icon: "ni ni-check-bold text-orange",
    state: "approvalsCollapse",
    views: [
      {
        path: "/approval-pending-projects",
        name: "Pending Projects",
        miniName: "D",
        component: <PendingProjects />,
        layout: "/admin",
      },
      {
        path: "/approval-approved-projects",
        name: "Approved Projects",
        miniName: "D",
        component: <ApprovedProjects />,
        layout: "/admin",
      },
      {
        path: "/approval-rejected-projects",
        name: "Rejected Projects",
        miniName: "D",
        component: <RejectedProjects />,
        layout: "/admin",
      }
    ],
  },
  {
    path: "/sold-list",
    name: "Sold List",
    icon: "ni ni-money-coins text-info",
    component: <SoldList />,
    layout: "/admin",
  },
  {
    collapse: true,
    name: "Documents",
    icon: "ni ni-single-copy-04 text-pink",
    state: "documentsCollapse",
    views: [
      {
        path: "/send-documents",
        name: "Send Documents",
        miniName: "D",
        // component: <UnderConstruction />,
        component: <SendDocuments />,
        layout: "/admin",
      },
      {
        path: "/update-documents",
        name: "Update Documents",
        miniName: "D",
        component: <UpdateDocuments />,
        layout: "/admin",
      }
    ],
  },
  {
    collapse: true,
    name: "Mapping",
    icon: "ni ni-map-big text-default",
    state: "mappingCollapse",
    views: [
      {
        path: "/project-mapping",
        name: "Project Mapping",
        miniName: "D",
        // component: <ProjectMapping />,
        component: <UnderConstruction />,
        layout: "/admin",
      },
      {
        path: "/mapped-projects",
        name: "Mapped Projects",
        miniName: "D",
        // component: <MappedProjects />,
        component: <UnderConstruction />,
        layout: "/admin",
      },
      {
        path: "/unmapped-projects",
        name: "Un-Mapped Projects",
        miniName: "D",
        // component: <UnMappedProjects />,
        component: <UnderConstruction />,
        layout: "/admin",
      }
    ],
  },
  {
    collapse: true,
    name: "Leads",
    icon: "ni ni-user-run text-primary",
    state: "leadsCollapse",
    views: [
      {
        path: "/leads-list",
        name: "Leads List",
        miniName: "D",
        component: <LeadsList />,
        layout: "/admin",
      },
      {
        path: "/import-leads",
        name: "Import Leads",
        miniName: "D",
        component: <LeadsImport />,
        layout: "/admin",
      },
      {
        path: "/add-leads",
        name: "Add Leads",
        miniName: "D",
        component: <LeadsAdd />,
        layout: "/admin",
      },
      {
        path: "/dropout-leads",
        name: "Dropout Leads",
        miniName: "D",
        component: <LeadsDropout />,
        layout: "/admin",
      },
      {
        path: "/deleted-leads",
        name: "Deleted Leads",
        miniName: "D",
        component: <LeadsDeleted />,
        layout: "/admin",
      }
    ],
  },
  {
    collapse: true,
    name: "Leads Transfer",
    icon: "ni ni-send text-blue",
    state: "leadsTransferCollapse",
    views: [
      {
        path: "/internal-request",
        name: "Internal Request",
        miniName: "I",
        component: <InternalRequest />,
        layout: "/admin",
      },
      {
        path: "/external-request",
        name: "Inbox Requests",
        miniName: "I",
        component: <ExternalRequest />,
        layout: "/admin",
      },
      {
        path: "/outbox",
        name: "Outbox Requests",
        miniName: "O",
        component: <Outbox />,
        layout: "/admin",
      }
    ],
  },
  {
    path: "/ho-users-list",
    name: "HO Users List",
    icon: "ni ni-single-02 text-orange",
    component: <HOUsersList />,
    layout: "/admin",
  },
  {
    collapse: true,
    name: "Add HO Users",
    icon: "ni ni-circle-08 text-info",
    state: "addHoUsersCollapse",
    views: [
      {
        path: "/ho-master",
        name: "Master",
        miniName: "P",
        component: <HOUserAdd title="Master" />,
        layout: "/admin",
      },
      {
        path: "/ho-super-admin",
        name: "Super Admin(CSO)",
        miniName: "L",
        component: <HOUserAdd title="Super Admin(CSO)" />,
        layout: "/admin",
      },
      {
        path: "/ho-zonal-admin",
        name: "Zonal Admin",
        miniName: "R",
        component: <HOUserAdd title="Zonal Admin" />,
        layout: "/admin",
      },
      {
        path: "/ho-state-admin",
        name: "State Admin",
        miniName: "L",
        component: <HOUserAdd title="State Admin" />,
        layout: "/admin",
      },
      {
        path: "/ho-vice-president",
        name: "Vice President",
        miniName: "T",
        component: <HOUserAdd title="Vice President" />,
        layout: "/admin",
      },
      {
        path: "/ho-franchise-manager",
        name: "Franchise Manager",
        miniName: "P",
        component: <HOUserAdd title="Franchise Manager" />,
        layout: "/admin",
      },
      {
        path: "/ho-director-leads",
        name: "Director Leads",
        miniName: "RS",
        component: <HOUserAdd title="Director Leads" />,
        layout: "/admin",
      },
      {
        path: "/ho-lead-manager",
        name: "Lead Manager",
        miniName: "RS",
        component: <HOUserAdd title="Lead Manager" />,
        layout: "/admin",
      },
      {
        path: "/ho-lead-executive",
        name: "Lead Executive",
        miniName: "RS",
        component: <HOUserAdd title="Lead Executive" />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Super Franchise",
    icon: "ni ni-world text-pink",
    state: "franchiseCollapse",
    views: [
      {
        path: "/add-franchise",
        name: "Add Super Franchise",
        miniName: "B",
        component: <AddFranchise />,
        layout: "/admin",
      },
      {
        path: "/franchise-list",
        name: "Super Franchise List",
        miniName: "C",
        component: <FranchiseList />,
        layout: "/admin",
      },
      {
        path: "/in-active-franchise",
        name: "In-Active Super Franchise",
        miniName: "G",
        component: <FranchiseInactive />,
        layout: "/admin",
      }
    ],
  },
  {
    collapse: true,
    name: "Mini Franchise",
    icon: "ni ni-world text-pink",
    state: "miniFranchiseCollapse",
    views: [
      {
        path: "/add-mini-franchise",
        name: "Add Mini Franchise",
        miniName: "B",
        component: <AddMiniFranchise />,
        layout: "/admin",
      },
      {
        path: "/mini-franchise-list",
        name: "Mini Franchise List",
        miniName: "C",
        component: <FranchiseList />,
        layout: "/admin",
      },
      {
        path: "/in-active-mini-franchise",
        name: "In-Active Mini Franchise",
        miniName: "G",
        component: <FranchiseInactive />,
        layout: "/admin",
      }
    ],
  },
  {
    collapse: true,
    name: "Super Franchise Users",
    icon: "ni ni-circle-08 text-default",
    state: "franchiseUsersCollapse",
    views: [
      {
        path: "/franchise-admin",
        name: "Admin",
        miniName: "E",
        component: <AddFranchiseUser title="Super Franchise Admin" />,
        layout: "/admin",
      },
      {
        path: "/lead-executive",
        name: "Lead Executive",
        miniName: "C",
        component: <AddFranchiseUser title="Lead Executive" />,
        layout: "/admin",
      },
      {
        path: "/sales-executive",
        name: "Sales Executive",
        miniName: "V",
        component: <AddFranchiseUser title="Sales Executive" />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Channel Partner",
    icon: "ni ni-world text-primary",
    state: "cpCollapse",
    views: [
      {
        path: "/add-cp",
        name: "Add CP",
        miniName: "T",
        component: <AddCP />,
        layout: "/admin",
      },
      {
        path: "/cp-list",
        name: "CP List",
        miniName: "S",
        component: <CPList />,
        layout: "/admin",
      },
      {
        path: "/cp-project-list",
        name: "CP Project List",
        miniName: "RBT",
        component: <CPProjectsList />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Business Associates",
    icon: "ni ni-circle-08 text-blue",
    state: "baCollapse",
    views: [
      {
        path: "/add-ba",
        name: "Add BA",
        miniName: "G",
        component: <AddBA />,
        layout: "/admin",
      },
      {
        path: "/ba-list",
        name: "BA List",
        miniName: "V",
        component: <BAList />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Analytics",
    icon: "ni ni-chart-pie-35 text-orange",
    state: "analyticsCollapse",
    views: [
      {
        path: "/project-wise",
        name: "Projectwise LM",
        miniName: "G",
        component: <AnalyticsProjectWise />,
        layout: "/admin",
      },
      {
        path: "/source-wise",
        name: "Sourcewise LM",
        miniName: "V",
        component: <AnalyticsSourceWise />,
        layout: "/admin",
      },
      {
        path: "/source-irrelevant",
        name: "Source Irrelevant",
        miniName: "V",
        component: <AnalyticsSourceIrrelevant />,
        layout: "/admin",
      },
      {
        path: "/dropout-summary",
        name: "Dropout Summary",
        miniName: "V",
        component: <AnalyticsDropout />,
        layout: "/admin",
      },
      {
        path: "/tp-franchise",
        name: "Top Performance Franchise",
        miniName: "V",
        component: <AnalyticsFranchisePerformance />,
        layout: "/admin",
      },
      {
        path: "/tp-project",
        name: "Top Performance Project",
        miniName: "V",
        component: <AnalyticsProjectPerformance />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "State",
    icon: "ni ni-map-big text-info",
    state: "stateCollapse",
    views: [
      {
        path: "/states-list",
        name: "States List",
        miniName: "V",
        component: <States />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "City",
    icon: "ni ni-building text-pink",
    state: "cityCollapse",
    views: [
      {
        path: "/city-list",
        name: "City List",
        miniName: "V",
        component: <Cities />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "City Location",
    icon: "ni ni-pin-3 text-default",
    state: "cityLocationCollapse",
    views: [
      {
        path: "/city-location-list",
        name: "City Location List",
        miniName: "V",
        component: <CityLocations />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Builders",
    icon: "ni ni-settings-gear-65 text-primary",
    state: "buildersCollapse",
    views: [
      {
        path: "/add-builder",
        name: "Add Builder",
        miniName: "G",
        component: <AddBuilder />,
        layout: "/admin",
      },
      {
        path: "/builders-list",
        name: "Builders List",
        miniName: "V",
        component: <BuilderList />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Master",
    icon: "ni ni-settings-gear-65 text-orange",
    state: "masterCollapse",
    views: [
      {
        path: "/lead-flow",
        name: "Lead Flow",
        miniName: "G",
        component: <UnderConstruction />,
        layout: "/admin",
      },
      {
        path: "/modules",
        name: "Modules",
        miniName: "V",
        component: <Module />,
        layout: "/admin",
      },
      {
        path: "/status-type",
        name: "Status Type",
        miniName: "V",
        component: <StatusType />,
        layout: "/admin",
      },
      {
        path: "/status-mapping",
        name: "Status Mapping",
        miniName: "V",
        component: <StatusTypeMapping />,
        layout: "/admin",
      },
      {
        path: "/source-type",
        name: "Source Type",
        miniName: "V",
        component: <SourceType />,
        layout: "/admin",
      },
      {
        path: "/dropout-reasons",
        name: "Dropout Reasons",
        miniName: "V",
        component: <DropoutReason />,
        layout: "/admin",
      },
      {
        path: "/roles",
        name: "Roles",
        miniName: "V",
        component: <Roles />,
        layout: "/admin",
      },
      {
        path: "/permissions",
        name: "Permissions",
        miniName: "V",
        component: <Permissions />,
        layout: "/admin",
      }
    ],
  }
];

export default routes;
