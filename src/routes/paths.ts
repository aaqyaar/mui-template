// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';
const ROOTS_ADMIN = '/admin';

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  register: path(ROOTS_AUTH, '/register'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  verify: path(ROOTS_AUTH, '/verify'),
};

export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page404: '/404',
  page500: '/500',
  components: '/components',
};

export const PATH_ADMIN = {
  root: ROOTS_ADMIN,
  directories: {
    overview: path(ROOTS_ADMIN, '/overview'),
    products: path(ROOTS_ADMIN, '/product-directory'),
    categories: path(ROOTS_ADMIN, '/categories-directory'),
    clients: path(ROOTS_ADMIN, '/clients-directory'),
    invoices: path(ROOTS_ADMIN, '/invoice-directory'),
    orders: path(ROOTS_ADMIN, '/order-directory'),
    couponCode: path(ROOTS_ADMIN, '/coupon-code-directory'),
    offers: path(ROOTS_ADMIN, '/offers-directory'),
    brands: path(ROOTS_ADMIN, '/brands-directory'),
    roles: path(ROOTS_ADMIN, '/roles-directory'),
    users: path(ROOTS_ADMIN, '/users-directory'),
    settings: {
      root: path(ROOTS_ADMIN, '/settings'),
      general: path(ROOTS_ADMIN, '/settings/general'),
    },
  },
  forms: {
    newCategory: path(ROOTS_ADMIN, '/new-category'),
    editCategory: path(ROOTS_ADMIN, '/edit-category'),
    editBulkCategory: path(ROOTS_ADMIN, '/edit-bulk-category'),
    newSubCategory: path(ROOTS_ADMIN, '/new-sub-category'),
    editSubCategory: path(ROOTS_ADMIN, '/edit-sub-category'),
    newProduct: path(ROOTS_ADMIN, '/new-product'),
    editProduct: path(ROOTS_ADMIN, '/edit-product'),
    editBulkProduct: path(ROOTS_ADMIN, '/edit-bulk-product'),
    newCoupon: path(ROOTS_ADMIN, '/new-coupon'),
    editCoupon: path(ROOTS_ADMIN, '/edit-coupon'),
    newClients: path(ROOTS_ADMIN, '/new-clients'),
    editClients: path(ROOTS_ADMIN, '/edit-clients'),
    newInvoice: path(ROOTS_ADMIN, '/new-invoice'),
    editInvoice: path(ROOTS_ADMIN, '/edit-invoice'),
    newOffer: path(ROOTS_ADMIN, '/new-offer'),
    editOffer: path(ROOTS_ADMIN, '/edit-offer'),
    newBrand: path(ROOTS_ADMIN, '/new-brand'),
    editBrand: path(ROOTS_ADMIN, '/edit-brand'),
    newRole: path(ROOTS_ADMIN, '/new-role'),
    editRole: path(ROOTS_ADMIN, '/edit-role'),
    newUser: path(ROOTS_ADMIN, '/new-user'),
    editUser: path(ROOTS_ADMIN, '/edit-user'),
  },
  profiles: {
    clientProfile: path(ROOTS_ADMIN, '/client-profile'),
    orderProfile: path(ROOTS_ADMIN, '/order-profile'),
    invoiceProfile: path(ROOTS_ADMIN, '/invoice-profile'),
    productProfile: path(ROOTS_ADMIN, '/product-profile'),
    roleProfile: path(ROOTS_ADMIN, '/role-profile'),
    userprofile: path(ROOTS_ADMIN, '/user-profile'),
    adminProfile: path(ROOTS_ADMIN, '/profile'),
  },
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, '/app'),
    ecommerce: path(ROOTS_DASHBOARD, '/ecommerce'),
    analytics: path(ROOTS_DASHBOARD, '/analytics'),
    banking: path(ROOTS_DASHBOARD, '/banking'),
    booking: path(ROOTS_DASHBOARD, '/booking'),
  },
  mail: {
    root: path(ROOTS_DASHBOARD, '/mail'),
    all: path(ROOTS_DASHBOARD, '/mail/all'),
  },
  chat: {
    root: path(ROOTS_DASHBOARD, '/chat'),
    new: path(ROOTS_DASHBOARD, '/chat/new'),
    conversation: path(ROOTS_DASHBOARD, '/chat/:conversationKey'),
  },
  calendar: path(ROOTS_DASHBOARD, '/calendar'),
  kanban: path(ROOTS_DASHBOARD, '/kanban'),
  user: {
    root: path(ROOTS_DASHBOARD, '/user'),
    profile: path(ROOTS_DASHBOARD, '/user/profile'),
    cards: path(ROOTS_DASHBOARD, '/user/cards'),
    list: path(ROOTS_DASHBOARD, '/user/list'),
    newUser: path(ROOTS_DASHBOARD, '/user/new'),
    editById: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
    account: path(ROOTS_DASHBOARD, '/user/account'),
  },
  eCommerce: {
    root: path(ROOTS_DASHBOARD, '/e-commerce'),
    shop: path(ROOTS_DASHBOARD, '/e-commerce/shop'),
    product: path(ROOTS_DASHBOARD, '/e-commerce/product/:name'),
    productById: path(
      ROOTS_DASHBOARD,
      '/e-commerce/product/nike-air-force-1-ndestrukt'
    ),
    list: path(ROOTS_DASHBOARD, '/e-commerce/list'),
    newProduct: path(ROOTS_DASHBOARD, '/e-commerce/product/new'),
    editById: path(
      ROOTS_DASHBOARD,
      '/e-commerce/product/nike-blazer-low-77-vintage/edit'
    ),
    checkout: path(ROOTS_DASHBOARD, '/e-commerce/checkout'),
    invoice: path(ROOTS_DASHBOARD, '/e-commerce/invoice'),
  },
  blog: {
    root: path(ROOTS_DASHBOARD, '/blog'),
    posts: path(ROOTS_DASHBOARD, '/blog/posts'),
    post: path(ROOTS_DASHBOARD, '/blog/post/:title'),
    postById: path(
      ROOTS_DASHBOARD,
      '/blog/post/apply-these-7-secret-techniques-to-improve-event'
    ),
    newPost: path(ROOTS_DASHBOARD, '/blog/new-post'),
  },
};

export const PATH_DOCS = 'https://docs-minimals.vercel.app/introduction';
