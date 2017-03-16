'use strict';

var fs = require('fs');
var path = require('path');
var through = require('through2');
var isValid = require('is-valid-app');
var findPkg = require('find-pkg');
var sync = require('sync-pkg');

module.exports = function(app, base, env) {
  if (!isValid(app, 'updater-bower')) return;

  /**
   * Update a `bower.json` file in the current working directory.
   *
   * ```sh
   * $ update bower
   * ```
   * @name bower
   * @api public
   */

  app.task('default', ['bower']);
  app.task('bower', function() {
    var pkgFile = findPkg.sync(app.cwd);
    var pkg = JSON.parse(fs.readFileSync(pkgFile));
    var cwd = path.dirname(pkgFile);

    return app.src('bower.json', {cwd: cwd})
      .pipe(through.obj(function(file, enc, next) {
        var bower = JSON.parse(file.contents);
        var obj = sync(pkg, bower, app.options);
        file.contents = new Buffer(JSON.stringify(obj, null, 2));
        next(null, file);
      }))
      .pipe(app.dest(cwd));
  });
};
