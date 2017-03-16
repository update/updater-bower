<p align="center">

<a href="https://github.com/update/update">
<img height="150" width="150" src="https://raw.githubusercontent.com/update/update/master/docs/logo.png">
</a>
</p>

# updater-bower [![NPM version](https://img.shields.io/npm/v/updater-bower.svg?style=flat)](https://www.npmjs.com/package/updater-bower) [![NPM monthly downloads](https://img.shields.io/npm/dm/updater-bower.svg?style=flat)](https://npmjs.org/package/updater-bower)  [![NPM total downloads](https://img.shields.io/npm/dt/updater-bower.svg?style=flat)](https://npmjs.org/package/updater-bower) [![Linux Build Status](https://img.shields.io/travis/update/updater-bower.svg?style=flat&label=Travis)](https://travis-ci.org/update/updater-bower) [![Windows Build Status](https://img.shields.io/appveyor/ci/update/updater-bower.svg?style=flat&label=AppVeyor)](https://ci.appveyor.com/project/update/updater-bower) [![Build Status](https://img.shields.io/travis/update/updater-bower.svg?style=flat)](https://travis-ci.org/update/updater-bower)

> Update bower.json with data from package.json.

## Getting started

**Install [update](https://github.com/update/update)**

If you haven't done so already, you will need to install `update` first. You can do so now with the following command:

```sh
$ npm install --global update
```

This adds the `update` command to your system path, allowing it to be run from any directory.

**Install updater-bower**

Next, install this updater with the following command:

```sh
$ npm install --global updater-bower
```

**Run the updater**

_Always make sure your work is committed before running any updater! This updater will modify the contents of `bower.json`_.

Run the updater with the following command:

```sh
$ update bower
```

This will run this updater's `default` task, which uses [sync-pkg](https://github.com/jonschlinkert/sync-pkg) to update the contents of `bower.json`. See [sync-pkg](https://github.com/jonschlinkert/sync-pkg) for more information or to create bug reports or feature requests.

## About

### Related projects

* [update-contributors](https://www.npmjs.com/package/update-contributors): Update contributors property in package.json with current github contributors. | [homepage](https://github.com/doowb/update-contributors "Update contributors property in package.json with current github contributors.")
* [update-package](https://www.npmjs.com/package/update-package): Update/lint a package.json based on a defaults. | [homepage](https://github.com/jonschlinkert/update-package "Update/lint a package.json based on a defaults.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.4.3, on March 16, 2017._