/**
* DO NOT EDIT THIS FILE.
* All changes should be applied to ./modules/contextual/js/views/KeyboardView.es6.js
* See the following change record for more information,
* https://www.drupal.org/node/2873849
* @preserve
**/

(function (Drupal, Backbone) {

  'use strict';

  Drupal.contextual.KeyboardView = Backbone.View.extend({
    events: {
      'focus .trigger': 'focus',
      'focus .contextual-links a': 'focus',
      'blur .trigger': function blurTrigger() {
        this.model.blur();
      },
      'blur .contextual-links a': function blurContextualLinksA() {
        var that = this;
        this.timer = window.setTimeout(function () {
          that.model.close().blur();
        }, 150);
      }
    },

    initialize: function initialize() {
      this.timer = NaN;
    },

    focus: function focus() {
      window.clearTimeout(this.timer);
      this.model.focus();
    }

  });
})(Drupal, Backbone);