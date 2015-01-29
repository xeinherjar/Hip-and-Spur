var endpoint = 'https://api.instagram.com/v1/'

var food_search = 'tags/steak/media/recent?client_id='


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
      var img = '<a href="#">' +
        '<img src=' + img_urls[i] + ' class="ig-img" />' +
        '</a>';
      aside.append(img);
      }

    }
});





// slide-show
var slide_img = $('.slide-img');
$(document).ready( function() {
  var slideshow_height = $('.header-slideshow').height();
  $('.slide-img').each(function(i, el) {
    var slide_height_offset = -(slideshow_height - (el.naturalHeight / 2));
    $(this).css("top", slide_height_offset);
  });
});

// flip-image
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



