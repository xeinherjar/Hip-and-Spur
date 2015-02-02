
// Double Curly Setup

_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
var menuItems, news, specials, menu, templateString, templateFunct, TemplateHTML;


// Fetching Menu Data

$.getJSON('http://private-anon-e6abf6810-restaurantapi.apiary-mock.com/menu')
	.done(function(data){
		menu = data;
		entrees = menu.entrees;
		sides = menu.sides;
		app = menu.appetizers;

	// Entree Section

	var menuEntrees = $('.entrees'); // Where to dump
	
	templateString = $('#menuTemp').html();
	templateFunct = _.template(templateString);
	templateHTML = templateFunct;

	_.each(entrees, function(food){
		menuEntrees.append(templateFunct(food))
	});

	// Appetizers Section

	var menuAppet = $('.appetizers'); // Where to dump
	
	templateString = $('#menuTemp').html();
	templateFunct = _.template(templateString);
	templateHTML = templateFunct;

	_.each(app, function(food){
		menuAppet.append(templateFunct(food))
	});

	// Sides Section

	var menuSides = $('.sides'); // Where to dump
	
	templateString = $('#menuTemp').html();
	templateFunct = _.template(templateString);
	templateHTML = templateFunct;

	_.each(sides, function(food){
		menuSides.append(templateFunct(food))
	});


}) 	.fail( function (){
		console.log('Fail')
});


// Tab Structure


$('.story-tab').on('click', function(){
	$('.story-content').addClass('story-active');
	$('.menu-content').addClass('menu-hidden');
	$('.location-content').removeClass('location-active');
	$('.reserve-content').removeClass('reserve-active');

});
$('.menu-tab').on('click', function(){
	$('.menu-content').removeClass('menu-hidden');
	$('.story-content').removeClass('story-active');
	$('.location-content').removeClass('location-active');
	$('.reserve-content').removeClass('reserve-active');

});
$('.location-tab').on('click', function(){
	$('.location-content').addClass('location-active');
	$('.story-content').removeClass('story-active');
	$('.menu-content').addClass('menu-hidden');
	$('.reserve-content').removeClass('reserve-active');

});
$('.reserve-tab').on('click', function(){
	$('.reserve-content').addClass('reserve-active');
	$('.menu-content').addClass('menu-hidden');
	$('.story-content').removeClass('story-active');
	$('.location-content').removeClass('location-active');

});



var latest = 'http://private-anon-06e306242-restaurantapi.apiary-mock.com/news/latest';



$.getJSON('http://private-anon-06e306242-restaurantapi.apiary-mock.com/news/latest').done(function (a) {
			// console.log(a);
		});
		
$.getJSON('http://private-anon-06e306242-restaurantapi.apiary-mock.com/news/latest').done(function (latestTitle) {
			// console.log(latestTitle.title);
			
		});



$.getJSON('http://private-anon-06e306242-restaurantapi.apiary-mock.com/news/latest').done(function (latestPost) {
			// console.log(latestPost.post);
		});


$.getJSON('http://private-anon-06e306242-restaurantapi.apiary-mock.com/news/latest').done(function (newsText) {
		$.getJSON('http://private-anon-06e306242-restaurantapi.apiary-mock.com/news/latest').done(function (latestTitle) {
			// console.log(latestTitle.title);
			})
		
		$.getJSON('http://private-anon-06e306242-restaurantapi.apiary-mock.com/news/latest').done(function (latestPost) {
			// console.log(latestPost.post);
			})
	
	// console.log (newsText);
		});


var latestNews = $('#news-template').html();

var latestRendered = _.template(latestNews);


 $.getJSON(latest).done (function (i){
 $('.news').append(latestRendered(i));
 });


//ADD CLICK ON SOCIAL MEDIA BUTTONS

// var fa-facebook-official = 'http://www.facebook.com';

// <button id="FB-button"></button>

// $('#FB-button').on('click', function() {
//  $('.fa-facebook-official') = 'http://www.facebook.com';
// });

// console.log (fa-facebook-official);

//HTML
//   <title>jQuery Intro</title>
//   <link rel="stylesheet" type="text/css" href="normalize.css">
//   <link rel="stylesheet" type="text/css" href="main.css">
//   <link href='http://fonts.googleapis.com/css?family=Raleway:300' rel='stylesheet' type='text/css'>
// </head>
// <body>

// <div class="container1">
//   <h1>Section One </h1>
//   	<div class="content1">
//   	 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias quod neque velit molestias, aliquam quo. Error cumque nesciunt veritatis natus, at vitae aliquam, blanditiis, recusandae rerum ullam voluptatum cum!</p>
//   	 </div>
// </div>
// <div class="container2">
// <h1>Section Two </h1>
// 	<div class="content2"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias quod neque velit molestias, aliquam quo. Error cumque nesciunt veritatis natus, at vitae aliquam, blanditiis, recusandae rerum ullam voluptatum cum!</p>
// 	</div>
// </div> 
// <div class="container3">
// <h1>Section Three </h1>
// 	<div class="content3"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias quod neque velit molestias, aliquam quo. Error cumque nesciunt veritatis natus, at vitae aliquam, blanditiis, recusandae rerum ullam voluptatum cum!</p>
// 	</div>
// </div> 

//   <script src="jquery-2.1.3.min.js"></script>
//   <script src="accordian.js"></script>

// </body>
// </html>

// //JS
// $('.container1').on('click', function () {
// 	$('.content1').addClass('open1');

// });

// $('.container2').on('click', function () {
// 	$('.content1').removeClass('open1');
// 	$('.content2').addClass('open2');
// });

// $('.container3').on('click', function () {
// 	$('.content2').removeClass('open2');
// 	$('.content3').addClass('open3');
	
// });





// Instagram
var client_id = '0f223fd6011c434bace67e54d62ebdd6'
var client_secret = '1e02f04f7377442487b9c17a6185ebbd'

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

console.log('The Iron Yard Rocks');