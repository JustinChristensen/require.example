/**
 * Main Script
 *
 * Justin Christensen
 * Tue Aug  6 22:54:45 2013
 */
require.config({
  paths: {
    jquery: [
      '//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min',
      'lib/jquery.min'
    ]
  }
});

require(['lib/modernizr']);

require(['user-form'], function (UserForm) {
  var form = new UserForm();
});
