const resource = [
  /* --- CSS --- */
  '/Notebook/assets/css/jekyll-theme-chirpy.css',

  /* --- PWA --- */
  '/Notebook/app.js',
  '/Notebook/sw.js',

  /* --- HTML --- */
  '/Notebook/index.html',
  '/Notebook/404.html',

  
    '/Notebook/categories/',
  
    '/Notebook/tags/',
  
    '/Notebook/archives/',
  
    '/Notebook/about/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/Notebook/assets/img/favicons/android-chrome-192x192.png',
    '/Notebook/assets/img/favicons/android-chrome-384x384.png',
    '/Notebook/assets/img/favicons/apple-touch-icon.png',
    '/Notebook/assets/img/favicons/favicon-16x16.png',
    '/Notebook/assets/img/favicons/favicon-32x32.png',
    '/Notebook/assets/img/favicons/favicon.ico',
    '/Notebook/assets/img/favicons/mstile-150x150.png',
    '/Notebook/assets/img/favicons/safari-pinned-tab.svg',
    '/Notebook/assets/img/favicons/android-chrome-512x512.png',
    '/Notebook/assets/js/dist/categories.min.js',
    '/Notebook/assets/js/dist/commons.min.js',
    '/Notebook/assets/js/dist/home.min.js',
    '/Notebook/assets/js/dist/misc.min.js',
    '/Notebook/assets/js/dist/page.min.js',
    '/Notebook/assets/js/dist/post.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [];

