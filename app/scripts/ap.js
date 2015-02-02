var endpoint = 'https://api.instagram.com/v1/'
var food_search = 'tags/steak/media/recent?client_id='

// client_id is in auth.js
var search_url = endpoint + food_search + client_id;
var search_results;
var img_urls;

var aside = $('aside');

$.ajax({
    url: search_url,
    dataType: "jsonp",
    success: function (data) {
      search_results = data;

      img_urls = _.map(data.data, function(d) { return d.images.standard_resolution.url;
       })

      for (var i = 0; i < 5; i++) {
        var img = '<a href="#"><div class="ig-card">' +
          '<img src=' + img_urls[i] + ' class="ig-img" />' +
          '</div></a>';
        aside.append(img);
      }

    },
    fail: function() {
      for (var i = 0; i < 5; i++) {
       var img = '<div class="ig-card ig-fail">Unable to reach Instagram</div>';
       aside.append(img);
      }
    }
});





/* slide-show */
/* center images in header */
var slide_img = $('.slide-img');
$(document).ready( function() {
  var slideshow_height = $('.header-slideshow').height();
  $('.slide-img').each(function(i, el) {
    var slide_height_offset = -(slideshow_height - (el.naturalHeight / 2));
    $(this).css("top", slide_height_offset);
  });
});


/* slide images */
var count = 0;
setInterval( function() {
  var total = slide_img.length -1;

  if (!(count < total)) {
    count = 0;
    slide_img.eq(count).removeClass('slide-img-hide');
    slide_img.eq(total).addClass('slide-img-hide');
  } else {
    count += 1;
    slide_img.eq(count).removeClass('slide-img-hide');
    slide_img.eq(count - 1).addClass('slide-img-hide');
  }

}, 5000);



// Daily Special
var m_endpoint = 'http://private-anon-eafb492e3-restaurantapi.apiary-mock.com/menu';
var ds_endpoint = 'http://private-anon-eafb492e3-restaurantapi.apiary-mock.com/menu/special';
var special;
$.getJSON(ds_endpoint, function(data) {
  $.getJSON(m_endpoint, function(menu) {
  var id = data.menu_item_id;
  _.each(menu, function(items) { 
    _.map(items, function(item) {
      if (item.id === id) {
        special = item;
        return;
      }
    });
  });

  // Update Daily Special HTML Block
  var daily_special = $('.daily-special');
  var menu_template = $('#menuTemp').html();
  var ds_template_function = _.template(menu_template);
  daily_special.append( '<div class="ig-card"> <img class="ig-img" src="' + img_urls[10] + '" /></div>' );
  daily_special.append(ds_template_function(special));
  });
});


var res_ep = "http://tiy-atl-fe-server.herokuapp.com/collections/hipandstir"; 
$('#sub').click( function(e) {
  e.preventDefault();
  $.ajax({
    url: res_ep,
    type: 'post',
    dataType: 'json',
    data: $('#reservation-form').serialize(),
    success: function(data) {
 
      // Remove form and update html
      var reserve_content = $('.reserve-content');
      var reserve_template = $('#reserve-template').html().trim();
      var r_template_function = _.template(reserve_template);
      reserve_content.html(r_template_function(data));

    }
  });
});
