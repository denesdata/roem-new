if(!self.define){let e,s={};const r=(r,a)=>(r=new URL(r+".js",a).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,i)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let n={};const u=e=>r(e,l),o={module:{uri:l},exports:n,require:u};s[l]=Promise.all(a.map((e=>o[e]||u(e)))).then((e=>(i(...e),n)))}}define(["./workbox-30e9d199"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_app/immutable/assets/_layout.4665da2e.css",revision:null},{url:"_app/immutable/assets/favicon.495a9fe8.avif",revision:null},{url:"_app/immutable/assets/posts.2fa35b3e.css",revision:null},{url:"_app/immutable/chunks/_layout.e59680bc.js",revision:null},{url:"_app/immutable/chunks/0.f83fa6e0.js",revision:null},{url:"_app/immutable/chunks/1.0e7da399.js",revision:null},{url:"_app/immutable/chunks/10.f3a03535.js",revision:null},{url:"_app/immutable/chunks/11.879faab8.js",revision:null},{url:"_app/immutable/chunks/12.3f867f71.js",revision:null},{url:"_app/immutable/chunks/13.578bff68.js",revision:null},{url:"_app/immutable/chunks/14.2fb43398.js",revision:null},{url:"_app/immutable/chunks/15.8865e765.js",revision:null},{url:"_app/immutable/chunks/16.4abae49f.js",revision:null},{url:"_app/immutable/chunks/17.5af44096.js",revision:null},{url:"_app/immutable/chunks/18.c8a1a28e.js",revision:null},{url:"_app/immutable/chunks/19.c8d25bcd.js",revision:null},{url:"_app/immutable/chunks/2.0bf19932.js",revision:null},{url:"_app/immutable/chunks/20.50d25b36.js",revision:null},{url:"_app/immutable/chunks/21.cfee7249.js",revision:null},{url:"_app/immutable/chunks/3.27ab7d83.js",revision:null},{url:"_app/immutable/chunks/4.f3f7ff0e.js",revision:null},{url:"_app/immutable/chunks/5.4f519381.js",revision:null},{url:"_app/immutable/chunks/6.65324f05.js",revision:null},{url:"_app/immutable/chunks/7.41f80aef.js",revision:null},{url:"_app/immutable/chunks/8.085f70d9.js",revision:null},{url:"_app/immutable/chunks/9.c7d13630.js",revision:null},{url:"_app/immutable/chunks/index.375f9aaf.js",revision:null},{url:"_app/immutable/chunks/minidash.1f95197e.js",revision:null},{url:"_app/immutable/chunks/post_layout.114f647d.js",revision:null},{url:"_app/immutable/chunks/posts.f8b9a7c7.js",revision:null},{url:"_app/immutable/chunks/preload-helper.41c905a7.js",revision:null},{url:"_app/immutable/chunks/singletons.7f87f573.js",revision:null},{url:"_app/immutable/chunks/stores.448b910c.js",revision:null},{url:"_app/immutable/entry/_layout.svelte.c0978949.js",revision:null},{url:"_app/immutable/entry/_layout.ts.cccaddcc.js",revision:null},{url:"_app/immutable/entry/_page.svelte.45ba52c0.js",revision:null},{url:"_app/immutable/entry/about-careers-page.md.1d952d94.js",revision:null},{url:"_app/immutable/entry/about-data-page.md.67fe0f15.js",revision:null},{url:"_app/immutable/entry/about-prizes-page.md.a9f0438e.js",revision:null},{url:"_app/immutable/entry/about-project-page.svelte.md.939ad630.js",revision:null},{url:"_app/immutable/entry/about-publications-page.md.5c317579.js",revision:null},{url:"_app/immutable/entry/about-team-page.md.32587295.js",revision:null},{url:"_app/immutable/entry/app.7ee61caa.js",revision:null},{url:"_app/immutable/entry/blog-page.md.fbfe639a.js",revision:null},{url:"_app/immutable/entry/blog-pos4-page.md.58a2345c.js",revision:null},{url:"_app/immutable/entry/blog-post1-page.md.2a30fe6c.js",revision:null},{url:"_app/immutable/entry/blog-post2-page.md.c2831714.js",revision:null},{url:"_app/immutable/entry/blog-post3-page.md.38b31962.js",revision:null},{url:"_app/immutable/entry/blog-post5-page.md.4d085e4e.js",revision:null},{url:"_app/immutable/entry/blog-post6-page.md.2249faa3.js",revision:null},{url:"_app/immutable/entry/blog-post7-page.md.1576e3d5.js",revision:null},{url:"_app/immutable/entry/blog-post8-page.md.f9fef910.js",revision:null},{url:"_app/immutable/entry/blog-post9-page.md.3990e617.js",revision:null},{url:"_app/immutable/entry/error.svelte.98b38783.js",revision:null},{url:"_app/immutable/entry/explorables-page.md.d9ff3040.js",revision:null},{url:"_app/immutable/entry/highlights-page.md.d2d511e6.js",revision:null},{url:"_app/immutable/entry/modelling-page.md.5b0156f9.js",revision:null},{url:"_app/immutable/entry/start.078dce48.js",revision:null},{url:"assets/any@180.png",revision:"675b85dc6c662d9d0fcc2397ef94ec3e"},{url:"assets/any@192.png",revision:"957fd2c2bab7d28832fa570eab849f20"},{url:"assets/any@512.png",revision:"43951e8abfd9ae290f7fff02be6b97cc"},{url:"assets/logo/a.png",revision:"33882677d3c7dd0852998eec63631edb"},{url:"assets/logo/blue-globe.png",revision:"ccce41ce58a29b99ee26551046a5e88e"},{url:"assets/logo/c.png",revision:"96e7756668d565eb527602134333e310"},{url:"assets/logo/favicon.png",revision:"c488e12e761363c2ffe78fe6d3b28591"},{url:"assets/logo/fsega_en.png",revision:"86870c2e7c42094192277096efebf294"},{url:"assets/logo/fsega_hu.png",revision:"6f3e242eb80491322426f1abe0b4cb31"},{url:"assets/logo/fsega_ro.png",revision:"4c179679de0116f3f28c2ed181cf49c7"},{url:"assets/logo/logo_UBB_en.png",revision:"4505587291792016e188c15e7cb9fb44"},{url:"assets/logo/logo_UBB_hu.png",revision:"12da58bedb4fa35239ed6c53c5cffbc8"},{url:"assets/logo/logo_UBB_ro.png",revision:"b6e91d62d0688075b0be5c2671a39e0d"},{url:"assets/logo/orange-a.png",revision:"e86fb1968f6dae979d4bbb8b426f5f7c"},{url:"assets/logo/orange-c.png",revision:"22e039b6669fd3acd50f142a7e230546"},{url:"assets/logo/purple-globe.png",revision:"51b841db08332236dbdcd9b9cecf224e"},{url:"assets/logo/purple-globe180.png",revision:"ac261c0611b634cc154fafb2fcd93b02"},{url:"assets/logo/purple-globe192.png",revision:"ec6bae47d38f4b6217ed24f1918dd9f4"},{url:"assets/logo/purple-globe512.png",revision:"82d5b259dc3b59e2e0e5e1ca70dd3939"},{url:"assets/logo/r.png",revision:"fd58367d42a7aec62bbdbacf26089c96"},{url:"assets/logo/v.png",revision:"0c72759a8f94fced88096667ff3918af"},{url:"assets/logo/y.png",revision:"fa6f9e943de7e494694f88e7f8dc44e8"},{url:"assets/maskable@192.png",revision:"957fd2c2bab7d28832fa570eab849f20"},{url:"assets/maskable@512.png",revision:"43951e8abfd9ae290f7fff02be6b97cc"},{url:"favicon.png",revision:"fa7fb61fa0660847e91dc5d0dbb0219a"},{url:"server/_app/immutable/assets/_layout.a58efd0d.css",revision:null},{url:"server/_app/immutable/assets/favicon.495a9fe8.avif",revision:null},{url:"server/_app/immutable/assets/posts.8d6a7867.css",revision:null},{url:"server/chunks/footer.js",revision:"1dee595b34f4f8ec3ad8f4f6e3af2286"},{url:"server/chunks/hooks.server.js",revision:"6ed0137f5b1b428fcebfb4211d321ea5"},{url:"server/chunks/icon.js",revision:"893414de8396032ec32d7b96ae95395c"},{url:"server/chunks/index.js",revision:"79bab20fdfa81e19fed246aa5c7b8ab6"},{url:"server/chunks/index2.js",revision:"b0d90945da8c610b3f29a012499a4c52"},{url:"server/chunks/index3.js",revision:"b03b394f0916a71baa8905002f561cf7"},{url:"server/chunks/internal.js",revision:"e78040b278a6d3cb5a08b78993081532"},{url:"server/chunks/minidash.js",revision:"0ddde53d1c41c34b6342a9c4962e84b8"},{url:"server/chunks/posts.js",revision:"d3dab1a3245f570351d0440d233a728a"},{url:"server/chunks/prod-ssr.js",revision:"61cd30ecbbcd623b1d3535cb80266f5a"},{url:"server/chunks/site.js",revision:"46024e90c7fe1f907ebf1c6ae874831e"},{url:"server/chunks/stores.js",revision:"3e13d43cf1fe45c44b2bba5b49f81f9c"},{url:"server/entries/endpoints/atom.xml/_server.ts.js",revision:"9d652fd81c5d5e41cef548531c9a713d"},{url:"server/entries/endpoints/feed.json/_server.ts.js",revision:"213c6c6bcf86f503a4f3939acfc0e38d"},{url:"server/entries/endpoints/manifest.webmanifest/_server.ts.js",revision:"cac5ff7dd4676b4033b07a59525b551e"},{url:"server/entries/endpoints/posts.json/_server.ts.js",revision:"3680e786c090c488e5c4d8330cc5ea51"},{url:"server/entries/endpoints/sitemap.xml/_server.ts.js",revision:"5c9faeb7155f3e1dfda2753f8c54df83"},{url:"server/entries/endpoints/tags.json/_server.ts.js",revision:"3f706ebd4a24dd69c56d0f0efa797aab"},{url:"server/entries/fallbacks/error.svelte.js",revision:"11a31b1af17818090f0e4431fb6f929a"},{url:"server/entries/pages/_layout.svelte.js",revision:"274bc32d3a09969ad165bbaa852a1808"},{url:"server/entries/pages/_layout.ts.js",revision:"2263b7579c01ba9bff61b1d1fb5120ae"},{url:"server/entries/pages/_page.svelte.js",revision:"f76936e92c794ef9368b50def62262a0"},{url:"server/entries/pages/about/careers/_page.md.js",revision:"315fac0faedcf69aad1a4bceb3e04733"},{url:"server/entries/pages/about/data/_page.md.js",revision:"e4fff0baf721442074dfabeab4fc9350"},{url:"server/entries/pages/about/prizes/_page.md.js",revision:"a8f29ee4d67eb02a740afd3a842943da"},{url:"server/entries/pages/about/project/_page.svelte.md.js",revision:"c539ee5ee6f197e48e5eb26546451326"},{url:"server/entries/pages/about/publications/_page.md.js",revision:"6520cf9578f73be76759d8255597c8fa"},{url:"server/entries/pages/about/team/_page.md.js",revision:"f5400002584b626d6cec19efee179607"},{url:"server/entries/pages/blog/_page.md.js",revision:"0f79eda78b9ad8c2216b5a1e05282c1d"},{url:"server/entries/pages/blog/pos4/_page.md.js",revision:"c6bb47c2fff19056bc22141a6a2554c5"},{url:"server/entries/pages/blog/post1/_page.md.js",revision:"1596c8af84629e8e71f790be510ea561"},{url:"server/entries/pages/blog/post2/_page.md.js",revision:"cea85f4a698333ef13000a38809d4971"},{url:"server/entries/pages/blog/post3/_page.md.js",revision:"3748b99cf3d56fda68218148157a2cd4"},{url:"server/entries/pages/blog/post5/_page.md.js",revision:"86c74c46a7297152a8cb4cb58d9350db"},{url:"server/entries/pages/blog/post6/_page.md.js",revision:"4f5c5b89f9736256de079533a46b87d9"},{url:"server/entries/pages/blog/post7/_page.md.js",revision:"db447fec03e3c7640d35ed56e0d8171e"},{url:"server/entries/pages/blog/post8/_page.md.js",revision:"0f0b1a3fcc02517214ca72ccd5cc4b44"},{url:"server/entries/pages/blog/post9/_page.md.js",revision:"5081f3fd46477f5e91d656cd64a6d91d"},{url:"server/entries/pages/explorables/_page.md.js",revision:"5758b07115f463ec4ded95f50e988592"},{url:"server/entries/pages/highlights/_page.md.js",revision:"fa5c33ff9f2f28524751350493d0c071"},{url:"server/entries/pages/modelling/_page.md.js",revision:"00dd2e36e185399bca8f346cf262c96a"},{url:"server/index.js",revision:"ac2be3f7a6ec269db42943354a46376e"},{url:"server/internal.js",revision:"e0a9404c28f3dfa4c5b401181bed13f7"},{url:"server/manifest-full.js",revision:"3b8263d1dd9d8559be0a806b027cbf6f"},{url:"server/nodes/0.js",revision:"94d35197cee576736e350e70a1f3b59f"},{url:"server/nodes/1.js",revision:"b9fb9548d69b97b47bf21126f1a9af89"},{url:"server/nodes/10.js",revision:"958ebdb8a9cf58cd744e37833c933590"},{url:"server/nodes/11.js",revision:"a397ea3b61313d754be6eb1ca83591b2"},{url:"server/nodes/12.js",revision:"6c0b66134617d6a4f6d65fe5122276eb"},{url:"server/nodes/13.js",revision:"601a6f0323cabc7a2e8346331bc2ec6f"},{url:"server/nodes/14.js",revision:"745c0b7a02f19c6e1e74fad27b236c15"},{url:"server/nodes/15.js",revision:"2447c6ad46a2c9eac834174cf56f5c23"},{url:"server/nodes/16.js",revision:"dcee489e81e914f483792c2c9df5a8ec"},{url:"server/nodes/17.js",revision:"ea3b70cf5d30196339994bb7d1b810c4"},{url:"server/nodes/18.js",revision:"3e06d70adb510195664ef2ebe9b35033"},{url:"server/nodes/19.js",revision:"5fd1c78f95ac50590f9f964a99228828"},{url:"server/nodes/2.js",revision:"7ac808dd59dee58b6ed718a56c351662"},{url:"server/nodes/20.js",revision:"4dd429dfcb7b0502ebb09c66acfecaea"},{url:"server/nodes/21.js",revision:"81923e279a117204a4b90bfe69e2f818"},{url:"server/nodes/3.js",revision:"effbb4abe33b31915ff2d78b3488cee5"},{url:"server/nodes/4.js",revision:"149a7c44a52101e9b9aaca2d3a12d86c"},{url:"server/nodes/5.js",revision:"837e84927f204d781babeedb850232eb"},{url:"server/nodes/6.js",revision:"c2cc8f57b408fd6ecb7286c7f5a2f2ef"},{url:"server/nodes/7.js",revision:"e22e3d1ce8bb198a6783d7a2d6f24681"},{url:"server/nodes/8.js",revision:"bdc52451b2c36e8b730bd7a48718204d"},{url:"server/nodes/9.js",revision:"8e755d984cb8a89877bc64ff812e3169"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("./")))}));
