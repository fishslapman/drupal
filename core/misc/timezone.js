/**
* DO NOT EDIT THIS FILE.
* All changes should be applied to ./misc/timezone.es6.js
* See the following change record for more information,
* https://www.drupal.org/node/2873849
* @preserve
**/

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.setTimezone = {
    attach: function attach(context, settings) {
      var $timezone = $(context).find('.timezone-detect').once('timezone');
      if ($timezone.length) {
        var dateString = Date();

        var matches = dateString.match(/\(([A-Z]{3,5})\)/);
        var abbreviation = matches ? matches[1] : 0;

        var dateNow = new Date();
        var offsetNow = dateNow.getTimezoneOffset() * -60;

        var dateJan = new Date(dateNow.getFullYear(), 0, 1, 12, 0, 0, 0);
        var dateJul = new Date(dateNow.getFullYear(), 6, 1, 12, 0, 0, 0);
        var offsetJan = dateJan.getTimezoneOffset() * -60;
        var offsetJul = dateJul.getTimezoneOffset() * -60;

        var isDaylightSavingTime;

        if (offsetJan === offsetJul) {
          isDaylightSavingTime = '';
        } else if (Math.max(offsetJan, offsetJul) === offsetNow) {
            isDaylightSavingTime = 1;
          } else {
              isDaylightSavingTime = 0;
            }

        var path = 'system/timezone/' + abbreviation + '/' + offsetNow + '/' + isDaylightSavingTime;
        $.ajax({
          async: false,
          url: Drupal.url(path),
          data: { date: dateString },
          dataType: 'json',
          success: function success(data) {
            if (data) {
              $timezone.val(data);
            }
          }
        });
      }
    }
  };
})(jQuery, Drupal);