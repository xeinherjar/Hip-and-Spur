var latest = 'http://private-anon-06e306242-restaurantapi.apiary-mock.com/news/latest';

$.getJSON('http://private-anon-06e306242-restaurantapi.apiary-mock.com/news/latest').done(function (a) {
			console.log(a);
		});
		
$.getJSON('http://private-anon-06e306242-restaurantapi.apiary-mock.com/news/latest').done(function (latestTitle) {
			console.log(latestTitle.title);
		});
		
$.getJSON('http://private-anon-06e306242-restaurantapi.apiary-mock.com/news/latest').done(function (latestPost) {
			console.log(latestPost.post);
		});


$.getJSON('http://private-anon-06e306242-restaurantapi.apiary-mock.com/news/latest').done(function (newsText) {
		$.getJSON('http://private-anon-06e306242-restaurantapi.apiary-mock.com/news/latest').done(function (latestTitle) {
			console.log(latestTitle.title);
			})
		
		$.getJSON('http://private-anon-06e306242-restaurantapi.apiary-mock.com/news/latest').done(function (latestPost) {
			console.log(latestPost.post);
			})
	
	console.log (newsText);
		});





var latestNews = $('#news-template').html();


var latestRendered = _.template(latestNews);


 $.getJSON(latest).done (function (i){
 $('.news').append(latestRendered(i));
 });




