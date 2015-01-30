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

      for (var i = 0; i < 4; i++) {
      var img = '<a href="#"><div class="ig-card">' +
        '<img src=' + img_urls[i] + ' class="ig-img" />' +
        '</div></a>';
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
    setTimeout(function() {
      slide_img.eq(total).addClass('slide-img-hide');
    }, 2500);
  } else {
    count += 1;
    slide_img.eq(count).removeClass('slide-img-hide');
    setTimeout(function() {
      slide_img.eq(count - 1).addClass('slide-img-hide');
    }, 2500);
  }

}, 5000);



