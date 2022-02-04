Change Log
=======================================
All notable changes will be documented in this file. `file-path-filter` adheres to [Semantic Versioning](http://semver.org/).


[v3.0.0](https://github.com/JS-DevTools/file-path-filter/tree/v3.0.0) (2020-02-16)
----------------------------------------------------------------------------------------------

- Moved File Path Filter to the [@JSDevTools scope](https://www.npmjs.com/org/jsdevtools) on NPM

- The "file-path-filter" NPM package is now just a wrapper around the scoped "@jsdevtools/file-path-filter" package

[Full Changelog](https://github.com/JS-DevTools/file-path-filter/compare/v2.2.2...v3.0.0)


[v2.2.0](https://github.com/JS-DevTools/file-path-filter/tree/v2.2.0) (2019-08-19)
----------------------------------------------------------------------------------------------

- Added a new `sep` option, which lets you override the default path separator. This is useful when filtering a list of paths from a different operating system.

[Full Changelog](https://github.com/JS-DevTools/file-path-filter/compare/v2.1.0...v2.2.0)



[v2.1.0](https://github.com/JS-DevTools/file-path-filter/tree/v2.1.0) (2019-08-19)
----------------------------------------------------------------------------------------------

- In addition to the default `filePathFilter()` function, there is now a `createFilter()` named export that allows you to pass an options object to customize the filter behavior. For example, you can use `createFilter()` to filter arrays of custom types, rather than just string arrays. See [the documentation](README.md#createfilteroptions-criteria) for details

[Full Changelog](https://github.com/JS-DevTools/file-path-filter/compare/v2.0.1...v2.1.0)



[v2.0.0](https://github.com/JS-DevTools/file-path-filter/tree/v2.0.0) (2019-08-16)
----------------------------------------------------------------------------------------------

- You can now append additional inclusion/exclusion criteria to an existing filter function. Just pass the new criteria and the existing filter function to `filePathFilter()`.

**Example:**

```javascript
const filePathFilter = require("file-path-filter");

const paths = [
  "/my/website/favicon.ico",
  "/my/website/index.html",
  "/my/website/styles.css",
  "/my/website/blog/post.html",
  "/my/website/blog/styles.css",
];

// Create a filter that includes all HTML files
let filter = filePathFilter("**/*.html");
paths.filter(filter);

// [
//   "/my/website/index.html",
//   "/my/website/blog/post.html",
// ]


// Now exclude the blog directory
filter = filePathFilter("!**/blog/**", filter);
paths.filter(filter);

// [
//   "/my/website/index.html",
// ]


// Now include all CSS files
filter = filePathFilter("**/*.css", filter);
console.log(paths.filter(filter));

// Nnotice that it doesn't include the blog's CSS file,
// since the blog directory was excluded above
// [
//   "/my/website/index.html",
//   "/my/website/styles.css",
// ]
```

[Full Changelog](https://github.com/JS-DevTools/file-path-filter/compare/v1.0.3...v2.0.0)
