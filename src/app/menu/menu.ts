import { CoreMenu } from '@core/types';

//? DOC: http://localhost:7777/demo/vuexy-angular-admin-dashboard-template/documentation/guide/development/navigation-menus.html#interface

export const menu: CoreMenu[] = [
  // Dashboard
  {
    id: 'dashboard',
    title: 'Dashboard',
    translate: '',
    type: 'collapsible',
    // role: ['Admin'], //? To hide collapsible based on user role
    icon: 'home',
    badge: {
      title: '2',
      translate: '',
      classes: 'badge-light-warning badge-pill'
    },
    children: [
      {
        id: 'analytics',
        title: 'Analytics',
        translate: 'Analytics',
        type: 'item',
        role: ['Admin'], //? To set multiple role: ['Admin', 'Client']
        icon: 'circle',
        url: 'dashboard/analytics'
      },
      {
        // If role is not assigned will be display to all
        id: 'ecommerce',
        title: 'eCommerce',
        translate: 'eCommerce',
        type: 'item',
        icon: 'circle',
        url: 'dashboard/ecommerce'
      }
    ]
  },
  // Apps & Pages
  {
    id: 'apps',
    type: 'section',
    title: 'Apps & Pages',
    translate: 'MENU.APPS.SECTION',
    icon: 'package',
    children: [



      {
        id: 'pages',
        title: 'Pages',
        translate: 'Pages',
        type: 'collapsible',
        icon: 'file-text',
        children: [
          // {
          //   id: 'authentication',
          //   title: 'Authentication',
          //   translate: 'Authentication',
          //   type: 'collapsible',
          //   icon: 'circle',
          //   children: [
          //     {
          //       id: 'login-v1',
          //       title: 'Login V1',
          //       translate: 'Login V1',
          //       type: 'item',
          //       url: 'pages/authentication/login-v1',
          //       openInNewTab: true
          //     },
          //     {
          //       id: 'login-v2',
          //       title: 'Login V2',
          //       translate: 'Login V2',
          //       type: 'item',
          //       url: 'pages/authentication/login-v2',
          //       openInNewTab: true
          //     },
          //     {
          //       id: 'register-v1',
          //       title: 'Register V1',
          //       translate: 'Register V1',
          //       type: 'item',
          //       url: 'pages/authentication/register-v1',
          //       openInNewTab: true
          //     },
          //     {
          //       id: 'register-v2',
          //       title: 'Register V2',
          //       translate: 'Register V2',
          //       type: 'item',
          //       url: 'pages/authentication/register-v2',
          //       openInNewTab: true
          //     },
          //     {
          //       id: 'forgot-password-v1',
          //       title: 'Forgot Password V1',
          //       translate: 'Forgot Password V1',
          //       type: 'item',
          //       url: 'pages/authentication/forgot-password-v1',
          //       openInNewTab: true
          //     },
          //     {
          //       id: 'forgot-password-v2',
          //       title: 'Forgot Password V2',
          //       translate: 'Forgot Password V2',
          //       type: 'item',
          //       url: 'pages/authentication/forgot-password-v2',
          //       openInNewTab: true
          //     },
          //     {
          //       id: 'reset-password-v1',
          //       title: 'Reset Password V1',
          //       translate: 'Reset Password V1',
          //       type: 'item',
          //       url: 'pages/authentication/reset-password-v1',
          //       openInNewTab: true
          //     },
          //     {
          //       id: 'reset-password-v2',
          //       title: 'Reset Password V2',
          //       translate: 'Reset Password V2',
          //       type: 'item',
          //       url: 'pages/authentication/reset-password-v2',
          //       openInNewTab: true
          //     }
          //   ]
          // },
          {
            id: 'account-settings',
            title: 'Account Settings',
            translate: 'Account Settings',
            type: 'item',
            icon: 'circle',
            url: 'pages/account-settings'
          },


          {
            id: 'pricing',
            title: 'Pricing',
            translate: 'Pricing',
            type: 'item',
            icon: 'circle',
            url: 'pages/pricing'
          },




          // {
          //   id: 'miscellaneous',
          //   title: 'Miscellaneous',
          //   translate: 'Miscellaneous',
          //   type: 'collapsible',
          //   icon: 'circle',
          //   children: [
          //     {
          //       id: 'misc-comingsoon',
          //       title: 'Coming Soon',
          //       translate: 'Coming Soon',
          //       type: 'item',
          //       url: 'pages/miscellaneous/coming-soon',
          //       openInNewTab: true
          //     },

          //     {
          //       id: 'misc-not-authorized',
          //       title: 'Not Authorized',
          //       translate: 'Not Authorized',
          //       type: 'item',
          //       url: 'pages/miscellaneous/not-authorized',
          //       openInNewTab: true
          //     },
          //     {
          //       id: 'maintenance',
          //       title: 'Maintenance',
          //       translate: 'Maintenance',
          //       type: 'item',
          //       url: 'pages/miscellaneous/maintenance',
          //       openInNewTab: true
          //     },
          //     {
          //       id: 'error',
          //       title: 'Error',
          //       translate: 'Error',
          //       type: 'item',
          //       url: 'pages/miscellaneous/error',
          //       openInNewTab: true
          //     }
          //   ]
          // }
        ]
      },


      {
        id: 'users',
        title: 'User',
        translate: 'User Management',
        type: 'collapsible',
        icon: 'user',
        children: [
          {
            id: 'list',
            title: 'List',
            translate: 'List',
            type: 'item',
            icon: 'circle',
            url: 'apps/user/user-list'
          },

        ]
      }
    ]
  },


];
