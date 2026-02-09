"use strict";

// rollIn, bounceInDown, lightSpeedIn, rollIn, pulse, bounceInRight, bounceInLeft, flipInX, bounceInRight, rollIn, shake, swing, rollIn, bounceInUp, lightSpeedIn, rollIn, pulse, lightSpeedIn, bounce, bounceInUp, bounceInRight, rollIn, flip, bounceInRight, rollIn, bounceInDown, bounceInRight

jQuery("").bind("inview", function (event, visible) {
  jQuery(this).addClass("animated fadeIn");
});

jQuery(".ht-social").bind("inview", function (event, visible) {
  jQuery(this).addClass("animated fadeInLeft");
});

jQuery(".ht-menus").bind("inview", function (event, visible) {
  jQuery(this).addClass("animated fadeInRight");
});

jQuery("h1, h2, h3, h4, h5, h6, p, ul li, .btn-p").bind(
  "inview",
  function (event, visible) {
    jQuery(this).addClass("animated fadeInUp");
  }
);

jQuery("").bind("inview", function (event, visible) {
  jQuery(this).addClass("animated fadeInDown");
});

jQuery("img, i").bind("inview", function (event, visible) {
  jQuery(this).addClass("animated zoomIn");
});

jQuery("").bind("inview", function (event, visible) {
  jQuery(this).addClass("animated flipInX");
});
