/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-e0b5fca90af1b6261770.js"
  },
  {
    "url": "styles.a77d44fe7f8f3a1f2f02.css"
  },
  {
    "url": "styles-a57e630e681a3b192501.js"
  },
  {
    "url": "app-9341165d9ed20d053f24.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-4ce7f49cec02d9b9d831.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "b4b5a712d920367c9847c557e84579e3"
  },
  {
    "url": "google-fonts/s/nanumgothic/v16/PN_3Rfi-oW3hYwmKDpxS7F_D-dje.woff2",
    "revision": "01fe0d37c63c0cdc03b3745c03d01e2d"
  },
  {
    "url": "google-fonts/s/notosanskr/v11/Pby6FmXiEBPT4ITbgNA5CgmOsk7lyJc.woff2",
    "revision": "b047fc8e25a874bece3e3c5234de05af"
  },
  {
    "url": "google-fonts/s/notosanskr/v11/Pby7FmXiEBPT4ITbgNA5CgmOalv45bIR.woff2",
    "revision": "c8f6d5258b4c57c91be8179a872ccc08"
  },
  {
    "url": "google-fonts/s/notosanskr/v11/PbykFmXiEBPT4ITbgNA5CgmG237t.woff2",
    "revision": "7b91af55b8d0b4df6adc4c5d6810037a"
  },
  {
    "url": "google-fonts/s/robotomono/v6/L0x5DF4xlVMF-BfR8bXMIjhLq38.woff2",
    "revision": "0c94e034ca06357576c2d03d623e1fcd"
  },
  {
    "url": "component---src-pages-404-js-8639511a49403537e4be.js"
  },
  {
    "url": "0-e6dc059f2183c949ff8a.js"
  },
  {
    "url": "static/d/580/path---404-html-516-62a-HczQQcJX4DRuzlJYqTacHK6JUI.json"
  },
  {
    "url": "static/d/604/path---offline-plugin-app-shell-fallback-a-30-c5a-BawJvyh36KKFwbrWPg4a4aYuc8.json"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "67ed4a3366e89da4b2627b3bfa599ef0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)
const WHITELIST_KEY = `custom-navigation-whitelist`

const navigationRoute = new workbox.routing.NavigationRoute(({ event }) => {
  const { pathname } = new URL(event.request.url)

  return idbKeyval.get(WHITELIST_KEY).then((customWhitelist = []) => {
    // Respond with the offline shell if we match the custom whitelist
    if (customWhitelist.includes(pathname)) {
      const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
      const cacheName = workbox.core.cacheNames.precache

      return caches.match(offlineShell, { cacheName }).then(cachedResponse => {
        if (cachedResponse) return cachedResponse

        console.error(
          `The offline shell (${offlineShell}) was not found ` +
            `while attempting to serve a response for ${pathname}`
        )

        return fetch(offlineShell).then(response => {
          if (response.ok) {
            return caches.open(cacheName).then(cache =>
              // Clone is needed because put() consumes the response body.
              cache.put(offlineShell, response.clone()).then(() => response)
            )
          } else {
            return fetch(event.request)
          }
        })
      })
    }

    return fetch(event.request)
  })
})

workbox.routing.registerRoute(navigationRoute)

let updatingWhitelist = null

function rawWhitelistPathnames(pathnames) {
  if (updatingWhitelist !== null) {
    // Prevent the whitelist from being updated twice at the same time
    return updatingWhitelist.then(() => rawWhitelistPathnames(pathnames))
  }

  updatingWhitelist = idbKeyval
    .get(WHITELIST_KEY)
    .then((customWhitelist = []) => {
      pathnames.forEach(pathname => {
        if (!customWhitelist.includes(pathname)) customWhitelist.push(pathname)
      })

      return idbKeyval.set(WHITELIST_KEY, customWhitelist)
    })
    .then(() => {
      updatingWhitelist = null
    })

  return updatingWhitelist
}

function rawResetWhitelist() {
  if (updatingWhitelist !== null) {
    return updatingWhitelist.then(() => rawResetWhitelist())
  }

  updatingWhitelist = idbKeyval.set(WHITELIST_KEY, []).then(() => {
    updatingWhitelist = null
  })

  return updatingWhitelist
}

const messageApi = {
  whitelistPathnames(event) {
    let { pathnames } = event.data

    pathnames = pathnames.map(({ pathname, includesPrefix }) => {
      if (!includesPrefix) {
        return `${pathname}`
      } else {
        return pathname
      }
    })

    event.waitUntil(rawWhitelistPathnames(pathnames))
  },

  resetWhitelist(event) {
    event.waitUntil(rawResetWhitelist())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event)
})
