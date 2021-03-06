/**
* DO NOT EDIT THIS FILE.
* All changes should be applied to ./modules/quickedit/js/models/AppModel.es6.js
* See the following change record for more information,
* https://www.drupal.org/node/2873849
* @preserve
**/

(function (Backbone, Drupal) {

  'use strict';

  Drupal.quickedit.AppModel = Backbone.Model.extend({
    defaults: {
      highlightedField: null,

      activeField: null,

      activeModal: null
    }

  });
})(Backbone, Drupal);