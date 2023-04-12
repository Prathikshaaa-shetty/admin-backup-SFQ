import { CoreMenu } from "@core/types";

//? DOC: http://localhost:7777/demo/vuexy-angular-admin-dashboard-template/documentation/guide/development/navigation-menus.html#interface

export const menu: CoreMenu[] = [
  // Dashboard
  {
    id: "dashboard",
    title: "Dashboard",
    translate: "",
    type: "collapsible",

    icon: "home",

    children: [
      {
        id: "analytics",
        title: "Analytics",
        translate: "Analytics",
        type: "item",
        role: ["Admin"],
        icon: "circle",
        url: "dashboard/analytics",
      },
    ],
  },
  // Apps & Pages
  {
    id: "apps",
    type: "section",
    title: "Apps & Pages",
    translate: "MENU.APPS.SECTION",
    icon: "package",
    children: [
      {
        id: "users",
        title: "User",
        translate: "User Management",
        type: "item",
        icon: "user",
        url: "apps/user/user-list",
      },
      {
        id: "supplier",
        title: "Supplier",
        translate: "Food Supplier Management",
        type: "item",
        icon: "user",
        url: "apps/supplier/food-supplier",
      },
      {
        id: "questionnare",
        title: "questionnare",
        translate: "Questionnare Management",
        type: "item",
        icon: "file",
        url: "apps/questionnare/questionnare-list",
      },
      {
        id: "reports",
        title: "reports",
        translate: "Reports",
        type: "item",
        icon: "file",
        url: "apps/reports/reports-list",
      },
      {
        id: "questionnare",
        title: "questionnare",
        translate: "Questionnare Management",
        type: "item",
        icon: "file",
        url: "apps/questionnare/questionnare-list",
      },
      {
        id: "subcription",
        title: "subcription",
        translate: "subcription Management",
        type: "item",
        icon: "file",
        url: "pages/pricing",
      },
      {
        id: "faq",
        title: "faq",
        translate: "FAQ Management",
        type: "item",
        icon: "file",
        url: "apps/faq/faq-list",
      },
      {
        id: "account-settings",
        title: "Account Settings",
        translate: "Account Settings",
        type: "item",
        icon: "file-text",
        url: "pages/account-settings",
      },

      {
        id: "logout",
        title: "logout",
        translate: "Logout",
        type: "item",
        icon: "file-text",
        url: "pages/authentication/login-v2",
      },
    ],
  },
];
