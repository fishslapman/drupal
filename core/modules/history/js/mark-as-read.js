/**
* DO NOT EDIT THIS FILE.
* All changes should be applied to ./modules/history/js/mark-as-read.es6.js
* See the following change record for more information,
* https://www.drupal.org/node/2873849
* @preserve
**/

(function (window, Drupal, drupalSettings) {

  'use strict';

  window.addEventListener('load', function () {
    if (drupalSettings.history && drupalSettings.history.nodesToMarkAsRead) {
      Object.keys(drupalSettings.history.nodesToMarkAsRead).forEach(Drupal.history.markAsRead);
    }
  });
})(window, Drupal, drupalSettings);