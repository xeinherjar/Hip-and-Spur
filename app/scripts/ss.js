// Double Curly Setup

_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
var menuItems, news, specials, menu, templateString, templateFunct, TemplateHTML;


//Menu

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

//News

$.getJSON('http://private-anon-e6abf6810-restaurantapi.apiary-mock.com/news/latest')
	.done(function(data){
		news = data;
	}) .fail( function (){
		console.log('Fail')
	});



//Daily Specials

$.getJSON('http://private-anon-e6abf6810-restaurantapi.apiary-mock.com/menu/special')
	.done(function(data){
		specials = data;
	}) .fail( function (){
		console.log('Fail')
	});