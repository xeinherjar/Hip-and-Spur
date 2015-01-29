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


