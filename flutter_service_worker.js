'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "426313f2f3133c2f20415344c4a22df3",
"index.html": "a08bdc1ae2ce7857dcd51fee2e271c3e",
"/": "a08bdc1ae2ce7857dcd51fee2e271c3e",
"main.dart.js": "a46a04e6a3fe04fb5b5e31144e0fdf03",
"favicon.png": "cc76297460fa9469282288582fd3f243",
"icons/Icon-192.png": "60880bdb598b811507f0cd180b91a33e",
"icons/Icon-512.png": "75c4aa327e766868eb9ec2e9d7712691",
"manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
"assets/AssetManifest.json": "c886477273c399adda9d3578c8fb2ac1",
"assets/NOTICES": "406d3c03ef69c20d2952ae1c4dc9f451",
"assets/FontManifest.json": "4ec879f52b31c8ff6853ca4419262fe4",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/line_awesome_flutter/lib/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/eBB/eBB_6.png": "1793f273f0498c7bf11a84e3121c6136",
"assets/assets/images/eBB/eBB_7.png": "0c65316a591f3054d3d8427bc6d2a390",
"assets/assets/images/eBB/eBB_5.png": "cad51568a99dae0d215166c11f1127cf",
"assets/assets/images/eBB/eBB_4.png": "7566be8092d0929862900f8be771461f",
"assets/assets/images/eBB/eBB_1.png": "2805b8b01c542f3415ed4a59e19b21e2",
"assets/assets/images/eBB/eBB_3.png": "7323b277f294b95fc478b310012bcbd6",
"assets/assets/images/eBB/eBB_10.png": "8d0427571e798309b13e55f2d63b6c79",
"assets/assets/images/eBB/eBB_2.png": "e230331fc3c4e3c374d3923aaa9740de",
"assets/assets/images/eBB/eBB_9.png": "a50079a8437e95e793ef9720b3a27d96",
"assets/assets/images/eBB/eBB_8.png": "e9ba37a58647f113fa33689b963d9664",
"assets/assets/images/google_badge.png": "9f03b8da78bd9838dbe07edd971cf55b",
"assets/assets/images/app_store_badge.png": "fa0b6b5be80209d906731115fc2a63a4",
"assets/assets/images/trax/trax_2.png": "bcb3be0c7f7e8751c8f69e5f8fd1ae32",
"assets/assets/images/trax/trax_3.png": "a926b20c560eaeada63a777c46d52275",
"assets/assets/images/trax/trax_1.png": "3c1df01e971dee03312e2adc49d0c918",
"assets/assets/images/trax/trax_4.png": "a24e45ca7a3f3c35c4b81db535061054",
"assets/assets/images/trax/trax_5.png": "d6219d3a4ad7a68325ee83b6a568124d",
"assets/assets/images/trax/trax_6.png": "db87f5e2159ecd4a47cd61b655c19ba3",
"assets/assets/images/cannabook/CannaBook_1.png": "1ffa32596ff4b7c5e3f04d1796183b2e",
"assets/assets/images/cannabook/CannaBook_3.png": "7e96675ec0a6875775445357bbfd8b5b",
"assets/assets/images/cannabook/CannaBook_2.png": "d4f5e9c7b634b9c2a91d9ea0114b9da3",
"assets/assets/images/cannabook/CannaBook_6.png": "3d96a1cc794ef09dac85e0f36e6df199",
"assets/assets/images/cannabook/CannaBook_7.png": "60ddadeea9f217d6bf9210a25b5b39b4",
"assets/assets/images/cannabook/CannaBook_5.png": "c18cb93e9e583e216a3c9059404f73ba",
"assets/assets/images/cannabook/CannaBook_4.png": "ea289cb0aa89b47a8c8c1578809cd78d",
"assets/assets/images/logo/eBB_logo.png": "3fbd8e0c7451cc99ea7aca98bdab3eeb",
"assets/assets/images/logo/trax_logo.png": "2c7006a1fa14bf3c74de7bb5227b7f5b",
"assets/assets/images/logo/CannaBook_logo.png": "535c8f93f2c1d1c623ea2c744ce6ac8e",
"assets/assets/images/profile.jpg": "e18b373f6c19e78217e378c039ecbb08",
"assets/assets/images/weatherAPI/weatherAPI_3.png": "75e495c5a95b78d5d359aba5dcc4089c",
"assets/assets/images/weatherAPI/weatherAPI_2.png": "7b9abce0abae99fc331add9edf149663",
"assets/assets/images/weatherAPI/weatherAPI_1.png": "604805a908f15d808bcc46cc165862eb",
"assets/assets/images/weatherAPI/weatherAPI_4.png": "f9af4b71cffa493655bc43ef971a6b46",
"assets/assets/images/photon/photon_5.png": "4e185dcbcc67e6a7cc7ade27ee1a3be0",
"assets/assets/images/photon/photon_4.png": "9d661cab3b345d602bdfc2983a05dc3c",
"assets/assets/images/photon/photon_6.png": "41074ad77c0bf104e438d378d07551bb",
"assets/assets/images/photon/photon_7.png": "a031cf47a1c6e28fe821196a25c2fcee",
"assets/assets/images/photon/photon_3.png": "addedf6ee526208e8ef8ca8435627ae2",
"assets/assets/images/photon/photon_2.png": "24c6e99c493551c41ae0b786e45181f4",
"assets/assets/images/photon/photon_1.png": "521514d5f507f8faa00a3e09887878c4",
"assets/assets/images/bg.jpg": "7f0515c0cc48b41cc7630010559afc76",
"assets/assets/icons/Portfolio.ttf": "aae515cb41dd786d864806c81d0ed5fe",
"assets/assets/fonts/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/assets/fonts/Roboto-Light.ttf": "6090d256d88dcd7f0244eaa4a3eafbba",
"assets/assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/fonts/Roboto-Thin.ttf": "4f0b85f5b601a405bdc7b23aad6d2a47",
"assets/assets/fonts/Roboto-Black.ttf": "301fe70f8f0f41c236317504ec05f820"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
