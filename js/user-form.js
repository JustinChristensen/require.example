/**
 * User Form
 *
 * Justin Christensen
 * Tue Aug  6 22:54:45 2013
 */
define(['jquery', 'user-table', 'validator'], function ($, UserTable, validator) {
  var _defaults = {
      selector: '.user-entry'
    },

    UserForm = function (config) {
      if(!(this instanceof UserForm)) {
        return new UserForm(config);
      }
      this.config = $.extend({}, config, _defaults);
      this.initialize();
    };

  UserForm.prototype = {
    initialize: function () {
      this.table = new UserTable();

      this.form = $(this.config.selector);
      this.inputs = {
        username: this.form.find('#entry-username'),
        password: this.form.find('#entry-password'),
        email: this.form.find('#entry-email')
      };

      this.bindSubmitHandler();
    },

    bindSubmitHandler: function () {
      this.form.on('submit', $.proxy(this.submitHandler, this));
    },

    submitHandler: function (e) {
      var valid = true;
      e.preventDefault();
      $.each(this.inputs, function (key, input) {
        if(!validator.validate[key](input.val())) {
          valid = false;
          alert('Invalid Field: ' + key);
          return false;
        };
      });

      if(valid) {
        this.table.insertRow(
          this.inputs.username.val(),
          this.inputs.password.val(),
          this.inputs.email.val()
        );
      }

      this.form.find('input[text]').val('');
    }
  };

  return UserForm;
});
