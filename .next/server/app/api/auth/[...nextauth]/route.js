"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "@prisma/client/runtime/library":
/*!*************************************************!*\
  !*** external "@prisma/client/runtime/library" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@prisma/client/runtime/library");

/***/ }),

/***/ "./action-async-storage.external?8dda":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external?3d59":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external?16bc":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=N%3A%5CProjects%5Cmuzer2%5Cmuzer%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=N%3A%5CProjects%5Cmuzer2%5Cmuzer&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=N%3A%5CProjects%5Cmuzer2%5Cmuzer%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=N%3A%5CProjects%5Cmuzer2%5Cmuzer&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var N_Projects_muzer2_muzer_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"N:\\\\Projects\\\\muzer2\\\\muzer\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: N_Projects_muzer2_muzer_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNC4yLjdfcmVhY3QtZG9tQDE4LjMuMV9yZWFjdEAxOC4zLjFfX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1OJTNBJTVDUHJvamVjdHMlNUNtdXplcjIlNUNtdXplciU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9TiUzQSU1Q1Byb2plY3RzJTVDbXV6ZXIyJTVDbXV6ZXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ29CO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLz85ZGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIk46XFxcXFByb2plY3RzXFxcXG11emVyMlxcXFxtdXplclxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJOOlxcXFxQcm9qZWN0c1xcXFxtdXplcjJcXFxcbXV6ZXJcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=N%3A%5CProjects%5Cmuzer2%5Cmuzer%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=N%3A%5CProjects%5Cmuzer2%5Cmuzer&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/.pnpm/next-auth@4.24.7_next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next-auth/providers/google.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/.pnpm/next-auth@4.24.7_next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/.pnpm/next-auth@4.24.7_next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _schema_credentials_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/schema/credentials-schema */ \"(rsc)/./schema/credentials-schema.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/.pnpm/bcryptjs@2.4.3/node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _prisma_client_runtime_library__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @prisma/client/runtime/library */ \"@prisma/client/runtime/library\");\n/* harmony import */ var _prisma_client_runtime_library__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_prisma_client_runtime_library__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_3___default()({\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID ?? \"\",\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? \"\"\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            credentials: {\n                email: {\n                    type: \"email\"\n                },\n                password: {\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials || !credentials.email || !credentials.password) {\n                    return null;\n                }\n                const emailValidation = _schema_credentials_schema__WEBPACK_IMPORTED_MODULE_4__.emailSchema.safeParse(credentials.email);\n                if (!emailValidation.success) {\n                    throw new Error(\"Invalid email\");\n                }\n                const passwordValidation = _schema_credentials_schema__WEBPACK_IMPORTED_MODULE_4__.passwordSchema.safeParse(credentials.password);\n                if (!passwordValidation.success) {\n                    throw new Error(passwordValidation.error.issues[0].message);\n                }\n                try {\n                    const user = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n                        where: {\n                            email: emailValidation.data\n                        }\n                    });\n                    //console.log(user);\n                    if (!user) {\n                        const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_5___default().hash(passwordValidation.data, 10);\n                        const newUser = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n                            data: {\n                                email: emailValidation.data,\n                                password: hashedPassword,\n                                provider: \"Credentials\"\n                            }\n                        });\n                        //  console.log(newUser);\n                        return newUser;\n                    }\n                    if (!user.password) {\n                        const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_5___default().hash(passwordValidation.data, 10);\n                        const authUser = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.update({\n                            where: {\n                                email: emailValidation.data\n                            },\n                            data: {\n                                password: hashedPassword\n                            }\n                        });\n                        return authUser;\n                    }\n                    const passwordVerification = await bcryptjs__WEBPACK_IMPORTED_MODULE_5___default().compare(passwordValidation.data, user.password);\n                    if (!passwordVerification) {\n                        throw new Error(\"Invalid password\");\n                    }\n                    return user;\n                } catch (error) {\n                    if (error instanceof _prisma_client_runtime_library__WEBPACK_IMPORTED_MODULE_6__.PrismaClientInitializationError) {\n                        throw new Error(\"Internal server error\");\n                    }\n                    console.log(error);\n                    throw error;\n                }\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/auth\"\n    },\n    secret: process.env.NEXTAUTH_SECRET ?? \"secret\",\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async jwt ({ token, account, profile }) {\n            if (account && profile) {\n                token.email = profile.email;\n                token.id = account.access_token;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            try {\n                const user = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n                    where: {\n                        email: token.email\n                    }\n                });\n                if (user) {\n                    session.user.id = user.id;\n                }\n            } catch (error) {\n                console.log(error);\n                throw error;\n            }\n            return session;\n        },\n        async signIn ({ account, profile }) {\n            try {\n                if (account?.provider === \"google\") {\n                    const user = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n                        where: {\n                            email: profile?.email\n                        }\n                    });\n                    if (!user) {\n                        const newUser = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n                            data: {\n                                email: profile?.email,\n                                name: profile?.name || undefined,\n                                provider: \"Google\"\n                            }\n                        });\n                    }\n                }\n                return true;\n            } catch (error) {\n                console.log(error);\n                //throw error;\n                return false;\n            }\n        }\n    }\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDb0I7QUFDRTtBQUNaO0FBRTRCO0FBQzVDO0FBQ21EO0FBRWpGLE1BQU1RLFVBQVVMLGdEQUFRQSxDQUFDO0lBQ3ZCTSxXQUFXO1FBQ1RSLHNFQUFjQSxDQUFDO1lBQ2JTLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCLElBQUk7WUFDMUNDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csb0JBQW9CLElBQUk7UUFDcEQ7UUFDQWIsMkVBQVdBLENBQUM7WUFDVmMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsTUFBTTtnQkFBUTtnQkFDdkJDLFVBQVU7b0JBQUVELE1BQU07Z0JBQVc7WUFDL0I7WUFDQSxNQUFNRSxXQUFVSixXQUFXO2dCQUN6QixJQUFJLENBQUNBLGVBQWUsQ0FBQ0EsWUFBWUMsS0FBSyxJQUFJLENBQUNELFlBQVlHLFFBQVEsRUFBRTtvQkFDL0QsT0FBTztnQkFDVDtnQkFFQSxNQUFNRSxrQkFBa0JqQixtRUFBV0EsQ0FBQ2tCLFNBQVMsQ0FBQ04sWUFBWUMsS0FBSztnQkFFL0QsSUFBSSxDQUFDSSxnQkFBZ0JFLE9BQU8sRUFBRTtvQkFDNUIsTUFBTSxJQUFJQyxNQUFNO2dCQUNsQjtnQkFFQSxNQUFNQyxxQkFBcUJwQixzRUFBY0EsQ0FBQ2lCLFNBQVMsQ0FBQ04sWUFBWUcsUUFBUTtnQkFFeEUsSUFBSSxDQUFDTSxtQkFBbUJGLE9BQU8sRUFBRTtvQkFDL0IsTUFBTSxJQUFJQyxNQUFNQyxtQkFBbUJDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsT0FBTztnQkFDNUQ7Z0JBRUEsSUFBSTtvQkFDRixNQUFNQyxPQUFPLE1BQU03QiwrQ0FBWUEsQ0FBQzZCLElBQUksQ0FBQ0MsVUFBVSxDQUFDO3dCQUM5Q0MsT0FBTzs0QkFDTGQsT0FBT0ksZ0JBQWdCVyxJQUFJO3dCQUM3QjtvQkFDRjtv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T0FBTztnQkFDZGdCLFFBQVFDLEdBQUcsQ0FBQ2pCO2dCQUNaLGNBQWM7Z0JBQ2QsT0FBTztZQUNUO1FBQ0Y7SUFDRjtBQUNGO0FBRTJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/YzhhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hQ2xpZW50IGZyb20gXCJAL2xpYi9kYlwiO1xyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XHJcbmltcG9ydCBDcmVkZW50aWFscyBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgTmV4dEF1dGgsIHsgU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IHsgSldUIH0gZnJvbSBcIm5leHQtYXV0aC9qd3RcIjtcclxuaW1wb3J0IHsgZW1haWxTY2hlbWEsIHBhc3N3b3JkU2NoZW1hIH0gZnJvbSBcIkAvc2NoZW1hL2NyZWRlbnRpYWxzLXNjaGVtYVwiO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnRJbml0aWFsaXphdGlvbkVycm9yIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50L3J1bnRpbWUvbGlicmFyeVwiO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQgPz8gXCJcIixcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCA/PyBcIlwiXHJcbiAgICB9KSxcclxuICAgIENyZWRlbnRpYWxzKHtcclxuICAgICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICBlbWFpbDogeyB0eXBlOiBcImVtYWlsXCIgfSxcclxuICAgICAgICBwYXNzd29yZDogeyB0eXBlOiBcInBhc3N3b3JkXCIgfVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcclxuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzIHx8ICFjcmVkZW50aWFscy5lbWFpbCB8fCAhY3JlZGVudGlhbHMucGFzc3dvcmQpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZW1haWxWYWxpZGF0aW9uID0gZW1haWxTY2hlbWEuc2FmZVBhcnNlKGNyZWRlbnRpYWxzLmVtYWlsKTtcclxuXHJcbiAgICAgICAgaWYgKCFlbWFpbFZhbGlkYXRpb24uc3VjY2Vzcykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBlbWFpbFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkVmFsaWRhdGlvbiA9IHBhc3N3b3JkU2NoZW1hLnNhZmVQYXJzZShjcmVkZW50aWFscy5wYXNzd29yZCk7XHJcblxyXG4gICAgICAgIGlmICghcGFzc3dvcmRWYWxpZGF0aW9uLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihwYXNzd29yZFZhbGlkYXRpb24uZXJyb3IuaXNzdWVzWzBdLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWFDbGllbnQudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICBlbWFpbDogZW1haWxWYWxpZGF0aW9uLmRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyh1c2VyKTtcclxuXHJcblxyXG4gICAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmRWYWxpZGF0aW9uLmRhdGEsIDEwKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCBwcmlzbWFDbGllbnQudXNlci5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbFZhbGlkYXRpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcclxuICAgICAgICAgICAgICAgIHByb3ZpZGVyOiBcIkNyZWRlbnRpYWxzXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKG5ld1VzZXIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3VXNlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoIXVzZXIucGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZFZhbGlkYXRpb24uZGF0YSwgMTApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYXV0aFVzZXIgPSBhd2FpdCBwcmlzbWFDbGllbnQudXNlci51cGRhdGUoe1xyXG4gICAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWxWYWxpZGF0aW9uLmRhdGFcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhdXRoVXNlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb25zdCBwYXNzd29yZFZlcmlmaWNhdGlvbiA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkVmFsaWRhdGlvbi5kYXRhLCB1c2VyLnBhc3N3b3JkKTtcclxuXHJcbiAgICAgICAgICBpZiAoIXBhc3N3b3JkVmVyaWZpY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGFzc3dvcmRcIik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFByaXNtYUNsaWVudEluaXRpYWxpemF0aW9uRXJyb3IpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgXSxcclxuICBwYWdlczoge1xyXG4gICAgc2lnbkluOiBcIi9hdXRoXCJcclxuICB9LFxyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVUID8/IFwic2VjcmV0XCIsXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgc3RyYXRlZ3k6IFwiand0XCJcclxuICB9LFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIGFjY291bnQsIHByb2ZpbGUgfSkge1xyXG4gICAgICBpZiAoYWNjb3VudCAmJiBwcm9maWxlKSB7XHJcbiAgICAgICAgdG9rZW4uZW1haWwgPSBwcm9maWxlLmVtYWlsIGFzIHN0cmluZztcclxuICAgICAgICB0b2tlbi5pZCA9IGFjY291bnQuYWNjZXNzX3Rva2VuO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH0sXHJcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfToge1xyXG4gICAgICBzZXNzaW9uOiBTZXNzaW9uLFxyXG4gICAgICB0b2tlbjogSldUO1xyXG4gICAgfSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWFDbGllbnQudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgIGVtYWlsOiB0b2tlbi5lbWFpbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdXNlci5pZDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIHNpZ25Jbih7IGFjY291bnQsIHByb2ZpbGUgfSkge1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAoYWNjb3VudD8ucHJvdmlkZXIgPT09IFwiZ29vZ2xlXCIpIHtcclxuXHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hQ2xpZW50LnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgZW1haWw6IHByb2ZpbGU/LmVtYWlsISxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgcHJpc21hQ2xpZW50LnVzZXIuY3JlYXRlKHtcclxuICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogcHJvZmlsZT8uZW1haWwhLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogcHJvZmlsZT8ubmFtZSB8fCB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBwcm92aWRlcjogXCJHb29nbGVcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAvL3Rocm93IGVycm9yO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07Il0sIm5hbWVzIjpbInByaXNtYUNsaWVudCIsIkdvb2dsZVByb3ZpZGVyIiwiQ3JlZGVudGlhbHMiLCJOZXh0QXV0aCIsImVtYWlsU2NoZW1hIiwicGFzc3dvcmRTY2hlbWEiLCJiY3J5cHQiLCJQcmlzbWFDbGllbnRJbml0aWFsaXphdGlvbkVycm9yIiwiaGFuZGxlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJlbWFpbFZhbGlkYXRpb24iLCJzYWZlUGFyc2UiLCJzdWNjZXNzIiwiRXJyb3IiLCJwYXNzd29yZFZhbGlkYXRpb24iLCJlcnJvciIsImlzc3VlcyIsIm1lc3NhZ2UiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiZGF0YSIsImhhc2hlZFBhc3N3b3JkIiwiaGFzaCIsIm5ld1VzZXIiLCJjcmVhdGUiLCJwcm92aWRlciIsImF1dGhVc2VyIiwidXBkYXRlIiwicGFzc3dvcmRWZXJpZmljYXRpb24iLCJjb21wYXJlIiwiY29uc29sZSIsImxvZyIsInBhZ2VzIiwic2lnbkluIiwic2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJhY2NvdW50IiwicHJvZmlsZSIsImlkIiwiYWNjZXNzX3Rva2VuIiwibmFtZSIsInVuZGVmaW5lZCIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\nconst prismaClient = globalThis.prismaGlobal ?? prismaClientSingleton();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prismaClient);\nif (true) {\n    globalThis.prismaGlobal = prismaClient;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRzlDLE1BQU1DLHdCQUF3QjtJQUM1QixPQUFPLElBQUlELHdEQUFZQTtBQUN6QjtBQU1BLE1BQU1FLGVBQXlEQyxXQUFXQyxZQUFZLElBQUlIO0FBRTFGLGlFQUFlQyxZQUFZQSxFQUFDO0FBRTVCLElBQUlHLElBQXFDLEVBQUU7SUFDekNGLFdBQVdDLFlBQVksR0FBR0Y7QUFDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9saWIvZGIudHM/MWRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcblxyXG5jb25zdCBwcmlzbWFDbGllbnRTaW5nbGV0b24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcmlzbWFDbGllbnQoKTtcclxufTtcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICB2YXIgcHJpc21hR2xvYmFsOiB1bmRlZmluZWQgfCBSZXR1cm5UeXBlPHR5cGVvZiBwcmlzbWFDbGllbnRTaW5nbGV0b24+O1xyXG59XHJcblxyXG5jb25zdCBwcmlzbWFDbGllbnQ6IFJldHVyblR5cGU8dHlwZW9mIHByaXNtYUNsaWVudFNpbmdsZXRvbj4gPSBnbG9iYWxUaGlzLnByaXNtYUdsb2JhbCA/PyBwcmlzbWFDbGllbnRTaW5nbGV0b24oKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaXNtYUNsaWVudDtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICBnbG9iYWxUaGlzLnByaXNtYUdsb2JhbCA9IHByaXNtYUNsaWVudDtcclxufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWFDbGllbnRTaW5nbGV0b24iLCJwcmlzbWFDbGllbnQiLCJnbG9iYWxUaGlzIiwicHJpc21hR2xvYmFsIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./schema/credentials-schema.ts":
/*!**************************************!*\
  !*** ./schema/credentials-schema.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   emailSchema: () => (/* binding */ emailSchema),\n/* harmony export */   passwordSchema: () => (/* binding */ passwordSchema)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/.pnpm/zod@3.23.8/node_modules/zod/lib/index.mjs\");\n\nconst emailSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.string({\n    message: \"Email is required\"\n}).email({\n    message: \"Invalid email\"\n});\nconst passwordSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.string({\n    message: \"Password is required\"\n}).min(8, {\n    message: \"Password must be at least 8 characters\"\n}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$/, {\n    message: \"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zY2hlbWEvY3JlZGVudGlhbHMtc2NoZW1hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3QjtBQUVqQixNQUFNQyxjQUFjRCxrQ0FBQ0EsQ0FDekJFLE1BQU0sQ0FBQztJQUFFQyxTQUFTO0FBQW9CLEdBQ3RDQyxLQUFLLENBQUM7SUFBRUQsU0FBUztBQUFnQixHQUFHO0FBRWhDLE1BQU1FLGlCQUFpQkwsa0NBQUNBLENBQzVCRSxNQUFNLENBQUM7SUFBRUMsU0FBUztBQUF1QixHQUN6Q0csR0FBRyxDQUFDLEdBQUc7SUFBRUgsU0FBUztBQUF5QyxHQUMzREksS0FBSyxDQUFDLHFFQUFxRTtJQUMxRUosU0FDRTtBQUNKLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9zY2hlbWEvY3JlZGVudGlhbHMtc2NoZW1hLnRzP2Q3MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbWFpbFNjaGVtYSA9IHpcclxuICAuc3RyaW5nKHsgbWVzc2FnZTogXCJFbWFpbCBpcyByZXF1aXJlZFwiIH0pXHJcbiAgLmVtYWlsKHsgbWVzc2FnZTogXCJJbnZhbGlkIGVtYWlsXCIgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgcGFzc3dvcmRTY2hlbWEgPSB6XHJcbiAgLnN0cmluZyh7IG1lc3NhZ2U6IFwiUGFzc3dvcmQgaXMgcmVxdWlyZWRcIiB9KVxyXG4gIC5taW4oOCwgeyBtZXNzYWdlOiBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzXCIgfSlcclxuICAucmVnZXgoL14oPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipcXGQpKD89LipbQCQhJSo/Jl0pW0EtWmEtelxcZEAkISUqPyZdKyQvLCB7XHJcbiAgICBtZXNzYWdlOlxyXG4gICAgICBcIlBhc3N3b3JkIG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgdXBwZXJjYXNlIGxldHRlciwgb25lIGxvd2VyY2FzZSBsZXR0ZXIsIG9uZSBudW1iZXIsIGFuZCBvbmUgc3BlY2lhbCBjaGFyYWN0ZXJcIixcclxuICB9KTsiXSwibmFtZXMiOlsieiIsImVtYWlsU2NoZW1hIiwic3RyaW5nIiwibWVzc2FnZSIsImVtYWlsIiwicGFzc3dvcmRTY2hlbWEiLCJtaW4iLCJyZWdleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./schema/credentials-schema.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1","vendor-chunks/next-auth@4.24.7_next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-dom@18.3.1_react@18.3.1__react@18.3.1","vendor-chunks/@babel+runtime@7.25.6","vendor-chunks/jose@4.15.9","vendor-chunks/openid-client@5.7.0","vendor-chunks/uuid@8.3.2","vendor-chunks/oauth@0.9.15","vendor-chunks/@panva+hkdf@1.2.1","vendor-chunks/yallist@4.0.0","vendor-chunks/preact-render-to-string@5.2.6_preact@10.24.0","vendor-chunks/oidc-token-hash@5.0.3","vendor-chunks/bcryptjs@2.4.3","vendor-chunks/zod@3.23.8","vendor-chunks/preact@10.24.0","vendor-chunks/object-hash@2.2.0","vendor-chunks/lru-cache@6.0.0","vendor-chunks/cookie@0.5.0"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=N%3A%5CProjects%5Cmuzer2%5Cmuzer%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=N%3A%5CProjects%5Cmuzer2%5Cmuzer&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();