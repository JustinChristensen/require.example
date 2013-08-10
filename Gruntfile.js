module.exports = function (grunt) {
  'use strict';

  var r = require('requirejs');

  grunt.initConfig({
    dist: {
      production: {
        options: {
          baseUrl: 'js',
          name: "main",
          paths: {
            jquery: 'empty:'
          },
          out: "js/main.min.js"
        }
      }
    }
  });

  grunt.registerMultiTask('dist', 'Concatenate and minify JS and CSS.', function () {
    r.optimize(this.options(), this.async());
  });

};
