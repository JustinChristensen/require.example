/**
 * Validator
 *
 * Justin Christensen
 * Tue Aug  6 22:54:45 2013
 */
define(['jquery'], function ($) {
  var Validator = function () {
      if(!(this instanceof Validator)) {
        return new Validator();
      }
    },

    rUserTest = /^[a-zA-Z]+$/,
    rPasswordTest = /^\S+$/,
    rEmailTest = /@/;

  Validator.prototype = {
    validate: {
      username: function (input) {
        return rUserTest.test(input);
      },

      password: function (input) {
        return rPasswordTest.test(input);
      },

      email: function (input) {
        return rEmailTest.test(input);
      }
    }
  };

  return new Validator();
});
