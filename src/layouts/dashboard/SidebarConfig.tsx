import { Icon } from '@iconify/react';
import { Icons } from 'icons-exports';

// icons

import { PATH_ADMIN } from '../../routes/paths';

// ----------------------------------------------------------------------

const getIconify = (name: any) => <Icon width={100} height={100} icon={name} />;

const ICONS = {
  overview: getIconify(Icons.roundSpaceDashboard),
  products: getIconify(Icons.roundShoppingCart),
  categories: getIconify(Icons.roundCategory),
  clients: getIconify(Icons.roundPeopleAlt),
  invoices: getIconify(Icons.roundInventory2),
  orders: getIconify(Icons.roundMessage),
  coupon: getIconify(Icons.roundPercentage),

  roundLocalOffer: getIconify(Icons.roundLocalOffer),
  brands: getIconify(Icons.outlineAdsClick),
  roles: getIconify(Icons.roundSecurity),
  users: getIconify(Icons.roundSupervisedUserCircle),
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'Management',
    items: [
      {
        title: 'Overview',
        path: PATH_ADMIN.directories.overview,
        icon: ICONS.overview,
      },
      {
        title: 'Products',
        path: PATH_ADMIN.directories.products,
        icon: ICONS.products,
      },
      {
        title: 'Categories',
        path: PATH_ADMIN.directories.categories,
        icon: ICONS.categories,
      },
      {
        title: 'Clients',
        path: PATH_ADMIN.directories.clients,
        icon: ICONS.clients,
      },
      {
        title: 'Invoices',
        path: PATH_ADMIN.directories.invoices,
        icon: ICONS.invoices,
      },
      {
        title: 'Orders',
        path: PATH_ADMIN.directories.orders,
        icon: ICONS.orders,
      },
      {
        title: 'Special Offers',
        path: PATH_ADMIN.directories.offers,
        icon: ICONS.roundLocalOffer,
      },
      {
        title: 'Brands',
        path: PATH_ADMIN.directories.brands,
        icon: ICONS.brands,
      },
      {
        title: 'Coupon Codes',
        path: PATH_ADMIN.directories.couponCode,
        icon: ICONS.coupon,
      },
      {
        title: 'Roles and Permissions',
        path: PATH_ADMIN.directories.roles,
        icon: ICONS.roles,
      },
      { title: 'Users', path: PATH_ADMIN.directories.users, icon: ICONS.users },
    ],
  },
];

export default sidebarConfig;
