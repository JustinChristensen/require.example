module.exports = function (grunt) {
  'use strict';

  var r = require('requirejs');

  grunt.initConfig({
    dist: {
      production: {
        options: {
          requirejs: {
            baseUrl: "js",
            name: "main",
            paths: {
              jquery: "empty:"
            },
            out: "application.min.js",
            include: "lib/require.js",
            preserveLicenseComments: false
          },

          compass: {
          
          }
        }
      }
    }
  });

  grunt.registerMultiTask('dist', 'Concatenate and minify JS and CSS.', function () {
    r.optimize(this.options().requirejs, this.async());
  });

};
