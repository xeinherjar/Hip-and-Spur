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

// Turn it into a template function.
var latestRendered = _.template(latestNews);

// Pass in an object. Return value is a string
// with the bee stings replaced with object's properties
 $.getJSON(latest).done (function (i){
 $('.news').append(latestRendered(i));
 });






// var newsText = '{"latestTitle"}' + '{"latestPost"}';
// console.log (newsText);

// var object = JSON.parse( function (newsText) {
// 	console.log(object);
// });
