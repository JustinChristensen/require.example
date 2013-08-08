/**
 * User Table
 *
 * Justin Christensen
 * Tue Aug  6 22:54:45 2013
 */
define(['jquery', 'lib/mustache'], function ($, mustache) {
  var _defaults = {
      container: '.user-entry-container',
      templateSelector: '#users-table-template',
      templateRowSelector: '#users-table-row-template',
      headers: [
        'User ID',
        'Username',
        'Password',
        'Email Address'
      ]
    },

    _createTable = function (self) {
      var table = mustache.render(self.template, {
        headers: self.config.headers    
      });

      return table;
    },

    UserTable = function (config) {
      if(!(this instanceof UserTable)) {
        return new UserTable(config);
      }
      this.config = $.extend({}, config, _defaults);
      this.initialize();
    };

  UserTable.prototype = {
    initialize: function () {
      this.container = $(this.config.container);
      this.template = $(this.config.templateSelector).html();
      this.rowTemplate = $(this.config.templateRowSelector).html();

      this.tableBuffer = _createTable(this);
      this.table = this.container.append(this.tableBuffer);
      this.entries = this.table.find('.user-entries');

      this.id = 1;
      this.userEntries = [];

      this.renderStoredEntries();
    },

    insertRow: function (username, password, email) {
      var rowBuffer = mustache.render(this.rowTemplate, {
        id: this.id++,
        username: username,
        password: password,
        email: email
      });

      this.entries.append(rowBuffer);

      this.userEntries.push({
        username: username,
        password: password,
        email: email
      });

      localStorage.setItem('entries', JSON.stringify(this.userEntries));
    },

    renderStoredEntries: function () {
      var entries = JSON.parse(localStorage.getItem('entries')),
        self = this;

      $.each(entries || [], function () {
        self.insertRow(this.username, this.password, this.email);  
      });
    }
  };

  return UserTable;
});
