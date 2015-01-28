var endpoint = 'https://api.instagram.com/v1/'
var food_search = 'tags/food/media/recent?client_id='

var search_url = endpoint + food_search + client_id;
var search_results;
var img_urls;

$.ajax({
    url: search_url,
    dataType: "jsonp",
    success: function (data) {
      search_results = data;
      img_urls = _.map(data.data, function(d) { return d.images.standard_resolution.url; })
    }
});

