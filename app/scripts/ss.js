
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
	$('.menu-content').toggleClass('menu-active');
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
// //Daily Specials

// $.getJSON('http://private-anon-e6abf6810-restaurantapi.apiary-mock.com/menu/special')
// 	.done(function(data){
// 		specials = data;
// 		specItem = specials.menu_item_id;
// 		menuSp = $.getJSON('http://private-anon-e6abf6810-restaurantapi.apiary-mock.com/menu')
// 			.done(function(data){
// 			menu = data;
// 			entrees = menu.entrees;
// 			sides = menu.sides;
// 			app = menu.appetizers;
			
// 				var dailySpecials = $('.daily-special')

// 				_.each(entrees, function(special){
// 				if(specItem === entrees.id){
// 					dailySpecials.append(special.item)
// 					console.log(special.item)
// 					}
// 			})

// 	});
	

// }) .fail( function (){
// 	console.log('Fail')
// });

