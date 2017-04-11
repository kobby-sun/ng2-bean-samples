/**
 * Configuration for head elements added during the creation of index.html.
 *
 * All href attributes are added the publicPath (if exists) by default.
 * You can explicitly hint to prefix a publicPath by setting a boolean value to a key that has
 * the same name as the attribute you want to operate on, but prefix with =
 *
 * Example:
 * { name: 'msapplication-TileImage', content: '/assets/icon/ms-icon-144x144.png', '=content': true },
 * Will prefix the publicPath to content.
 *
 * { rel: 'apple-touch-icon', sizes: '57x57', href: '/assets/icon/apple-icon-57x57.png', '=href': false },
 * Will not prefix the publicPath on href (href attributes are added by default
 *
 */
module.exports = {
  link: [
    /** <link> tags for 'apple-touch-icon' (AKA Web Clips). **/
    { rel: 'apple-touch-icon', sizes: '57x57', href: '/assets/icon/apple-icon-57x57.png' },
    { rel: 'apple-touch-icon', sizes: '60x60', href: '/assets/icon/apple-icon-60x60.png' },
    { rel: 'apple-touch-icon', sizes: '72x72', href: '/assets/icon/apple-icon-72x72.png' },
    { rel: 'apple-touch-icon', sizes: '76x76', href: '/assets/icon/apple-icon-76x76.png' },
    { rel: 'apple-touch-icon', sizes: '114x114', href: '/assets/icon/apple-icon-114x114.png' },
    { rel: 'apple-touch-icon', sizes: '120x120', href: '/assets/icon/apple-icon-120x120.png' },
    { rel: 'apple-touch-icon', sizes: '144x144', href: '/assets/icon/apple-icon-144x144.png' },
    { rel: 'apple-touch-icon', sizes: '152x152', href: '/assets/icon/apple-icon-152x152.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/icon/apple-icon-180x180.png' },

    /** <link> tags for android web app icons **/
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/assets/icon/android-icon-192x192.png' },

    /** <link> tags for favicons **/
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/icon/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/assets/icon/favicon-96x96.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/icon/favicon-16x16.png' },

    /** <link> tags for a Web App Manifest **/
    { rel: 'manifest', href: '/assets/manifest.json' },

    { rel: "stylesheet", href: "/assets/css/prism.css" },

    /** Bootstrap **/
    // { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
    // { rel: "stylesheet", href: "/assets/css/bootstrap-theme.min.css" },

    /** Font Awesome **/
    { rel: "stylesheet", href: "/assets/css/font-awesome.min.css" },

    /** Select2 **/
    // { rel: "stylesheet", href: "/assets/css/ng2-select.css" },

    /** Date Range Picker **/
    // { rel: "stylesheet", href: "/assets/css/daterangepicker.min.css" },
    /** Rome Datetime Picker **/
    // { rel: "stylesheet", href: "/assets/css/rome.min.css" },
    /** flatpickr Datetime Picker **/
    { rel: "stylesheet", href: "/assets/css/flatpickr/flatpickr.min.css" },
    /** Toggle **/
    { rel: "stylesheet", href: "/assets/css/bootstrap-toggle.min.css" },
    // { rel: "stylesheet", href: "/assets/css/bootstrap-switch.min.css" },
    /** Bootstrap Dropdown Menus Enhancement **/
    { rel: "stylesheet", href: "/assets/css/dropdowns-enhancement.min.css" },
    /* semantic-ui */
    { rel: "stylesheet", href: "/assets/css/semantic.css" },

    /* NProgress */
    { rel: "stylesheet", href: "/assets/css/nprogress.css" },

    { rel: "stylesheet", href: "/assets/css/table-expandable.css" },

    // { rel: "stylesheet", href: "/assets/css/toastr.min.css" },

    // { rel: "stylesheet", href: "/assets/css/sweetalert.css" },
    // { rel: "stylesheet", href: "/assets/css/iziToast.min.css" },

    /* Netto font */
    { rel: "stylesheet", href: "/assets/css/netto.css" },

    /* Select2 */
    // { rel: "stylesheet", href: "/assets/css/select2.min.css" },
    // { rel: "stylesheet", href: "/assets/css/select2-bootstrap.min.css" },
    /* ladda */
    // { rel: "stylesheet", href: "/assets/css/ladda-themeless.min.css" }
  ],
  meta: [
    { name: 'msapplication-TileColor', content: '#00bcd4' },
    { name: 'msapplication-TileImage', content: '/assets/icon/ms-icon-144x144.png', '=content': true },
    { name: 'theme-color', content: '#00bcd4' }
  ]
};
